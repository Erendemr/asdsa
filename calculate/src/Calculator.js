import React, { Component } from 'react'
import './Calculator.css';


 class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : '',
            result : ''
        }
    }
    handleClick = (value) => {
        this.setState(prevState => ({
            input : prevState.input + value
        }));
    }
    handleClear = () => {
        this.setState({
            input: '',
            result : ''
        });
    }
    handleCalculate = () => {
        try {
            console.time('Calculation Time'); 
            this.setState({
                result: eval(this.state.input)
            }, () => {
                console.timeEnd('Calculation Time'); 
            });
        } catch (error) {
            this.setState({
                result: 'error'
            });
            console.timeEnd('Calculation Time'); 
        }
    };

  render() {
    return (
        <div className="calculator">
        <div className="display">
          <div className="input">{this.state.input || '0'}</div>
          <div className="result">{this.state.result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleClick('1')}>1</button>
          <button onClick={() => this.handleClick('2')}>2</button>
          <button onClick={() => this.handleClick('3')}>3</button>
          <button onClick={() => this.handleClick('+')}>+</button>
          <button onClick={() => this.handleClick('4')}>4</button>
          <button onClick={() => this.handleClick('5')}>5</button>
          <button onClick={() => this.handleClick('6')}>6</button>
          <button onClick={() => this.handleClick('-')}>-</button>
          <button onClick={() => this.handleClick('7')}>7</button>
          <button onClick={() => this.handleClick('8')}>8</button>
          <button onClick={() => this.handleClick('9')}>9</button>
          <button onClick={() => this.handleClick('*')}>*</button>
          <button onClick={() => this.handleClick('0')}>0</button>
          <button onClick={() => this.handleClick('.')}>.</button>
          <button onClick={this.handleCalculate}>=</button>
          <button onClick={() => this.handleClick('/')}>/</button>
          <button onClick={this.handleClear}>C</button>
        </div>
      </div>
    )
  }
}
export default Calculator;