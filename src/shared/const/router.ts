export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

// lastPage
export const getRouteNotFound = () => '*';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: getRouteMain(),
    [AppRoutes.ABOUT]: getRouteAbout(),
    [AppRoutes.PROFILE]: getRouteProfile(':id'), // + :id
    [AppRoutes.ARTICLES]: getRouteArticles(),
    [AppRoutes.ARTICLES_DETAILS]: getRouteArticleDetails(':id'), // + :id
    [AppRoutes.ARTICLE_CREATE]: getRouteArticleCreate(),
    [AppRoutes.ARTICLE_EDIT]: getRouteArticleEdit(':id'),
    [AppRoutes.ADMIN_PANEL]: getRouteAdminPanel(),
    [AppRoutes.FORBIDDEN]: getRouteForbidden(),

    // последний
    [AppRoutes.NOT_FOUND]: getRouteNotFound(),
};
