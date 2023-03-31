function meuEscolpo(){
const resultado = document.querySelector(".resultado")
const form = document.querySelector('.form');


const pessoas = [];

function recebeEventoForm(tela){// tela é so o parametro da função
    tela.preventDefault(); //impede a tela de recarregar

    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const altura = document.querySelector('.altura');
    const peso = document.querySelector('.peso');
    pessoas.push(
        {
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        }
    )
    console.log(pessoas)
    resultado.innerHTML += (`<p>${nome.value} ${sobrenome.value},${peso.value},${altura.value}</p>`)
}

form.addEventListener('submit', recebeEventoForm)
}
meuEscolpo()