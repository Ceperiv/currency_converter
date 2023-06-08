import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "../../layouts";
import {Error404} from "../error404/error404";
import {Main} from "../main/main";

function Routers(props) {
    return (
        <div>
            <Routes>
                <Route index element={<Navigate to="/converter" replace/>}/>
                <Route path={''} element={<MainLayout/>}>
                 <Route path={'/converter'} element={<Main/>}/>

                </Route>
                <Route path={'*'} element={<Navigate to="/error404" replace/>}/>
                <Route path={'error404'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export {Routers};
