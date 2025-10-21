import ModelUser from '../models/users.js'

class ServiceUser {


    FindAll() {
        return ModelUser.FindAll()
    }

    FindOne(index) {
        return ModelUser.FindOne(index)
    }

    Create(nome) {
        ModelUser.Create(nome)
    }

    Update(index, nome) {
        ModelUser.Update(index, nome)
    }

    Delete(index) {
        ModelUser.Deletar(index)
    }

}

export default new ServiceUser()