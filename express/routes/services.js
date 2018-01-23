const express = require('express')
const router  = express.Router()

const upload = require('multer')()

const extractText = require('../services/extract-text')

router.post(
  '/',
  (req, res) => res.json({ success: true })
)

router.post('/extract-text', upload.single('doc'), async (req, res) => {
  const text = await extractText(req.file.buffer)
  res.json({ text: text })
})

module.exports = router
