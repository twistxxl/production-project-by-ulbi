import { classNames } from "shared/lib/classNames/classNames";
import { FC } from 'react';
import stl from './PageLoader.module.scss';
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(stl.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};