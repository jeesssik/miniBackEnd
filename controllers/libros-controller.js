import {Router} from 'express';
import LibrosService from '../services/libros-service.js';

const router = Router();
const svc = new LibrosService();

router.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAll();
    if ( returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }else{
        respuesta = res.status(500).send('Error interno');
    }
    return respuesta;

});

router.get('/libros/:id', async (req, res) => {
    console.log('entre al router')
    let respuesta;
    const returnArray = await svc.getById(req.params.id);
    if ( returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }else{
        respuesta = res.status(500).send('Error interno');
    }
    return respuesta;

});







export default router;