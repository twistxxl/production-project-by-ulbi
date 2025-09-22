import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            <Counter />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
