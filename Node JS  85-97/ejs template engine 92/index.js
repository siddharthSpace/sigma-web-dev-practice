const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')

//https://github.com/mde/ejs/wiki/Using-EJS-with-Express


app.get('/', (req, res) => {
  
  let sitename = "Siddharth Kesralikar"
  let searchText = "Search Now "
  res.render('index', { sitename: sitename, searchText: searchText })
})

app.get('/blog/:slug', (req, res) => {
  
  let blogTitle = "Adidas"
  let blogContent = "Search Now "
  res.render('blogpost', { blogTitle: blogTitle, blogContent: blogContent })
})  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
