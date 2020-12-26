import React from 'react';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
    return (
    <div className={`appDesktop aboutMe`}>
        <div className="avatar">
            <img src="./apps/me.jpg"/>
        </div>
        <h1 className="nameMe">
            Alexandre Silva
        </h1>
        <p>
        <span className="normal">
            I'm a web developer, I know 
            <span className="react tec">React</span>, 
            <span className="vue tec">Vue</span> and <span className="php tec">PHP</span>, 
            <span className="angular tec">Angular</span> and <span className="nodejs tec">NodeJS.</span></span>
        </p>
    </div>
    )
    }
}

export default AboutMe;