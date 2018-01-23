const textract = require('textract')


module.exports = file => {
  const toHtml = text => text.replace(/\n/g, '<br />')
  return new Promise((resolve, reject) => {
    textract.fromBufferWithName('testing.docx', file, { preserveLineBreaks: true }, (err, text) => {
      if(err) {
        reject(err)
      }
      resolve(toHtml(text))
    })
  })
}
