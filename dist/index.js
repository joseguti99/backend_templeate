import express from 'express';
import { routes } from './routes';
const app = express();
const port = 3000;
Object.keys(routes).forEach((path) => {
    app.get(path, (req, res) => {
        const result = routes[path]();
        res.send(result);
    });
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
