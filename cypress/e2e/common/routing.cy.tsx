import {selectByTestId} from "../helpers/selectByTestId";
import '../../support/commands'

describe('Routing', () => {
  describe('User not authinticated', () => {

    it('переход на главную', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('переход на profilePage', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('переход на profilePage', () => {
      cy.visit('/fdsgsdfg')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })

  })

  describe('User authinticated', () => {
    beforeEach(() => {
      cy.login()
    })

    it('переход на profilePage', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('переход на ArticlesPage', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })

})