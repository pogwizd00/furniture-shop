import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import {Routing} from "./pages/Components/Routing";
import {MantineProvider} from '@mantine/core';
import {NotificationsProvider} from "@mantine/notifications";

//todo: params inside a products useState: id,img,text,cost,quantity

function App() {

    return (
        <BrowserRouter>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <NotificationsProvider>
                    <Routing/>
                </NotificationsProvider>
            </MantineProvider>
        </BrowserRouter>

    );

}

export default App;
