```markdown
# Rotas da API

Este diretório contém as definições das rotas para gerenciar **clientes**, **compras** e **produtos**. As rotas utilizam o framework **Express** e se conectam aos respectivos controladores para executar as operações desejadas.

## 📁 Estrutura das Rotas

### Cliente (`cliente.js`)
Rotas relacionadas ao gerenciamento de clientes.

| Método HTTP | Rota        | Descrição                                    |
|-------------|-------------|----------------------------------------------|
| `GET`       | `/`         | Retorna uma lista de todos os clientes.      |
| `POST`      | `/`         | Cria um novo cliente.                        |
| `PUT`       | `/:id`      | Atualiza as informações de um cliente pelo ID.|
| `DELETE`    | `/:id`      | Exclui um cliente pelo ID.                   |

### Compra (`compra.js`)
Rotas relacionadas ao gerenciamento de compras.

| Método HTTP | Rota        | Descrição                                    |
|-------------|-------------|----------------------------------------------|
| `GET`       | `/`         | Retorna uma lista de todas as compras.       |
| `POST`      | `/`         | Cria uma nova compra.                        |
| `PUT`       | `/:id`      | Atualiza uma compra específica pelo ID.      |
| `DELETE`    | `/:id`      | Exclui uma compra específica pelo ID.        |

### Produto (`produto.js`)
Rotas relacionadas ao gerenciamento de produtos.

| Método HTTP | Rota        | Descrição                                    |
|-------------|-------------|----------------------------------------------|
| `GET`       | `/`         | Retorna uma lista de todos os produtos.      |
| `POST`      | `/`         | Cria um novo produto.                        |
| `PUT`       | `/:id`      | Atualiza as informações de um produto pelo ID.|
| `DELETE`    | `/:id`      | Exclui um produto pelo ID.                   |

## 🛠️ Como funciona?

1. Cada arquivo de rota utiliza o **Express Router** para organizar as rotas de forma modular.
2. As rotas chamam os métodos definidos nos **controladores** correspondentes:
   - **Cliente**: `clienteController`
   - **Compra**: `compraController`
   - **Produto**: `produtoController`
3. Os controladores processam as requisições e interagem com o banco de dados para realizar as operações.

## 🚀 Como usar as rotas?

### 1. Configurar as rotas no servidor principal
No arquivo principal do servidor (ex.: `app.js`), importe e use as rotas:
```javascript
const clienteRoutes = require('./routes/cliente');
const compraRoutes = require('./routes/compra');
const produtoRoutes = require('./routes/produto');

app.use('/clientes', clienteRoutes);
app.use('/compras', compraRoutes);
app.use('/produtos', produtoRoutes);
```

### 2. Acessar as rotas
Após configurar o servidor, as rotas estarão disponíveis nos seguintes endpoints:
- **Clientes**: `/clientes`
- **Compras**: `/compras`
- **Produtos**: `/produtos`

Cada endpoint pode ser acessado com os métodos HTTP correspondentes para realizar as operações de CRUD.

## 📝 Observações
- Certifique-se de que o banco de dados esteja corretamente configurado e acessível.
- O middleware de validação e autenticação pode ser adicionado nas rotas para segurança adicional.
```