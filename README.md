# lojinha-do-if

Este projeto é um sistema completo de **E-commerce**, focado no gerenciamento de **clientes**, **produtos** e **compras**. Ele é dividido em três componentes principais: **Backend**, **Frontend Web** e **Frontend Mobile**. O **Backend** é uma API Restful desenvolvida em **Node.js** com **Express** e **MySQL**. O **Frontend Web** é construído utilizando **Next.js**, enquanto o **Frontend Mobile** é desenvolvido com **React Native**.

---

## **📁 Estrutura do Projeto**

```
/backend
  /controller   -> Contém os controladores das rotas
  /repository   -> Implementa as consultas ao banco de dados
  /route        -> Define as rotas da aplicação
  /services     -> Contém as regras de negócios (agora presente para manipulação de dados)
  /node_modules -> Dependências do projeto (ignorado no Git)
  server.js     -> Arquivo principal para execução do servidor

```

---

## **📦 Tecnologias Utilizadas**

### **Backend**
- **Node.js**
- **Express**
- **MySQL**
- **Nodemon** (para hot-reload em desenvolvimento)

### **Frontend Web**
- **Next.js**
- **Axios** (para requisições HTTP)
- **React Context** (para gerenciamento de estado)
- **TailwindCSS** Framework de CSS para construção rápida de interfaces responsivas e personalizáveis.

### **Frontend Mobile**
- **React Native**
- **Axios** (para requisições HTTP)

### **Ferramentas**
- **Postman/Insomnia** (para testar a API)

---

## **⚙️ Como Configurar o Ambiente**

### **1. Pré-requisitos**
- **Node.js** instalado (v16 ou superior recomendado)
- **MySQL** instalado
- **React Native CLI** instalado para o Mobile (caso use o mobile)

### **2. Clone o repositório**
```bash
git clone https://github.com/elgraabi/lojinha-do-if
cd lojinha-do-if
```

### **3. Backend - Instale as dependências**
```bash
cd backend
npm install
```

### **4. Frontend Web - Instale as dependências**
```bash
cd frontend-web
npm install
```

### **5. Frontend Mobile - Instale as dependências**
```bash
cd frontend-mobile
npm install
```

### **6. Configure o Banco de Dados**
Siga as etapas de configuração do banco de dados descritas no arquivo `api_db.sql` dentro da pasta `backend`.

### **7. Inicie o Servidor**
Para o **Backend**:
```bash
cd backend
npm start
```

Para o **Frontend Web**:
```bash
cd frontend-web
npm run dev
```

Para o **Frontend Mobile** (emulador ou dispositivo conectado):
```bash
cd frontend-mobile
npx react-native run-android   # ou run-ios, dependendo da plataforma
```

---

## **🚀 Funcionalidades Disponíveis**

### **Backend (API Restful)**

#### **Clientes**
- **GET** `/clientes` - Lista todos os clientes. (Chama o `clienteService` que utiliza o `clienteRepository` para buscar os dados)
- **POST** `/clientes` - Cria um novo cliente. (Utiliza o `clienteService` para criar e validar os dados antes de salvar no banco)
- **PUT** `/clientes/:id` - Atualiza um cliente existente. (Chama o `clienteService` para fazer a atualização)
- **DELETE** `/clientes/:id` - Remove um cliente. (Chama o `clienteService` para deletar o cliente)

#### **Produtos**
- **GET** `/produtos` - Lista todos os produtos. (Chama o `produtoService` que utiliza o `produtoRepository`)
- **POST** `/produtos` - Cria um novo produto. (Chama o `produtoService` para validar e salvar o produto)
- **PUT** `/produtos/:id` - Atualiza um produto existente. (Usa o `produtoService`)
- **DELETE** `/produtos/:id` - Remove um produto. (Chama o `produtoService`)

#### **Compras**
- **GET** `/compras` - Lista todas as compras. (Chama o `compraService` que usa o `compraRepository`)
- **POST** `/compras` - Registra uma nova compra. (Utiliza o `compraService` para gerenciar o processo)
- **PUT** `/compras/:id` - Atualiza uma compra existente. (Usa o `compraService`)
- **DELETE** `/compras/:id` - Remove uma compra. (Chama o `compraService` para deletar a compra)

### **Frontend Web (Next.js)**


### **Frontend Mobile (React Native)**


---

## **🛠️ Como Testar a API**

1. Utilize **Postman** ou **Insomnia** para testar os endpoints da API.
2. Para testar **POST, PUT e DELETE**, envie o body no formato JSON. **Lembre-se de que certas validações, como verificação de unicidade de email ou idade mínima, estão sendo feitas diretamente no serviço**, então um erro será retornado caso algum critério não seja atendido.

---

## **📄 Licença**

MIT. 🚀
