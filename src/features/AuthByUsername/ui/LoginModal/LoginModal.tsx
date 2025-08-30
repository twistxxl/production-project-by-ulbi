import { classNames } from "shared/lib/classNames/classNames";
import { FC, Suspense } from 'react';
import stl from './LoginModal.module.scss';
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync as LoginForm } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

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
            <Suspense fallback={<Loader />}>
                <LoginForm onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};