import readlinesync = require("readline-sync");
import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { ContaController } from "./controller/ContaController";

export function main() {

    const contas = new ContaController();

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 126, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2); // ✅ Fechado corretamente
    
    let opcao: number;
    let numero: number;
    let numeroDestino: number;
    let valor: number;

    while (true) {

        console.log("*********************************************************");
        console.log("                                                         ");
        console.log("                  Banco Latino Americano                 ");
        console.log("                                                         ");
        console.log("*********************************************************");
        console.log("                                                         ");
        console.log("               1 - Criar conta                           ");
        console.log("               2 - Listar todas as contas                ");
        console.log("               3 - Buscar conta por numero               ");
        console.log("               4 - Atualizar dados da conta              ");
        console.log("               5 - Apagar conta                          ");
        console.log("               6 - Sacar                                 ");
        console.log("               7 - Depositar                             ");
        console.log("               8 - Transferir                            ");
        console.log("               0 - Sair                                  ");
        console.log("                                                         ");
        console.log("*********************************************************");
        console.log("                                                         ");

        opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

        switch (opcao) {
            case 1:
            console.log("\nCriar Conta\n");

            let tipo = readlinesync.questionInt("Digite o tipo da conta (1-Corrente / 2-Poupanca): ");
            let agencia = readlinesync.questionInt("Digite o numero da agencia: ");
            let titular = readlinesync.question("Digite o nome do titular: ");
            let saldo = readlinesync.questionFloat("Digite o saldo da conta: ");

            if (tipo === 1) {
            let limite = readlinesync.questionFloat("Digite o limite de credito: ");

            contas.cadastrar(
            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
            );

            } else if (tipo === 2) {
            let aniversario = readlinesync.questionInt("Digite o dia do aniversario da conta: ");
            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
            );

            } else {
            console.log("Tipo de conta invalido!");
            }
            break;


            case 2:
                console.log("\nListar todas as contas\n");
                contas.listarTodas();
                break;

            case 3:
                console.log("\nBuscar conta por numero\n");
                numero = readlinesync.questionInt("Digite o numero da conta: ");
                contas.procurarPorNumero(numero);
                break;

           case 4:
                console.log("\nAtualizar dados da conta\n");
                numero = readlinesync.questionInt("Digite o numero da conta: ");
                let conta = contas['buscarConta'](numero);

                if (conta != null){
                    agencia = readlinesync.questionInt("Digite o numero da agencia: ");
                    titular = readlinesync.question("Digite o nome do titular: ");
                    saldo = readlinesync.questionFloat("Digite o saldo da conta: ");

                    if (conta.tipo === 1){
                        let limite = readlinesync.questionFloat("Digite o limite de credito: ");
                        contas.atualizar(new ContaCorrente(numero, agencia, conta.tipo, titular, saldo, limite));
                    } else if (conta.tipo === 2){
                        let aniversario = readlinesync.questionInt("Digite o dia do aniversario da conta: ");
                        contas.atualizar(new ContaPoupanca(numero, agencia, conta.tipo, titular, saldo, aniversario));
                    }
                }
            break;
            
            case 5:
                console.log("\nApagar conta\n");
                numero = readlinesync.questionInt("Digite o numero da conta: ");
                contas.deletar(numero);
                break;
            
            case 6:
                console.log("\nSacar\n");
                numero = readlinesync.questionInt("Digite o numero da conta: ");
                valor = readlinesync.questionFloat("Digite o valor do saque: ");
                contas.sacar(numero, valor);
            break;

            case 7:
                console.log("\nDepositar\n");
                numero = readlinesync.questionInt("Digite o numero da conta: ");
                valor = readlinesync.questionFloat("Digite o valor do deposito: ");
                contas.depositar(numero, valor);

            break;

            case 8:
                console.log("\nTransferir\n");
                let numeroOrigem = readlinesync.questionInt("Digite o numero da conta de origem: ");
                numeroDestino = readlinesync.questionInt("Digite o numero da conta de destino: ");
                valor = readlinesync.questionFloat("Digite o valor da transferencia: ");
                contas.transferir(numeroOrigem, numeroDestino, valor);
            break;

            case 0:
                console.log("\nSair\n");
                return;
            default:
                console.log("\nOpcao Invalida!\n");
        }

    }
}

main();