import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import stl from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: React.ReactNode;
    onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

    return (
        <section
            ref={wrapperRef}
            className={classNames(stl.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
