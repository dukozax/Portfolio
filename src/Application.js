import React from 'react';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
    return (
    <div className="appD">
        <div className="transparent">
        </div>
        <img className="image" src={this.props.image}/>
        <span className={`${(this.props.focus ? 'focus' : '')}`}>{this.props.name}</span>
    </div>
    )
    }
}

export default Application;