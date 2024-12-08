# Controllers

A pasta `controller` contém os controladores responsáveis por gerenciar as operações CRUD (Criar, Ler, Atualizar e Excluir) para **clientes**, **compras** e **produtos**. Esses controladores também realizam validações específicas antes de encaminhar os dados para os serviços correspondentes.

---

## Estrutura dos Arquivos

### Cliente Controller (`cliente.js`)
Responsável por operações relacionadas aos clientes. 

**Funcionalidades**:
- **Criar Cliente**: Valida se o email é único e se o cliente tem pelo menos 18 anos antes de criar um novo registro.
- **Atualizar Cliente**: Garante que o email permanece único e valida a idade do cliente antes de atualizar.
- **Excluir Cliente**: Remove um cliente pelo ID.
- **Obter Clientes**: Retorna uma lista de todos os clientes registrados.

**Validações**:
1. **Email único**: Verifica no banco de dados se o email já está registrado.
2. **Maioridade**: Calcula a idade com base na data de nascimento e só permite maiores de 18 anos.

---

### Compra Controller (`compra.js`)
Responsável por operações relacionadas às compras realizadas pelos clientes.

**Funcionalidades**:
- **Criar Compra**: Registra uma nova compra.
- **Atualizar Compra**: Permite a edição dos dados de uma compra existente.
- **Excluir Compra**: Remove uma compra pelo ID.
- **Obter Compras**: Retorna uma lista de todas as compras realizadas.

---

### Produto Controller (`produto.js`)
Responsável por operações relacionadas aos produtos disponíveis.

**Funcionalidades**:
- **Criar Produto**: Registra um novo produto.
- **Atualizar Produto**: Permite editar os detalhes de um produto existente.
- **Excluir Produto**: Remove um produto pelo ID.
- **Obter Produtos**: Retorna uma lista de todos os produtos cadastrados.

---

## Dependências Utilizadas

- **`moment`**: Para manipulação e validação de datas.
- **`pool`**: Gerenciador de conexões com o banco de dados.
- **`clienteService`, `compraService`, `produtoService`**: Serviços que implementam as regras de negócios.

---

## Como Funciona

1. **Requisições Entrantes**: Os controladores recebem os dados das requisições HTTP (via `req` e `res`).
2. **Validações**: Antes de delegar para os serviços, realizam validações específicas, como:
   - Garantir unicidade de email.
   - Verificar maioridade de clientes.
3. **Interação com Serviços**: Encaminham os dados validados para os serviços, que acessam o banco de dados.
4. **Respostas**: Retornam os resultados ou mensagens de erro para o cliente da API.

---

## Padrões de Código

- **HTTP Status Codes**:
  - `201`: Sucesso ao criar (Created).
  - `200`: Sucesso ao atualizar, excluir ou buscar (OK).
  - `400`: Erros de validação (Bad Request).
  - `404`: Recurso não encontrado (Not Found).
  - `500`: Erros internos do servidor (Internal Server Error).

- **Estrutura Modular**:
  Cada entidade (Cliente, Compra, Produto) tem seu próprio controlador, facilitando a manutenção e expansão do projeto.

---

## Como Utilizar

### Exemplo de Rota
```javascript
const express = require('express');
const clienteController = require('./controller/cliente');
const router = express.Router();

router.post('/clientes', clienteController.createCliente);
router.get('/clientes', clienteController.getClientes);

---

## Próximos Passos

1. **Adicionar mais validações** (se necessário).
2. **Testes unitários e de integração** para garantir o funcionamento dos controladores.
3. **Documentação detalhada** da API com ferramentas como Swagger ou Postman.

---
```