### Product Management API

A **Product Management API** é um serviço backend construído com **Node.js** e **Express**, projetado para gerenciar produtos, clientes e compras. Ela inclui funcionalidades de CRUD (Create, Read, Update, Delete) e permite integração com sistemas front-end para gerenciamento eficiente de dados.

---

## **Funcionalidades**

1. **Clientes**:
   - Criar, listar, atualizar e deletar clientes.
2. **Produtos**:
   - Criar, listar, atualizar e deletar produtos.
3. **Compras**:
   - Registrar compras feitas por clientes.
   - Listar compras realizadas, incluindo os detalhes dos clientes e produtos associados.

---

## **Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs RESTful.
- **Sequelize**: ORM para interação com o banco de dados.
- **SQLite**: Banco de dados utilizado para persistência de dados.
- **body-parser**: Middleware para lidar com requisições JSON.
- **cors**: Middleware para permitir acesso de diferentes origens (Cross-Origin Resource Sharing).

---

## **Configuração do Projeto**

### **Pré-requisitos**

1. Node.js instalado (versão LTS recomendada).
2. Gerenciador de pacotes `npm` ou `yarn`.

### **Passos para Configuração**

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/product-management-api.git
   cd product-management-api
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Inicie o Servidor**:
   ```bash
   npm start
   ```
   O servidor estará disponível em `http://localhost:3000`.

4. **Banco de Dados**:
   - Este projeto utiliza **SQLite** como banco de dados padrão.
   - Não é necessário configurar manualmente, pois o arquivo `database.sqlite` será criado automaticamente na raiz do projeto.
   - O Sequelize sincronizará os modelos com o banco de dados ao iniciar o servidor.

---

## **Estrutura do Projeto**

```plaintext
project-management-api/
│
├── config/
│   └── database.js         # Configuração do Sequelize e SQLite
│
├── models/
│   ├── client.js           # Modelo para clientes
│   ├── product.js          # Modelo para produtos
│   └── clientBuyProduct.js # Modelo para compras
│
├── routes/
│   ├── client.js           # Rotas relacionadas a clientes
│   ├── product.js          # Rotas relacionadas a produtos
│   └── purchase.js         # Rotas relacionadas a compras
│
├── server.js               # Arquivo principal do servidor
└── database.sqlite         # Arquivo gerado pelo SQLite (criado automaticamente)
```

---

## **Endpoints Disponíveis**

### **Clientes**

- **POST /clients**: Criar um novo cliente.
  - Corpo da requisição:
    ```json
    {
      "name": "João",
      "email": "joao@example.com"
    }
    ```

- **GET /clients**: Listar todos os clientes cadastrados.

- **PUT /clients/:id**: Atualizar informações de um cliente.
  - Corpo da requisição:
    ```json
    {
      "name": "João Atualizado"
    }
    ```

- **DELETE /clients/:id**: Deletar um cliente pelo ID.

---

### **Produtos**

- **POST /products**: Criar um novo produto.
  - Corpo da requisição:
    ```json
    {
      "name": "Notebook",
      "price": 3500
    }
    ```

- **GET /products**: Listar todos os produtos cadastrados.

- **PUT /products/:id**: Atualizar informações de um produto.
  - Corpo da requisição:
    ```json
    {
      "name": "Notebook Gamer",
      "price": 4500
    }
    ```

- **DELETE /products/:id**: Deletar um produto pelo ID.

---

### **Compras**

- **POST /purchases**: Registrar uma nova compra.
  - Corpo da requisição:
    ```json
    {
      "clientId": 1,
      "productId": 1,
      "quantity": 2
    }
    ```

- **GET /purchases**: Listar todas as compras, incluindo detalhes de clientes e produtos.

---

## **Exemplo de Uso**

### 1. Criar um cliente:
```bash
curl -X POST http://localhost:3000/clients -H "Content-Type: application/json" -d '{"name":"João","email":"joao@example.com"}'
```

### 2. Listar todos os clientes:
```bash
curl http://localhost:3000/clients
```

### 3. Registrar uma compra:
```bash
curl -X POST http://localhost:3000/purchases -H "Content-Type: application/json" -d '{"clientId":1,"productId":1,"quantity":3}'
```

---

## **Contribuição**

Se você quiser contribuir para este projeto:
1. Faça um fork do repositório.
2. Crie um branch para sua funcionalidade:
   ```bash
   git checkout -b minha-funcionalidade
   ```
3. Envie um pull request!

---

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## **Autor**

- **Gabriel Silva Oliveira**
```