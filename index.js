const { exec } = require('child_process')
const express = require('express')
const app = express()

app.post('/', (_, res) => {
  exec(`cd "${process.argv.slice(2)}" && git pull && pm2 restart discord`)
  res.sendStatus(200)
})

const port = process.env.PORT || 5074
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
