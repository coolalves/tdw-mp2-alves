import React from 'react';
//import axios from 'axios';
import {useEffect} from 'react';

const App = () => {

  useEffect(() => {
    const fetchKanyeQuote = async () => {
      try {
        const res = await fetch("https://api.kanye.rest/");
        const data = await res.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchKanyeQuote();
  }, []);

  // Promise chaining approach for comparison
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
  }, []);



  return (
    <div>
      test
    </div>

  );
}

export default App;   
