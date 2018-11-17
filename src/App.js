import React, { Component } from 'react'
import * as Babel from '@babel/standalone'
import './style/App.sass'

class App extends Component {
  constructor () {
    super()
    this.state = {
      input: '<div className="code"/>',
      output: '',
      err: ''
    }
  }

  update = e => {
    try {
      this.setState({
        output: this.compiler(e.target.value),
        err: ''
      })
    } catch (e) {
      this.setState({ err: e.message })
    }
  }

  compiler = code => Babel
    .transform(code, {
      presets: [
        'es2015',
        'react'
      ]
    })
    .code

  componentDidMount () {
    this.setState(state => ({
      output: this.compiler(state.input)
    }))
  }

  render() {
    return (
      <div className="App">
        <header>{this.state.err}</header>
        <main className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}
          />
          <pre>
            {this.state.output}
          </pre>
        </main>
      </div>
    )
  }
}

export default App
