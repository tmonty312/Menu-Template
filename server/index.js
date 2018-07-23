const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const app = express()

app.use(bodyParser.json())

app.get('/api/pies', controller.getPies)
app.post('/api/pies', controller.addPies)
app.put('/api/pies/:id', controller.updatePies)
app.delete('/api/pies/:id', controller.deletePies)


const port = 4141
app.listen(port, ()=>console.log('I am listening on',port))