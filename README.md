# 💳 Sistema Bancário em TypeScript

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/OOP-Object%20Oriented-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/CLI-Terminal-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" />
</p>

---

## 📖 Sobre o Projeto

O **Sistema Bancário em TypeScript** é uma aplicação de terminal desenvolvida com foco em **Programação Orientada a Objetos (POO)** e simulação de operações bancárias reais.

O sistema permite o gerenciamento completo de contas bancárias diretamente pelo terminal, incluindo:

- Cadastro de contas
- Listagem de clientes
- Saques
- Depósitos
- Transferências
- Atualização e remoção de contas

Além de demonstrar conceitos sólidos de arquitetura em TypeScript, o projeto resolve o problema de gerenciamento de operações bancárias de forma simples, modular e escalável.

---

## ✨ Funcionalidades

✅ Criar contas correntes e poupança  
✅ Listar todas as contas cadastradas  
✅ Buscar conta por número  
✅ Atualizar dados de uma conta  
✅ Excluir contas do sistema  
✅ Realizar depósitos  
✅ Realizar saques com validação de saldo  
✅ Realizar transferências entre contas  
✅ Controle de limite em contas correntes  
✅ Exibição formatada dos dados da conta no terminal  

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| TypeScript | Linguagem principal |
| Node.js | Ambiente de execução |
| readline-sync | Entrada de dados via terminal |
| Programação Orientada a Objetos | Estrutura da aplicação |
| Interfaces | Contrato de implementação |
| Herança e Polimorfismo | Reutilização e especialização |

---

## 🧠 Conceitos Aplicados

- Encapsulamento
- Abstração
- Herança
- Polimorfismo
- Interfaces
- CRUD
- Estrutura MVC simplificada
- Manipulação de Arrays
- Validação de regras de negócio

---

## 📂 Estrutura do Projeto

```bash
src/
├── controller/
│   └── ContaController.ts
│
├── model/
│   ├── Conta.ts
│   ├── ContaCorrente.ts
│   └── ContaPoupanca.ts
│
├── repository/
│   └── ContaRepository.ts
│
├── util/
│   └── Colors.ts
│
├── Menu.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitignore
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- TypeScript

---

## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

---

### 2️⃣ Acesse a pasta do projeto

```bash
cd conta_bancaria
```

---

### 3️⃣ Instale as dependências

```bash
npm install
```

---

### 4️⃣ Execute o projeto

```bash
npx ts-node src/Menu.ts
```

---

## 💻 Demonstração do Menu

```bash
*********************************************************
                  Banco Latino Americano
*********************************************************

1 - Criar conta
2 - Listar todas as contas
3 - Buscar conta por numero
4 - Atualizar dados da conta
5 - Apagar conta
6 - Sacar
7 - Depositar
8 - Transferir
0 - Sair
```

---

## 📌 Exemplos de Uso

### ➕ Criando uma conta

#### Entrada

```bash
Digite o tipo da conta (1-Corrente / 2-Poupanca): 1
Digite o numero da agencia: 123
Digite o nome do titular: Yasmin
Digite o saldo da conta: 1500
Digite o limite de credito: 500
```

#### Saída

```bash
Conta numero 1 cadastrada com sucesso!
```

---

### 💸 Realizando saque

#### Entrada

```bash
Digite o numero da conta: 1
Digite o valor do saque: 300
```

#### Saída

```bash
Saque de R$300.00 realizado com sucesso na conta 1.
```

---

### 🔄 Transferência entre contas

#### Entrada

```bash
Conta origem: 1
Conta destino: 2
Valor: 200
```

#### Saída

```bash
Transferência de R$200.00 realizada da conta 1 para a conta 2.
```

---

## 🛡️ Resiliência e Tratamento de Erros

O sistema implementa diversas validações para evitar inconsistências durante as operações.

### ✔️ Conta inexistente

Ao tentar acessar uma conta inválida:

```bash
Conta número 99 não encontrada.
```

---

### ✔️ Saldo insuficiente

O método `sacar()` impede movimentações acima do saldo disponível:

```bash
Saldo insuficiente!
```

---

### ✔️ Transferência segura

A transferência somente ocorre se:

- Conta de origem existir
- Conta de destino existir
- Houver saldo suficiente

---

### ✔️ Validação por tipo de conta

O sistema diferencia:

- Conta Corrente
- Conta Poupança

Cada uma possui comportamentos específicos através de herança e sobrescrita de métodos.

---

## 🧪 Testes e Validação

Durante o desenvolvimento foram realizados testes manuais cobrindo:

| Cenário | Resultado Esperado |
|---|---|
| Cadastro de conta | Conta criada corretamente |
| Saque válido | Valor debitado |
| Saque sem saldo | Operação bloqueada |
| Transferência válida | Valores movimentados |
| Conta inexistente | Mensagem de erro |
| Exclusão de conta | Conta removida |
| Atualização de conta | Dados alterados |

---

## 📚 Aprendizados

Este projeto permitiu aprofundar conhecimentos em:

- Estruturação de aplicações TypeScript
- Programação Orientada a Objetos na prática
- Organização em camadas
- Criação de interfaces
- Manipulação de coleções em memória
- Boas práticas de separação de responsabilidades
- Desenvolvimento de aplicações CLI

Além disso, o projeto ajudou no entendimento de como sistemas bancários tratam regras de negócio e validações internas.

---

## 🔮 Melhorias Futuras

- Persistência de dados com banco de dados
- Interface gráfica
- Testes automatizados
- API REST
- Histórico de transações
- Sistema de autenticação
- Criptografia de dados

---

## 👨‍💻 Autor

Desenvolvido por **Yasmin Guidella** 🚀
