import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '../../deprecated/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

/**
 * @deprecated
 */

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
