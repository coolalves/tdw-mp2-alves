import React from 'react';
import { useState } from 'react';
import './FetchQuote.scss';
import ActionButtons from '../ActionButtons/ActionButtons';

const FetchQuote = () => {
    const [data, setData] = useState("");
    const [gotQuote, setGotQuote] = useState(false);

    const fetchKanyeQuote = async () => {
        try {
            const res = await fetch("https://api.kanye.rest/");
            const data = await res.json();

            console.log(data.quote);
            setData(data.quote);
            setGotQuote(true);
        } catch (error) {
            console.error(error);
        }
    };
    /* // Promise chaining approach for comparison
     useEffect(() => {
         const fetchKanyeQuote = async () =>
             await fetch("https://api.kanye.rest/")
                 .then((res) => res.json())
                 .then((data) => {
                     console.log(data);
                 })
                 .catch((error) => {
                     console.error(error);
                 });
 
         fetchKanyeQuote();
     }, []);*/



    return (
        <div className={"container"}>
            <p className={"quote-text"}>
                {data}
            </p>
            <button onClick={fetchKanyeQuote} className={"quote-button"}> get a quote</button>
            {
                gotQuote ? <ActionButtons /> : null}
        </div>
    )
};




export default FetchQuote;