import React from 'react';
import TerminalOp from 'react-animated-term'

const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
const termLines = [
  {
    text: 'node example.js',
    cmd: true,
    delay: 80
  },
  {
    text: '✔ Loaded app',
    cmd: false,
    repeat: true,
    repeatCount: 5,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + ' Loading app',
        delay: 40
      }
    })
  },
  {
    text: '',
    cmd: true
  }
]

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render(){
    return (
    <div className={`appDesktop terminal`}>
        <TerminalOp
        lines={termLines}
        interval={80}
      />
    </div>
    )
    }
}

export default Terminal;