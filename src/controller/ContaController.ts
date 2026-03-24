import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Conta[] = [];
    private numero: number = 0;

    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(`Conta numero ${conta.numero} cadastrada com sucesso!`);
    }

    atualizar(conta: Conta): void {

        const buscarConta = this.buscarConta(conta.numero);

        if (buscarConta != null){

            const index = this.listaContas.indexOf(buscarConta);
            this.listaContas[index] = conta;
            console.log(`Conta numero ${conta.numero} foi atualizada com sucesso!`);

        } else{
            console.log (`Conta numero ${conta.numero} não encontrada!`);
        }
    }

    deletar(numero: number): void {

        const conta = this.buscarConta(numero);

        if (conta != null) {

        const index = this.listaContas.indexOf(conta);
        this.listaContas.splice(index, 1);

        console.log(`Conta numero ${numero} foi apagada com sucesso!`);

        } else {
        console.log(`Conta numero ${numero} não encontrada!`);
        }

    }

    depositar(numero: number, valor: number): void {
        const conta = this.buscarConta(numero);
        if (conta) {
            conta.depositar(valor);
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso na conta ${numero}.`);
        } else {
            console.log(`Conta número ${numero} não encontrada.`);
        }
    }

    procurarPorNumero(numero: number): void {
        const conta = this.buscarConta(numero);
        if (conta) {
            conta.visualizar();
        } else {
            console.log(`Conta número ${numero} não encontrada.`);
        }
    }

    sacar(numero: number, valor: number): void {
        const conta = this.buscarConta(numero);
        if (conta) {
            if (conta.sacar(valor)) {
                console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso na conta ${numero}.`);
            }
        } else {
            console.log(`Conta numero ${numero} não encontrada.`);
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarConta(numeroOrigem);
        const contaDestino = this.buscarConta(numeroDestino);

        if (!contaOrigem) {
            console.log(`Conta de origem número ${numeroOrigem} não encontrada.`);
            return;
        }

        if (!contaDestino) {
            console.log(`Conta de destino número ${numeroDestino} não encontrada.`);
            return;
        }

        if (contaOrigem.sacar(valor)) {
            contaDestino.depositar(valor);
            console.log(`Transferência de R$${valor.toFixed(2)} realizada da conta ${numeroOrigem} para a conta ${numeroDestino}.`);
        }
    }

    gerarNumero(): number {
        return ++this.numero;
    }

    private buscarConta(numero: number): Conta | null {

        for (let conta of this.listaContas){
            if(conta.numero === numero) {
                return conta
            }
        }

        return null

    }
}