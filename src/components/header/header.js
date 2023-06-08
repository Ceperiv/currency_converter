import React, {useEffect, useState} from 'react';

import './header.scss'
import {converterService} from "../../services";

function Header(props) {
    const [exchangeRates, setExchangeRates] = useState([]);

    useEffect(() => {
        try {
            converterService.getByValcode('').then(({data}) => {
                setExchangeRates(data);
            })
        } catch (e) {
            console.log(e);
        }
    }, []);


    return (
        <header className="header">
            <h1 className="header__title">Конвертер Валют</h1>
            <div className="header__exchange-rates">

            </div>
            <div>{exchangeRates ?

                exchangeRates.map(value => (value.cc === 'USD' || value.cc === 'EUR' || value.cc === 'PLN') &&
                    <p> {value.cc + ' ' + value.rate.toFixed(2)}</p>)

                : 'loading...'}</div>
        </header>
    );
}

export {Header};
