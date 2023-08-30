import Express from 'express'

const port = 4000

const server = Express()

server.get('/', (req, res) => {
    res.send('Hello world')
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})