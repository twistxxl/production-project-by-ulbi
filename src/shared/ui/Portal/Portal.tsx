import React, { FC } from 'react';
import { createPortal } from "react-dom";

interface PortalProps {
    children: React.ReactNode
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ ...props }) => {

    const { 
        children, 
        //если разраб явно не указал, то берем body
        element = document.body
    } = props

    return createPortal(children, element)
};