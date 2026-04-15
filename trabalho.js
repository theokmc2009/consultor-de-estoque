const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tarefas = [];

function boasVindas() {
    console.log("====================");
    console.log(" LISTA DE TAREFAS ");
    console.log("====================");
}

function menu() {
    console.log("====================");
    console.log("1. Ver tarefas");
    console.log("2. Adicionar tarefa");
    console.log("3. Concluir tarefa");
    console.log("4. Remover tarefa");
    console.log("0. Sair");
    console.log("====================");

    interagir();
}

function interagir() {
    rl.question("Escolha uma opção: ", function (resposta) {
        console.clear();

        switch (parseInt(resposta)) {
            case 1:
                verTarefas();
                break;
            case 2:
                adicionarTarefa();
                break;
            case 3:
                concluirTarefa();
                break;
            case 4:
                removerTarefa();
                break;
            case 0:
                rl.close();
                break;
            default:
                menu();
                break;
        }
    });
}

function verTarefas() {
    console.log("| TAREFAS");

    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa ainda.");
    } else {
        console.table(tarefas);
    }

    menu();
}

function adicionarTarefa(nome) {
    console.log("| ADICIONAR TAREFA");

    if (nome === undefined) {
        rl.question("Digite a tarefa: ", function (resposta) {
            adicionarTarefa(resposta);
        });
        return;
    }

    tarefas.unshift({
        nome: nome,
        concluida: false
    });

    console.log("Tarefa adicionada!");
    menu();
}

function concluirTarefa(indice) {
    console.log("| CONCLUIR TAREFA");

    if (indice === undefined) {
        rl.question("Digite o número da tarefa: ", function (resposta) {
            concluirTarefa(parseInt(resposta));
        });
        return;
    }

    if (!tarefas[indice]) {
        console.log("Índice inválido.");
        menu();
        return;
    }

    tarefas[indice].concluida = true;
    console.log("Tarefa concluída!");

    menu();
}

function removerTarefa(indice) {
    console.log("| REMOVER TAREFA");

    if (indice === undefined) {
        rl.question("Digite o número da tarefa: ", function (resposta) {
            removerTarefa(parseInt(resposta));
        });
        return;
    }

    if (!tarefas[indice]) {
        console.log("Índice inválido.");
        menu();
        return;
    }

    tarefas.splice(indice, 1);
    console.log("Tarefa removida!");

    menu();
}

function principal() {
    console.clear();
    boasVindas();
    menu();
}

principal();
