const fs = require('fs')
const {join} = require('path')

const filePath = join(__dirname, 'events.json')

const getEvents = () =>{
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

    try{
        return JSON.parse(data)
    }catch (error){
        return []
    }
}

const saveEvent = (events) => fs.writeFileSync(filePath, JSON.stringify(events, null, '\t'))

const eventRoute = (app) => {
    app.route('/events/:id?')
        .get((req, res) => {
            const events = getEvents()

            res.send({events})
        })
        .post((req, res) => {
            const events = getEvents()

            events.push(req.body)
            saveEvent(events)

            res.status(201).send('Created')
        })
        .put((req, res) =>{
            const events = getEvents()

            saveEvent(events.map(event => {
                if(event.id === req.params.id){
                    return{
                        ...event,
                        ...req.body
                    }
                }
                return event
            }))
            res.status(200).send('Updated')
        })
        .delete((req, res) =>{
            const events = getEvents()

            saveEvent(events.filter(event => event.id !== req.params.id))

            res.status(200).send('Deleted')
        })
}

module.exports = eventRoute
