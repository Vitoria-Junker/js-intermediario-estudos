let usuario = {
    nome:'Vitória',
    premiado: function(){
        console.log('o usuário ' + this.nome + ' foi premiado')
    }
}

usuario.premiado()