import React from 'react';
import { useState } from 'react';
import './FetchQuote.scss';
import ActionButtons from '../ActionButtons/ActionButtons';
import axios from 'axios';

const FetchQuote = () => {
    const [quote, setQuote] = useState('');
    const [gotQuote, setGotQuote] = useState(false);
    const handleClick = async () => {
        const response = await axios.get('https://api.kanye.rest');
        setQuote(response.data.quote);
        setGotQuote(true);
    };

    return (
        <div className={"container"}>
            <p className={"quote-text"}>
                {quote}
            </p>
            <button onClick={handleClick} className={"quote-button"}> get a quote</button>
            {
                gotQuote ? <ActionButtons props={quote} /> : null}
        </div>
    )
};

export default FetchQuote;