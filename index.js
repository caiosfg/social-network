const express =  require('express')
const userRoute = require('./routes/userRoute')
const eventRoute = require('./routes/eventRoute')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))

app.listen(port, () => console.log('Api executing in port 3000'))

app.get('/', (req, res) => res.send('Listing all social events'))

//CRUD FOR USERS
userRoute(app)
//CRUD FOR EVENTS
eventRoute(app)