# Documentação dos Controllers

Este documento fornece uma explicação detalhada sobre os controllers `client.js`, `product.js` e `purchase.js`. Esses controllers são responsáveis por gerenciar as operações relacionadas a Clientes, Produtos e Compras, respectivamente, em um sistema CRUD.

## Estrutura do Projeto

Os controllers interagem com os serviços (camada de lógica) e o banco de dados para:
- Criar recursos
- Atualizar recursos
- Excluir recursos
- Obter recursos

Cada funcionalidade está organizada por entidade.

---

## Arquivo `client.js`

### Dependências
- **`moment`**: Biblioteca usada para cálculos relacionados a datas, como validação de idade.
- **`clientService`**: Camada de lógica de negócios que realiza operações relacionadas a Clientes.
- **`pool`**: Conexão com o banco de dados.

### Funcionalidades

#### Validação de Email Único
```javascript
const emailExists = async (email) => {
    const [rows] = await pool.query('SELECT * FROM clients WHERE email = ?', [email]);
    return rows.length > 0;
};
```
Verifica se o email fornecido já está registrado no banco de dados.

#### Validação de Idade
```javascript
const isAdult = (birthDate) => {
    const idade = moment().diff(moment(birthDate, 'YYYY-MM-DD'), 'years');
    return idade >= 18;
};
```
Verifica se o cliente tem pelo menos 18 anos.

#### Endpoints

- **Criar Cliente**
  - Valida o email e a idade antes de criar um cliente.
  - Retorna erros apropriados em caso de validação falha ou problemas no servidor.

- **Atualizar Cliente**
  - Valida o email único e a idade antes de atualizar o cliente.
  - Verifica se o cliente existe antes de realizar alterações.

- **Excluir Cliente**
  - Remove o cliente do banco de dados com base no ID.
  - Retorna erro 404 se o cliente não for encontrado.

- **Obter Clientes**
  - Retorna a lista de todos os clientes registrados.

---

## Arquivo `product.js`

### Dependências
- **`productService`**: Camada de lógica de negócios para Produtos.

### Funcionalidades

#### Endpoints

- **Criar Produto**
  - Cria um novo produto com base nos dados fornecidos na requisição.
  - Retorna o produto criado ou um erro 500 em caso de falha.

- **Atualizar Produto**
  - Atualiza um produto existente com base no ID.
  - Retorna erro 404 se o produto não for encontrado.

- **Excluir Produto**
  - Exclui um produto com base no ID.
  - Retorna erro 404 se o produto não for encontrado.

- **Obter Produtos**
  - Retorna todos os produtos cadastrados no sistema.

---

## Arquivo `purchase.js`

### Dependências
- **`purchaseService`**: Camada de lógica de negócios para Compras.

### Funcionalidades

#### Endpoints

- **Criar Compra**
  - Registra uma nova compra com os dados fornecidos.
  - Retorna a compra criada ou um erro 500 em caso de falha.

- **Atualizar Compra**
  - Atualiza uma compra existente com base no ID.
  - Retorna erro 404 se a compra não for encontrada.

- **Excluir Compra**
  - Exclui uma compra com base no ID.
  - Retorna erro 404 se a compra não for encontrada.

- **Obter Compras**
  - Retorna todas as compras registradas no sistema.

---

## Boas Práticas Implementadas
1. **Validação de Dados**
   - Verificação de unicidade para emails.
   - Validação de idade mínima.
2. **Tratamento de Erros**
   - Mensagens claras para o cliente em caso de falha.
   - Status HTTP apropriados (`400`, `404`, `500`).
3. **Logs**
   - Adição de logs para depuração e rastreamento das operações.

## Melhorias Sugeridas
- Implementar validação adicional no nível dos serviços.
- Adicionar autenticação e autorização para proteger os endpoints.
- Documentar os serviços usados pelos controllers.

---