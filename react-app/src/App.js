import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

import SubmitButton from './components/SubmitButton'

class App extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }


  extractText = async data => {
    const config = {
      'content-type': 'multipart/form-data'
    }
    const res = await axios.post('http://localhost:5000/services/extract-text', data, config)
    this.setState({
      text: res.data.text
    })
  }

  setFile = event => {
    const doc = event.target.files[0]
    if(doc) {
      const formData = new FormData()
      formData.append('doc', doc)
      this.extractText(formData)
    }
  }

  render() {
    return (
      <div className="App">
        <form className='upload-form' encType="multipart/form-data">
          <div className='form-group'>
            <label>Title</label>
            <input name='title' />
          </div>
          <div className='form-group'>
            <label>Document</label>
            <input name="document" type="file" accept='.doc, .docx' onChange={this.setFile} />
          </div>
          <div className='form-group' style={{ 'marginBottom': 0 }}>
            <SubmitButton />
          </div>
        </form>
      </div>
    )
  }
}

export default App;
