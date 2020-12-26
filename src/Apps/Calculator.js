import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [
                7,8,9,4,5,6,1,2,3,0
            ],
            operacoes: [
                '+', '-', '/', '*', '='
            ],
            visor: '',
            total: 0
        }
    }
    addOperacoes(op){
        if(
        this.state.visor[this.state.visor.length - 1] != '+' &&
        this.state.visor[this.state.visor.length - 1] != '-' &&
        this.state.visor[this.state.visor.length - 1] != '/' &&
        this.state.visor[this.state.visor.length - 1] != '*' &&
        this.state.visor[this.state.visor.length - 1] != '='
        ){
            if(op != '='){
                this.setState({visor: this.state.visor += op})
            } else{
                this.setState({total: eval(this.state.visor)})
                this.setState({visor: ''})
            }
        }   
    }
    addNumbers(number){
        if(number == '0' && this.state.visor.length == 0){
            return
        } else{
            this.setState({visor: this.state.visor += number.toString()})
        }
    }
    render(){
    return (
    <div className={`appDesktop calculator`}>
        <div className="visor">
            <h2>
                { this.state.total }
            </h2>
            <h1>
            { this.state.visor }
            </h1>
        </div>
        <div className="numbers">
            { this.state.numbers.map((item, i) => (
                <button 
                onClick={() => this.addNumbers(item)}
                className={`${item == 0 ? 'zero' : ''}`}>
                    { item }
                </button>
            )) }
        </div>
        <div className="operacoes">
            { this.state.operacoes.map((item, i) => (
                <button
                onClick={() => this.addOperacoes(item)}>
                    { item }
                </button>
            )) }
        </div>
    </div>
    )
    }
}

export default Calculator;