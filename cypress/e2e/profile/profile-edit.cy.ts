let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('profile');
        cy.login().then((user) => {
            profileId = user.id;
            cy.visit(`profile/${user.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('и прфоиль успешно загружается ', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Джейсон');
    });

    it('и редактирует его ', () => {
        const user = { firstname: 'Vasya', lastname: 'Pupkin' };
        cy.updateProfile(user.firstname, user.lastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Джейсон');
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            user.lastname,
        );
    });
});
