import { classNames } from "shared/lib/classNames/classNames";
import { FC } from 'react';
import stl from './LoginModal.module.scss';
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {

    return (
        <Modal
            lazy
            className={classNames(stl.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};