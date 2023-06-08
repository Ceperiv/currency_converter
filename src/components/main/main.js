import React, {useEffect, useState} from 'react';

import './main.scss';
import moneyImg from '../../assets/money-bg.jpg'
import {converterService} from "../../services";

function Main(props) {
    const valCode = ['UAH', 'USD', 'EUR', 'PLN',]

    const [amount, setAmount] = useState(0);

    const [currencyFrom, setCurrencyFrom] = useState('UAH');
    const [currencyTo, setCurrencyTo] = useState('USD');

    const [rateFrom, setRateFrom] = useState(null);
    const [rateTo, setRateTo] = useState(null);

    const [result, setResult] = useState(0);

    useEffect(() => {
        try {
            if (currencyFrom !== 'UAH') {
                converterService.getByValcode(currencyFrom).then(({data}) => {
                    setRateFrom(data[0].rate)
                })
            } else {
                setRateFrom(null)
            }
        } catch (e) {
            console.log(e)
        }
    }, [currencyFrom]);

    useEffect(() => {
        try {
            if (currencyTo !== 'UAH') {
                converterService.getByValcode(currencyTo).then(({data}) => {
                    setRateTo(data[0].rate)
                })
            } else {
                setRateTo(null)
            }
        } catch (e) {
            console.log(e)
        }
    }, [currencyTo]);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleCurrencyFromChange = (e) => {
        setCurrencyFrom(e.target.value);
    };

    const handleCurrencyToChange = (e) => {
        setCurrencyTo(e.target.value);
    };

    const convertCurrency = () => {
        let result;

        if (currencyFrom === 'UAH') {
            result = amount / rateTo;
        } else if (currencyFrom !== 'UAH' && currencyTo === 'UAH') {
            result = amount * rateFrom;
        } else if (currencyFrom !== 'UAH' && currencyTo !== 'UAH') {
            result = amount * rateFrom / rateTo;
        }
        setResult(result);
    };

    return (
        <main className="main">
            <img className="img" src={moneyImg} alt="br img"/>
            <h2>Конвертер</h2>
            <div className="input-group">
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Введіть суму"
                />
                <select value={currencyFrom} onChange={handleCurrencyFromChange}>
                    {valCode.map(value => (value !== currencyTo) && <option value={value}>{value}</option>)}
                </select>
            </div>
            <div className="input-group">
                <input
                    className='_result'
                    type="number"
                    value={result.toFixed(2)}
                    disabled
                />
                <select value={currencyTo} onChange={handleCurrencyToChange}>
                    {valCode.map(value => (value !== currencyFrom) && <option value={value}>{value}</option>)}
                </select>
            </div>
            <button onClick={convertCurrency}>Конвертувати</button>
        </main>
    );
}

export {Main};
