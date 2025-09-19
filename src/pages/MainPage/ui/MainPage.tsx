import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/RatingCard';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard title={'Как вам статья?'} feedbackTitle={'Оставите отзыв?'} hasFeedback />
        </Page>
    );
};

export default MainPage;
