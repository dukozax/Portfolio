import React from 'react';
import './App.css';
import Draggable from 'react-draggable';
import Application from './Application';
import Terminal from './Apps/Terminal';
import AboutMe from './Apps/AboutMe';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        appFocus: -1,
        ativoMenu: false,
        appOpeneds: [],
        zIndex: 1,
        appsOptionsBar: [
          {
            'name': 'Terminal',
            'image': './apps/terminal.png',
            'opened': Terminal
          },
          {
            'name': 'About me',
            'image': './apps/me.png',
            'app': AboutMe
          }
        ],
        allApps: [
          {
            'name': 'Terminal',
            'image': './apps/terminal.png',
            'app': Terminal,
            'zIndex': 0
          },
          {
            'name': 'About me',
            'image': './apps/me.png',
            'app': AboutMe,
            'zIndex': 0
          }
        ]
      }
  }
  zIndexApp(name){
    var array = [...this.state.allApps]
    var itemFound = array.find(e => e.name == name)
    var foundId = array.indexOf(itemFound)
    if(itemFound){
      var zIndex = array[foundId].zIndex
      zIndex = zIndex += 1
      array[foundId].zIndex = zIndex
      this.setState({allApps: array})
    }
  }
  openApp(app, name){
    if(!this.state.appOpeneds.find(element => element.title == name)){
      this.zIndexApp(name)
      this.setState(appOpeneds => ({
        appOpeneds: [...this.state.appOpeneds, {'app': app, 'title': name, 'zIndex': this.state.zIndex}]
      }))
    } 
    this.onStartDrag()
  }
  closeApp(name){
    if(this.state.appOpeneds.find(element => element.title == name)){
      var array = [...this.state.appOpeneds]
      var itemFound = this.state.appOpeneds.find(e => e.title == name)
      var foundId = this.state.appOpeneds.indexOf(itemFound)
      console.log(foundId)
      if(itemFound){
        array.splice(foundId, 1)
        this.setState({appOpeneds: array})
      }
    } 
  }
  onStartDrag(){
    this.setState({appFocus: -1})
    this.setState({ativoMenu: false})
  }
  onDragApp(name){
    this.zIndexApp(name)
    this.setState({appFocus: -1})
    this.setState({ativoMenu: false})
  }
  render(){
    return (
    <div className="App">
      <div className="desktop">
        <div className="apps">
            <Draggable
            grid={[95, 45]}
            onDrag={() => this.onStartDrag()}
            >
              <div>
              <Application
              name="Computer"
              image="./apps/folder.png"></Application>
              </div>
          </Draggable>
        </div>
        <div className={`optionsBar ${(this.state.ativoMenu ? 'abertoFocus' : 'dontAberto')}`}>
          <div className="applicationBar">
          {
          this.state.appsOptionsBar.map((item, i) =>  (
          <div 
          onMouseEnter={() => this.setState({appFocus: i})}
          onMouseLeave={() => this.setState({appFocus: -1})}
          onClick={() => this.openApp(item.opened, item.name)}>
          <Application
              name={item.name}
              image={item.image}
              focus={(this.state.appFocus == i ? true : false)}></Application>
          </div>
          ))}
          </div>
        </div>
        <div className="bottomBar">
          <div 
          onClick={() => this.setState({ativoMenu: !this.state.ativoMenu})}
          className={`appLogo ${(this.state.ativoMenu ? 'appLogoAtivo' : 'AppLogoDontAtivo')}`}>
            <img src="./apps/logo.png"/>
          </div>
        </div>
        {this.state.allApps.map((item, i) => (
        <Draggable
            handle=".move"
            onDrag={() => this.onDragApp(item.name)}
        >
        <div className="relativeApp" style={{zIndex: item.zIndex}}>
          <div className={`appL
          ${(this.state.appOpeneds.find(element => element.title == item.name) ? 'appAberto': 'appNaoAberto')}
          `}
          >
          <div className="header">
            <div 
            onClick={() => this.onDragApp(item.name)}
            className="move">

            </div>
              <span>
                  { item.name }
              </span>
              <div className="right">
                <button>
                  <i class="fas fa-minus"></i>
                </button>
                <button>
                    <i class="fas fa-plus"></i>
                </button>
                <button onClick={() => this.closeApp(item.name)}>
                    <i class="fas fa-times"></i>
                </button>
          </div>
          </div>
          <item.app>
          </item.app>
          </div>
          </div>
        </Draggable>
        ))}
        
        <span
        className="demoPort"
        >Version Portfólio, created by kaway404</span>
      </div>
    </div>
  )
}
}

export default App;
