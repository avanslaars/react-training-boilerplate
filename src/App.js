import React from 'react'
import { hot } from 'react-hot-loader'
import '@babel/polyfill'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the app.</h1>
      </div>
    )
  }
}

export default hot(module)(App)
