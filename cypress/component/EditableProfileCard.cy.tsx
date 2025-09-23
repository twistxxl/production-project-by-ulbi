import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const user_id = '4';

describe('EditableProfileCard.cy.tsx', () => {
    it('should render component', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: user_id,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={user_id} />
            </TestProvider>,
        );
    });
});
