/*import config from './dbconfig.js';




import pkg from 'pg';
const { Client } = pkg;

const client = new Client(config);
await client.connect();

let sql = 'SELECT * FROM "Libros"';
let result = await client.query(sql);
await client.end();

console.log(result.rows);*/



import express from 'express';
import cors from 'cors';
import LibrosRouter from './controllers/libros-controller.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('', LibrosRouter);
app.use('/libros/:id', LibrosRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




// en postman

//  http://localhost:3000

// buscar por id

http://localhost:3000/libros/1