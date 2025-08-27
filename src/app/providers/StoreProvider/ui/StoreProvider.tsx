import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children: React.ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ ...props }) => {

    const { 
        children,
        initialState    
    } = props

    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}