import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo,
    MutableRefObject,
    useRef,
    UIEvent,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import stl from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: React.ReactNode;
    onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPostion = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPostion;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(stl.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={stl.trigger} />
            )
                : null}
        </section>
    );
});
