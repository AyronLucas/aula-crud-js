const nomes = new Array("Ayronman", "Ceci", "Neymar")

class ModelUser{

    FindAll(){
        return nomes
    }

    FindOne(index){
        return nomes[index]
    }

    Create(nome){
        nomes.push(nome)
    }

    Update(index, nome){
        nomes[index] = nome
    }

    Deletar(index){
        return nomes.splice(index, 1)
    }
}

export default new ModelUser()