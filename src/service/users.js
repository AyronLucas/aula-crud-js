import User from '../models/users.js'

class ServiceUser {


    FindAll() {
        return User.FindAll()
    }

    async FindOne(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }
        return 
    }

    async Create(nome, email, senha, ativo) {
        if(!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
        }
        
        await User.create({
            nome, email, senha, ativo
        })
    }

    async Update(id, nome, email, senha, ativo) {
        if(!id) {
            throw new Error(`Usuário ${id} não encontrado`)
        }
        const user = await User.findByPk(id)
        
        if(!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }
        user.nome =nome,
        user.email = email,
        user.senha = senha,
        user.ativo = ativo


        await user.save()
    }

    async Delete(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }
        await user.destroy()
    }

}

export default new ServiceUser()