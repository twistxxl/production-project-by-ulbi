import { User } from '../../../src/entities/User';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';

export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: 'Bearer123',
        },
        body: {
            id: '4',
            first: 'Джейсон',
            lastname: 'Стетхем',
            age: 52,
            currency: 'RUB',
            country: 'Ukraine',
            city: 'Kiev',
            username: 'testuser',
            avatar: 'https://avatars.mds.yandex.net/get-yapic/29310/9rKv7Y3Ldh5E0pKfVdzy9LGWkI-1/orig',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                firstname?: string,
                lastname?: string,
            ): Chainable<User>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}

export {};
