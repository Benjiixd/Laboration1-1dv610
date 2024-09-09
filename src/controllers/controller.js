export class Controller {
    async post(req, res) {
        try {

            
            
            console.log(`Received data: ${JSON.stringify(req.body)}`)
            const {name} = req.body
            console.log('Hello world and hello ' + name);
            res.send('Hello world and hello ' + name);
        } catch (err) {
            console.error(err);
        }
    }
}