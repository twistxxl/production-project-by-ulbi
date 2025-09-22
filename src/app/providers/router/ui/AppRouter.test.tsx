import { componentRender } from "@/shared/lib/tests/componentRender/componentRender"
import AppRouter from "./AppRouter"
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from "@/shared/const/router"
import { screen } from "@testing-library/react"
import { UserRole } from "@/entities/User"

describe('app/router/AppRouter', function () {
    test('Страница должна отрендериться', async function () {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage', {}, { timeout: 3000 });
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async function () {
        componentRender(<AppRouter />, {
            route: '/non-existent-route',
        });

        const page = await screen.findByTestId('NotFoundPage', {}, { timeout: 3000 });
        expect(page).toBeInTheDocument();
    });

    test('редирект неавторизованного пользователя на главную', async function () {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage', {}, { timeout: 3000 });
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой странице для авторизованного пользователя', async function () {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: { user: { _inited: true, authData: {} } },
        });

        const page = await screen.findByTestId('ProfilePage', {}, { timeout: 3000 });
        expect(page).toBeInTheDocument();
    });
    // тут у меня баг, админ панель открывается у всех(из за этого этот тест падает)
    test('Доступ запрещен (отсутствует роль)', async function () {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: { user: { _inited: true, authData: {} } },
        });

        const page = await screen.findByTestId('ForbiddenPage', {}, { timeout: 3000 });
        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен (присутствует роль)', async function () {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: { user: { _inited: true, authData: {roles: [UserRole.ADMIN]} } },
        });

        const page = await screen.findByTestId('AdminPanelPage', {}, { timeout: 3000 });
        expect(page).toBeInTheDocument();
    });
    
})