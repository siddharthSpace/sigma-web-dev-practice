const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
//app.get or app.post or app.put or app.detete(path , handler)





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})


app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.get('/blog/:slug', (req, res) => {
    //logic to fetch {slug} from the db
  res.send('Hello ${req.params.slug}')
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//   res.send('Hello into to js !')
// })


// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to js from the db
//   res.send('Hello into to python !')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


