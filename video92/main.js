const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {

    let siteName="adidas"
    let searchText="search now"
    let arr=[1,34,56]
  res.render("index",{siteName:siteName,searchText:searchText,arr})
})



app.get('/blog/:slug', (req, res) => {

    let blogTile="adidas"
    let blogContent="search now"
  res.render("blog",{blogTile:blogTile,blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
