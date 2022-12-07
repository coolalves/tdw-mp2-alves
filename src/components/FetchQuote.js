import React from 'react';
import { useState } from 'react';

const FetchQuote = () => {
    const [data, setData] = useState("Click to get a quote");
    const fetchKanyeQuote = async () => {
        try {
            const res = await fetch("https://api.kanye.rest/");
            const data = await res.json();

            console.log(data.quote);
            setData(data.quote);
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
        <div>
            <p>
                {data}
            </p>
            <button onClick={fetchKanyeQuote}> Get a quote</button>
        </div>
    )
};

export default FetchQuote;