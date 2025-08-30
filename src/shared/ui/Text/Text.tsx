import { classNames } from "shared/lib/classNames/classNames";
import stl from './Text.module.scss';
import { memo } from "react";



export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {

    const { className, title, text, theme } = props

    return (
        <div className={classNames(stl.Text, { [stl[theme]]: true }, [className])}>
            {title && <p className={stl.title}>{title}</p>}
            {text && <p className={stl.text}>{text}</p>}
        </div>
    );
})

Text.displayName = 'Text'