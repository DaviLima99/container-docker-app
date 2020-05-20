const connection = require('../database/connection');

module.exports = {

    /**
     * Lista todos os registros
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async index(req, res) {
        try {
            const activities = await connection('activities').select('*');
            
            return res.status(200).send(activities);
        } catch (error) {
            console.log(error);
            return response.status(400).json({error: 'Informações não encontradas!'});
        }
    },

    /**
     * Cria um novo registro
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {
        const { description } = request.body;

        try {
            const activity = await connection('activities').insert({
                description
            });
    
            return res.status(200).send(activity);
        } catch (error) {
            return response.status(400).json({error: 'Erro ao cadastrar atividade!'});
        }
    },

    /**
     * Busca uma determinada atividade
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async show(req, res) {
        const { id } = req.params;

        try {
            const activity = await connection('activities')
                .where('id', id)
                .select('*')
                .first();

            return res.status(200).send(activity);
        } catch (error) {
            return response.status(400).json({error: 'Informação não encontrada'});
        }
    }



}