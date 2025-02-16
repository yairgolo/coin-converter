import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function CoinBox({ rate, currency, currencyBase, symbol, baseSymbol }) {
    const [curCoin, setCurCoin] = useState(1);
    const [secCoin, setSecCoin] = useState(rate);

    useEffect(() => {
        setCurCoin(1)
        setSecCoin((curCoin * rate).toFixed(2));
        console.log(rate);
        
    }, [rate, currency, currencyBase]);

    const handleCurCoinChange = (value) => {
        setCurCoin(value);
        setSecCoin((value * rate).toFixed(2));
    };

    const handleSecCoinChange = (value) => {
        setSecCoin(value);
        setCurCoin((value / rate).toFixed(2));
    };

    return (
        <div className="coinBox">
            <div>
                <span>{currencyBase + `(${baseSymbol})`}</span>
                <input type="number" value={curCoin} onChange={(e) => handleCurCoinChange(e.target.value)} />
            </div>
            <div>
                <span>{currency + `(${symbol})`}</span>
                <input type="number" value={secCoin} onChange={(e) => handleSecCoinChange(e.target.value)} />
            </div>
        </div>
    );
}


export function Coin() {
    const [err, setErr] = useState();
    const [currentCoin, setCurrentCoin] = useState();
    const [currencies, setCurrencies] = useState({});
    const { coin } = useParams();

    useEffect(() => {
        fetch(`https://api.vatcomply.com/rates?base=${coin}`)
            .then(res => res.json())
            .then(setCurrentCoin)
            .catch(err => setErr(err));

        fetch("https://api.vatcomply.com/currencies")
            .then(res => res.json())
            .then(setCurrencies)
            .catch(err => setErr(err));
    }, [coin]);

    if (err) {
        return <div>ERROR: {err.message}</div>;
    }

    if (!currentCoin || Object.keys(currencies).length === 0) {
        return <div>Loading...</div>;
    }

    console.log(currentCoin);

    return (
        <div className="coinPage">
            <h2>{currencies[coin]?.name}</h2>
            <div className="coinCont">
                {Object.entries(currentCoin.rates).map(([currency, rate]) =>
                    <CoinBox key={currency} currency={currency} currencyBase={currentCoin.base}
                        rate={rate.toFixed(6)} symbol={currencies[currency].symbol}
                        baseSymbol={currencies[coin].symbol} />
                )}
            </div>
        </div>
    );
}