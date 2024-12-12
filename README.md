# Projeto: Sistema de Gerenciamento de Produtos

## Descrição
Este é um sistema completo para gerenciamento de produtos, compras e clientes. O projeto possui backend, frontend web e mobile. Ele foi desenvolvido para facilitar o gerenciamento de operações comerciais, como registrar clientes, produtos, compras e visualizar relatórios.

## Estrutura do Projeto

### Backend
- **Tecnologias**: Node.js, Express, PostgreSQL
- **Descrição**: Um backend robusto que fornece uma API RESTful para operações CRUD, incluindo clientes, produtos e compras. A API também permite gerenciamento de itens de compras.

### Frontend Web
- **Tecnologias**:
  - Next.js: Framework para aplicações web com renderização do lado do servidor (SSR).
  - Axios: Para requisições HTTP.
  - React Context: Para gerenciamento de estado global.
  - TailwindCSS: Framework de CSS para interfaces responsivas e altamente personalizáveis.
- **Descrição**: Uma aplicação web para gerenciamento de dados, permitindo criar, editar, visualizar e deletar informações diretamente do navegador.

### Frontend Mobile
- **Tecnologias**:
  - React Native: Para criação de aplicações nativas para Android e iOS.
  - Axios: Para requisições HTTP.
- **Descrição**: Uma aplicação móvel focada em permitir aos usuários interagir com o sistema de forma rápida e eficiente.

## Funcionalidades

### Backend
- CRUD de clientes, produtos e compras.
- Registro de itens comprados e cálculo de totais de compra.
- Autenticação (opcional).

### Frontend Web
- Cadastro de clientes, produtos e compras.
- Visualização detalhada de compras e itens.
- Editar e excluir dados de clientes, produtos e compras.
- Interface responsiva e de fácil uso.

### Frontend Mobile
- Consulta de clientes, produtos e compras.
- Interface intuitiva para facilitar o uso em dispositivos móveis.

## Instalação e Uso

### Backend
1. Clone o repositório.
2. Navegue até a pasta do backend.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`.
5. Rode as migrações no banco de dados:
   ```bash
   npx sequelize-cli db:migrate
   ```
6. Inicie o servidor:
   ```bash
   npm start
   ```

### Frontend Web
1. Navegue até a pasta do frontend web.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador: [http://localhost:3000](http://localhost:3000).

### Frontend Mobile
1. Navegue até a pasta do frontend mobile.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o aplicativo:
   ```bash
   npx react-native run-android
   ```
   ou
   ```bash
   npx react-native run-ios
   ```

## Estrutura de Pastas
```
root
├── backend
├──── product-management-api
│     ├── controller
│     ├── repository
│     ├── route
│     ├── service
├── frontend-web
├──── lojinhaif
│     ├── public
│     ├── src
│     ├──── app
|     ├────── clientes
|     ├────── compra
|     ├────── fonts
|     ├────── produto
├── frontend-mobile
│   ├── components
│   ├── screens
│   ├── navigation
│   └── services
```

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Basta seguir os passos abaixo:
1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/sua-feature
   ```
3. Faça commit das suas modificações:
   ```bash
   git commit -m "Adiciona sua feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/sua-feature
   ```
5. Abra um Pull Request.

## Autores
- Gabriel Silva Oliveira
- Hercules Da Silva Santos
- Leonardo Carvalho de Melo

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
