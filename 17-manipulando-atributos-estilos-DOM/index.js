function alterarCorDeFundoPrimeiroPost() {

    let posts = document.getElementsByClassName('post');

    console.log(posts)

    let primeiroPost = posts[0]; 

    console.log('primeiroPost', primeiroPost)
    primeiroPost.style.backgroundColor = 'Red';
}

function aumentarFonteSegundoPost() {
    let textoPost = document.getElementsByClassName ('texto-post');
    textoPost[1].classList.add('fonte-grande')

}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if (genero === 'M'){
        radioMasculino.checked = true;
    } else if (genero === 'F'){
        radioFeminino.checked = true;
    }

}
