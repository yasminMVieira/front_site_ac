import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import '../styles/Welcome.css';

const Welcome: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Bem-vindo(a), Acólito(a)!";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <div className="card flex justify-content-center" >
    <Card>
      <div className="welcome">
        <h1>{text}</h1>
      </div>
    </Card>
    </div>
  );
}

export default Welcome;
