import LibroRepository from '../repositories/libro-repository.js';

export default class LibrosService {

    getAll = async () => {
        const repo = new LibroRepository();
        return await repo.getAll();

    }

    getById = async (id) => {
        const repo = new LibroRepository();
        return await repo.getById(id);
    }

}

