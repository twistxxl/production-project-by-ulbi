import { FC, useEffect, useState } from 'react';
import { Button } from "shared/lib/Button/Button";
import { useTranslation } from "react-i18next";

interface BugButtonProps {
    className?: string;
}

// компонент для тестирования

export const BugButton: FC<BugButtonProps> = () => {
    const {t} = useTranslation()
    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
        console.log(error);
        
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={throwError}>
            {t('Вызвать ошибку')}
        </Button>
    );
};