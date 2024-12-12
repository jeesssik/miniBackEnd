import DBConfig from '../dbconfig.js';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class LibroRepository {
    getAll = async () => {
        let returnArray = null;
        const client= new Client(DBConfig);
        try{
            await client.connect();
            let sql = 'SELECT * FROM "Libros"';
            let result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (e) {
            console.log(e);
        }
        return returnArray;

    }

    // obtener libro por id
    getById = async (id) => {
        console.log('en el repository, el id que busco es: ' + id);
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            let sql = 'SELECT * FROM public."Libros" WHERE "id "= $1';
            let result = await client.query(sql, [id]);
            await client.end();
            returnArray = result.rows;
        } catch (e) {
            console.log(e);
        }
        return returnArray;
    }

    // si hay mas van acá
}