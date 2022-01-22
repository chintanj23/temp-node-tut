const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcom to our home page')
    } 
    if(req.url==='/about'){
        res.end('here is about page')
    }

    res.end(`
    <h1>Opps!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)