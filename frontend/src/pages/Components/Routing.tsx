import React, {FC} from 'react';
import {Products} from "./Products";
import {About} from "./About";
import {Contact} from "./Contact";
import {Basket} from "./Basket";
import {Navigate, useRoutes} from "react-router-dom";
import {ErrorPage} from "./ErrorPage";
import {useIsLogged} from "../../hooks/useIsLogged";
import {Layout} from "./Layout";
import {SignIn} from "./SignIn";
import {LogOut} from "./LogOut";
import {NavbarAfterLogin} from "./NavbarAfterLogin";
import {SignUp} from "./SignUp";
import {AboutWhenIsNotLogged} from "./AboutWhenIsNotLogged";
import {Producers} from "./Producers";
import {Orders} from "./Orders";


interface RoutingProps {
}


const publicRoutes = [
    {
        path: '/admin',
        element: <Orders/>
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/about',
                element: <AboutWhenIsNotLogged/>,
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/producers',
                element: <Producers/>
            }

        ]
    },
    {
        path: '/signIn',
        element: <SignIn/>
    },
    {
        path: '/signUp',
        element: <SignUp/>
    },
    {
        path: '*',
        element: <Navigate to='/signIn' replace/>
    }
]

const privateRoutes = [
    {
      path: '/admin',
      element: <Orders/>
    },
    {
        path: '/',
        element: <NavbarAfterLogin/>,
        children: [
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/producers',
                element: <Producers/>
            },
            {
                path: '/basket',
                element: <Basket/>
            },
            {
                path: '/logout',
                element: <LogOut/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]

export const Routing: FC<RoutingProps> = () => {
    const isLogged = useIsLogged();
    const routes = isLogged ? privateRoutes : publicRoutes;
    return useRoutes(routes);
};