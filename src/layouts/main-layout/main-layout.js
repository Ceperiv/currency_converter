import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";

function MainLayout(props) {
    return (
        <div className='main_layour_wrap'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    );
}

export {MainLayout};
