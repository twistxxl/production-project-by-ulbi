import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { counterActions, useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();
    const { t } = useTranslation();

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    const handleAdd = () => {
        add(10);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDecrement}>
                {t('decrement')}
            </Button>
            <Button data-testid="add-static-count-btn" onClick={handleAdd}>
                {t('add 10')}
            </Button>
        </div>
    );
};
