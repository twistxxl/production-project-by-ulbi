import { classNames } from "shared/lib/classNames/classNames";
import { FC, useState } from 'react';
import stl from './Sidebar.module.scss';
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classNames(stl.Sidebar, {[stl.collapsed]: collapsed}, [className])}>
            <button 
            onClick={onToggle}
            >toggle</button>
            <div className={stl.switchers}>
            <ThemeSwitcher  />
            <LangSwitcher className={stl.langSwitcher}/>
            </div>
        </div>
    );
};