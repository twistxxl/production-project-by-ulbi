import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/ui/Page';
import { Text } from '@/shared/ui/deprecated/Text';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page
            data-testid="ForbiddenPage"
            className={classNames('', {}, [className])}
        >
            <Text title={t('Forbidden page')} />
        </Page>
    );
});
