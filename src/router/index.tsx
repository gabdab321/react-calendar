import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string,
    component: JSX.Element
}

export enum RouteNames {
    LOGIN= "/login",
    EVENT= "/",
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, component: <Login/>},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, component: <Event/>},
]