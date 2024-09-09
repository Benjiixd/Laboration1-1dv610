export class Controller {
    async post(req, res) {
        try {
            const {name} = req.body
            console.log('Hello world and hello ' + name);
            res.send('Hello world and hello ' + name);
        } catch (err) {
            console.error(err);
        }
    }
}