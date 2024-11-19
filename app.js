// console.log('Hello world')

const express = require ('express')
const app = express()
const port = 3000

const posts = [
    {
        title: "Ciambellone",
        content: "la mia ricetta",
        image: "/images/ciambellone.jpeg", 
        tags: ["dolce","ciambella"],
    },
    {
        title: "Cracker alla barbabietola",
        content: "la mia ricetta",
        image: "images/cracker_barbabietola.jpeg", 
        tags: ["dolce","cracker"],
    },
    {
        title: "Pane fritto dolce",
        content: "la mia ricetta",
        image: "images/pane_fritto_dolce.jpeg", 
        tags: ["dolce","fritto"],
    },
    {
        title: "Pasta alla barbabietola",
        content: "la mia ricetta",
        image: "images/pasta_barbabietola.jpeg", 
        tags: ["salato","pasta"],
    },
    {
        title: "Torta paesana",
        content: "la mia ricetta",
        image: "images/torta_paesana.jpeg", 
        tags: ["dolce","torta"],
    }
]

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json({posts: posts, count: posts.length})
})

app.listen(port, () => {

})