// 1. Importação e contagem dos produtos
import { produtos } from './produtos.js';

console.log('Total de produtos:', produtos.length);

//ex1 2. Variáveis: const e let
const loja = 'TechAngola';
let carrinhoTotal = 0;
carrinhoTotal = carrinhoTotal + 15000;
console.log(loja, carrinhoTotal);
console.log(typeof 'olá', typeof 15000, typeof true, typeof []);
console.log(5 === '5');

//R: Quando tentamos alterar loja = 'TechAngola' para loja = 'Outra' da o seguinte erro: TypeError: Assignment to constant variable, porque a nossa variavel e uma constante e o seu valor nao pode ser alterado ao longo do codigo.

//R:e bom que o Node nos avise afim de avitar bugs pois ele nos informa o local exato do erro.


//ex2 Função calcular iva 
console.log('Calculando iva: ')
function calcularIVA(preco, taxa = 0.14) {
    return Math.round(preco * taxa) ;
}

console.log('Resultado do Calculo do Iva ')
console.log(calcularIVA(10000));
console.log(calcularIVA(10000, 0.07));

//ex3 funcao formatar preco

function formatarPreco(valor) {
    return `${(valor.toLocaleString('pt-PT'))} kz `;
}


console.log('Resultado dos Precos Formatados:')
console.log(formatarPreco(15000)) ;
console.log(formatarPreco(180000));


//ex4 Usando Arrow Function 
const calculariva = (preco, taxa=0.14) => preco*taxa;
const formatarpreco = (valor) => `${valor.toLocaleString('pt-PT')} Kz`
const saudacao = nome => `Olá ${nome}!`;
console.log(saudacao('Ana')); 

//ex5 map precorrer o array 
const descricoes = produtos.map(p => `${p.nome} - ${formatarPreco(p.preco)}`);
console.log('descricao dos produtos:')
console.log(descricoes);

//ex6 filtro dos produtos baratos 
const baratosEmStock = produtos.filter(p => p.stock > 0 && p.preco < 20000)
console.log('produtos em Stok e com preco menor que 20000:')
console.log(baratosEmStock.map(p =>p.nome));

// ex7 reduce, 	Percorre o array e acumula valores, saber quanto dinheiro representa todo o stock disponível na loja
const valorStock = produtos.reduce((acc, p) => acc + p.preco * p.stock, 0);
console.log('Valor do stock: ' , formatarPreco(valorStock));


const mediaAvaliacoes = produtos.reduce((acc, p) => acc + p.avaliacao, 0) / produtos.length;
console.log('Media: ', mediaAvaliacoes.toFixed(2));

//ex8 filter e map
const nomeAcessorios = produtos
    .filter(p => p.categoria == 'acessorios')
    .map(p => p.nome);
console.log(nomeAcessorios);

//ex9 find procurar por ex: id filter/	Devolve todos os elementos que cumprem a condição. find/	Devolve apenas o primeiro elemento que cumpre a condição.

const encontrado = produtos.find(p => p.id === 4);
console.log(encontrado ?? 'produto não encontrado');

const inexistente = produtos.find(p => p.id === 99);
console.log(inexistente ?? 'Produto não encontrado');


//ex10 sort() vamos usar para ordenar os produtod pelo preco do mais caro ao mais barato

const ordenados =[...produtos].sort((a,b) => b.preco - a.preco);
console.log(ordenados.map(p => p.nome));
console.log(produtos[0].nome); // o original mantem-se

//ex11 objectos

const produto ={id: 7, nome: 'rato sem Fios ', preco: 8000, stock: 10};
console.log(produto.nome, produto['preco']);
produto.stock = 9;
produto.categoria = 'acessorios' ;
delete produto.stock;
console.log(produto);
console.log(Object.keys(produto));
console.log(Object.entries(produto));

const carrinho = {
    itens: [],

    adicionar(p) {
        this.itens.push(p);
    },

    total() {
        return this.itens.reduce((acc, p) => acc + p.preco, 0);
    },

    remover(id) {
        this.itens = this.itens.filter(p => p.id !== id);
    }
};

carrinho.adicionar(produtos[0]);
carrinho.adicionar(produtos[2]);

console.log(carrinho.itens.length);

carrinho.adicionar(produtos[3]);
console.log(formatarPreco(carrinho.total())); 
carrinho.remover(3);
console.log(carrinho.itens.map(p => p.nome)); 
console.log(formatarPreco(carrinho.total())); 