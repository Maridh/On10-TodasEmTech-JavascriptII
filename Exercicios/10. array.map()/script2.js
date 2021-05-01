const winners = [
    {
        nome: 'foda',
        pais: 'Brasil',
    },
    {
        nome: 'mega',
        pais: 'Groelandia',
    },
    {
        nome: 'Gigolo',
        pais: 'Ruanda',
    },
];

// const vencedores = winners.map((equipe) => {
// return equipe.nome;
// });

// console.log(vencedores);

const paises = winners.map(function(local) {
    return local.pais;
    });
    console.log(paises);

//utilidade disso: back end manda objeto com vários dados, dai vc precisa que retorne uma propriedade, percorre todos os elementos e traz os itens relevantes para serem exibidos. Nesse caso executa uma função para manipular array, função atual é o elemento do array que está sendo manipulado no momento.