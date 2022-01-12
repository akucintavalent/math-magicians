import { useState, useEffect } from 'react';
import styles from './Quote.module.css';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote(`${data.content} -- ${data.author}`));
  }, []);

  return (
    <div className={styles.quote}>
      <h2>{ quote }</h2>
    </div>
  );
};

export default Quote;
