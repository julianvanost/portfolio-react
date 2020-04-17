require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express();
const port = process.env.PORT || 3001
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.get('/*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'))
})
app.listen(port, () => {
   console.log('Server is up!')
})