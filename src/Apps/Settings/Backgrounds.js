import React from 'react';

class Config extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgrounds: [
                {
                    'title': 'Blue Tower',
                    'image': './backgrounds/1.jpg'
                },
                {
                    'title': 'Linux Kernel',
                    'image': './backgrounds/2.png'
                },
                {
                    'title': 'Watermill',
                    'image': './backgrounds/3.jpg'
                },
                {
                    'title': 'City',
                    'image': './backgrounds/4.jpg'
                },
                {
                    'title': 'Green',
                    'image': './backgrounds/5.jpg'
                },
                {
                    'title': 'Pinguim',
                    'image': './backgrounds/6.png'
                },
                {
                    'title': 'Big Sur',
                    'image': './backgrounds/7.jpg'
                }
            ]
        }
    }
    selectBackground(background){
        window.localStorage.setItem('background', background)
    }
    render(){
    return (
    <div className={`appDesktop ConfigBackgrounds`}>
        <div className="center">
        {
            this.state.backgrounds.map((item, i) =>  (
                <div className={`item 
                ${(window.localStorage.getItem('background') == item.image) ? 'selected' : 'notSelect'}
                ${(window.localStorage.getItem('background') == null && i == 0 ? 'selected': 'notSelect')}
                `}
                onClick={() => this.selectBackground(item.image)}
                >
                    <img src={item.image}/>
                    <div className="right">
                        <h3>
                            { item.title }
                        </h3>  
                    </div>
                </div>
            ))
        }
        </div>
    </div>
    )
    }
}

export default Config;