import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import stl from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(stl.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
