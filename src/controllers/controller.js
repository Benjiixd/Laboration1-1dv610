export class Controller {
    async get(req, res) {
        try {
            res.send('GET request to the homepage');
        } catch (err) {
            console.error(err);
        }
    }
}