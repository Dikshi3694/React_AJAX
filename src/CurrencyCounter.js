import React from 'react';
import jsonp from 'jsonp';

export default class CurrencyCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={data : 0, currency:["INR","EUR","AUD","CAD","PHP"],converted : 0 };
        this.convert = this.convert.bind(this)
    }

    convert(){
        const num = +this.number.value;
        jsonp(`http://api.fixer.io/latest?base=USD&callback=${num}`, (err, data) =>  {                  
        const converted = num * data.rates[this.symbol.value];
        
        this.setState({converted});   
            });
    }

    render(){
        return(
            <div>
             <h2>CurrencyCounter</h2>
              <div>
                <span>
                    FROM
                    <input ref={node => this.number = node}type="number" />
                    <br/> 
                 To
                    <select ref={node => this.symbol = node}> 
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option> 
                        <option value="AUD">AUD</option>
                        <option value="CAD">CAD</option>
                        <option value="PHP">PHP</option>
                    </select>
                    <button onClick={this.convert} className="btn btn-success">Convert!</button>
                </span>
                <span>
                <h2>The converted value {this.state.converted}</h2>
                </span>               
                
              </div> 
            </div>
        )
    }
}