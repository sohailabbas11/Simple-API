const express = require('express')
const app = express()

app.use(express.json())

const port = 3590

const movies = [
    {
        id: 1,
        type: "action",
        name: "need for speed"
        
    },
    {
        id:2,
        type: "horrer",
        name: "balckman"
        
    }
]

app.get('/vidly', (req, res) => {
    res.send(movies)
} )

/* app.get('/vidly/:id', (req, res) => {
    const movie = movies.find(m => m.id == (req.params.id))
    res.send(movies)
}) */

app.post('/vidly', (req, res) => {
    const movie = req.body
    movies.push(movie)
    res.send(movie)
})

app.put('/vidly/:id', (req, res) => {
    const movie = movies.find(m => m.id == (req.params.id))
    const movieIndex = movies.findIndex(m => m.id == (req.params.id))
    movies.splice(movieIndex, 1, {...movie, ...req.body})
    res.send(movies)
})

app.delete('/vidly/:id', (req,res) => {
    const index = movies.indexOf(movies)
    movies.splice(index, 1)
    res.send(movies)
})

app.listen(port, () => console.log(`server started on port ${port}`))