const http = require('http')
const fs = reqiore('fs')
const port = 6969

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('eksde.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('Error: file not found')
        }else{
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function (error){
    if (error){
        console.log('aldaa zaala', error)
    } else {
        console.log('port' + port) 
    }
})