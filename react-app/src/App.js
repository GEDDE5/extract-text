import React, { Component } from 'react'
import './App.css'

import SubmitButton from './components/SubmitButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className='upload-form' enctype="multipart/form-data">
          <div className='form-group'>
            <label>Title</label>
            <input name='title' />
          </div>
          <div className='form-group'>
            <label>Document</label>
            <input name="document" type="file" accept='.doc, .docx' />
          </div>
          <div className='form-group' style={{ 'margin-bottom': 0 }}>
            <SubmitButton />
          </div>
        </form>
      </div>
    )
  }
}

export default App;
