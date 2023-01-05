

// //let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         {nome:'Final Fantasy'},
//         {nome:'Gta V'},
//         {nome:'Arq'}

//     ]
// }//

// //console.log(videoGame) //

let clientes = [
    {nome:'Vitória',
    ultimoPedido: {
        produto:'Playstation',
        valor: 5000,
        jogos:[
            {nome:'Arq'},
            {nome:'Fifa'}
        ]
    }
   },
   { nome:'Luis',
    ultimoPedido: {
        produto:'Microfone',
        valor: 3000
    }
},
{ nome:'Antoni',
    ultimoPedido: {
        produto:'Arranhador',
        valor: 200
    }
},
{ nome:'Roni',
    ultimoPedido: {
        produto:'BMO',
        valor: 900
    }
}
]

console.log(clientes)

clientes.push({nome:'Bmo',
               ultimoPedido:{
               produto:'Musicas',
               valor:'400'
}})

console.log(clientes)

