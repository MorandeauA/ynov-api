import http from 'http'

const server = http.createServer((request, response) => {
    console.log(request)
    response.end()
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))