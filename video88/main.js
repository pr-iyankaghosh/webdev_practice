const express = require('express')
const app = express()
const port = 5500

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World! hey hi hello man i am good')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})
app.get('/blog/:slug', (req, res) => {

    //logic to get data from database
  res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-js', (req, res) => {

//     //logic to get data from database
//   res.send('Hello intro js!')
// })


// app.get('/blog/intro-python', (req, res) => {

//     //logic to get data from database
//   res.send('Hello intro python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})