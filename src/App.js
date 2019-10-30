import React from 'react'
import { hot } from 'react-hot-loader'
import '@babel/polyfill'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Once upon a time there was a HUGE GIANT MAMA bear. She lived in  a forest not too far away from the office here at futurice.
          She was hungry and mad, now looking for food. A huge alarm was blaring and the noice was unbearable. And then the animal control came
          and shot him. The end.
        </h1>
      </div>
    )
  }
}

export default hot(module)(App)
