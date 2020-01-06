import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {scale: '10'}

    window.addEventListener('scroll', () => {
      this.setState({
        scale: '1'
      })
    })
  }

  render() {
    return (
      <main
        style={{
          transform: `scaleY(${this.state.scale})`
        }}>
      </main>
    );
  }
}
