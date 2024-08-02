import React, { useState } from 'react';

function Fcalculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(prevInput => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            console.time('Calculation Time'); 
            setResult(eval(input)); 
            console.timeEnd('Calculation Time');
        } catch (error) {
            setResult('Error');
        }
    };
    // const calculateResult = (expr) => {
    //     const tokens = expr.split(/([+\-*/])/).filter(token => token.trim() !== '');
    //     let total = 0;
    //     let operator = '+';
      
    //     for (let token of tokens) {
    //       switch (token) {
    //         case '+':
    //         case '-':
    //         case '*':
    //         case '/':
    //           operator = token;
    //           break;
    //         default:
    //           const num = parseFloat(token);
    //           switch (operator) {
    //             case '+':
    //               total += num;
    //               break;
    //             case '-':
    //               total -= num;
    //               break;
    //             case '*':
    //               total *= num;
    //               break;
    //             case '/':
    //               if (num === 0) {
    //                 return 'Error'; 
    //               }
    //               total /= num;
    //               break;
    //             default:
    //               total = num;
    //               break;
    //           }
    //           break;
    //       }
    //     }
      
    //     return total; 
    //   };
    return (
        <div className="Fcalculator">
            <div className="display">
                <div className="input">
                    <div className="result">{result || input || '0'}</div>
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
}

export default Fcalculator;