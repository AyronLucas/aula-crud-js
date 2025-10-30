import ServiceUser from '../service/users.js'

class ControllerUser {
    
    FindAll(req, res) {
        try {
            const nomes = ServiceUser.FindAll()
            res.status(200).send({ nomes})
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async FindOne(req, res) {
        try {
            const id = req.params.id
            const user = await ServiceUser.FindOne(id)
            res.status(200).send({user})
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Create(req, res) {
        try {
            const {nome, email, senha, ativo} = req.body
            await ServiceUser.Create(nome, email, senha, ativo)
            res.status(201).send(nome, email, senha, ativo)
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Update(req, res) {
        try {
            const id = req.params.id
            const user = req.body.
            ServiceUser.Update(id, user)
            res.status(200).send(resultado)
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceUser.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}
 
export default new ControllerUser()
