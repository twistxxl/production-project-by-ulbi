import {USER_LOCALSTORAGE_KEY} from '../../../src/shared/const/localstorage'
import { User } from '../../../src/entities/User'
import { selectByTestId } from 'cypress/e2e/helpers/selectByTestId'

export const login = (username: string = 'testuser', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password
        }
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
        return body
    })
}
export const getByTestId = (testId: string, delay: number = 0) => {
    return cy.get(selectByTestId(testId), { timeout: delay });
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>
      getByTestId(testId: string, delay?: number): Chainable<JQuery<HTMLElement>>
    }
  }
}

export {};