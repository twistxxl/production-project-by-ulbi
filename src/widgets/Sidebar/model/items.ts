import React from "react";
import { RoutePath } from "shared/config/route/routeConfig";
import profileIcon from 'shared/assets/icons/profile-20-20.svg'
import aboutIcon from 'shared/assets/icons/about-20-20.svg'
import mainIcon from 'shared/assets/icons/main-20-20.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}


export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        icon: mainIcon
    },
    {
        path: RoutePath.about,
        text: 'About',
        icon: aboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        icon: profileIcon
    }
]