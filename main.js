const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let estoque = [];

function boasVindas() {
    console.log("====================");
    console.log(" Seja bem vindo!");
    console.log(" ERP NODE ");
    console.log("====================");
}

function menu() {
    console.log("====================");
    console.log("1. Consultar Estoque");
    console.log("2. Adicionar Item");
    console.log("3. Remover Item");
    console.log("0. Sair");
    console.log("====================");

    interagir();
}

function menuVoltar() {
    console.log("====================");
    console.log("9. Voltar");
    console.log("0. Sair");
    console.log("====================");

    interagir();
}

function interagir() {
    rl.question("Escolha uma opção: ", function (resposta) {
        console.clear();

        if (resposta === '0') {
            rl.close();
            return;
        }

        if (resposta === '1') {
            consultarEstoque();
            return;
        }

        if (resposta === '2') {
            adicionarItem();
            return;
        }

        menu();

       
    });
}

function consultarEstoque() {
    console.log("| ESTOQUE");
    console.table(estoque);

    menuVoltar();
}

function adicionarItem(itemNome, itemQuantidade) {
    console.log("| ADICIONAR ITEM");

    if (itemNome === undefined) {
        rl.question("Qual o nome do item?: ", function (nomeDoItem) {
            adicionarItem(nomeDoItem);
        });
        return;
    }

    if (itemQuantidade === undefined) {
        rl.question("Qual é a quantidade?: ", function (quantidadeDoItem) {
            adicionarItem(itemNome, quantidadeDoItem);
        });
        return;
    }

    estoque.push({
        nome: itemNome,
        quantidade: itemQuantidade,
    });

    menu();

}

function principal() {
    console.clear();
    boasVindas();
    menu();
}

principal();