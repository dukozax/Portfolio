import React from 'react';
import Backgrounds from './Settings/Backgrounds';

class Config extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inConfigAba: false,
            whoAbaConfig: null,
            settingsArray: [
                {
                    'title': 'Appearance',
                    'srcImg': './icons/appe_settings.png',
                    'aba': Backgrounds
                }
            ]
        }
    }
    render(){
    return (
    <div className={`appDesktop Config`}>
        {
        this.state.whoAbaConfig != null &&
        <div 
        onClick={() => this.setState({whoAbaConfig: null})}
        className="back">
            All settings
        </div>
        }
        {
            this.state.whoAbaConfig == null &&
            this.state.settingsArray.map((item, i) =>  (
            <div className="list"
            onClick={() => this.setState({whoAbaConfig: item})}
            >
            <h2>
            <img src={item.srcImg}/>
            { item.title }
            </h2>
            <div className="item">
                <div className="icon">
                    <img src="./icons/background_settings.png"/>
                </div>
                <span>
                    Backgrounds
                </span>
            </div>
            </div>
        ))
        }
        
        <div className={`show ${(this.state.whoAbaConfig != null ? 'showed' : 'notShow')}`}>
        {
        this.state.whoAbaConfig != null &&
        <this.state.whoAbaConfig.aba>
        </this.state.whoAbaConfig.aba>
         }
         {/* {
             
             this.state.whoAbaConfig != null &&
             this.state.whoAbaConfig.title == 'Appearance' &&
            <div className="colorSolid">
                <p>
                    Gradient
                </p>
                <div className="se">
                    <span>Start</span>
                    <input type="color"></input>
                </div>
                <div className="se">
                    <span>End</span>
                    <input type="color"></input>
                </div>
            </div>
         } */}
        </div>
        
    </div>
    )
    }
}

export default Config;