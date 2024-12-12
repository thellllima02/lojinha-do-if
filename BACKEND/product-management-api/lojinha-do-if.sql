CREATE DATABASE IF NOT EXISTS lojinhaDoIf;

USE lojinhaDoIf;

-- Clients Table
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),       -- Alterado para 'name'
    email VARCHAR(255),
    birthDate DATE,          -- Alterado para 'birthDate' e tipo 'DATE'
    age INT                  -- 'idade' foi alterado para 'age'
);

-- Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),       -- Alterado para 'name'
    price DECIMAL(10, 2)     -- Alterado para 'price'
);

-- Purchases Table
CREATE TABLE purchases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,          -- Alterado para 'client_id'
    purchase_date DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Alterado para 'purchase_date'
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Purchase Items Table
CREATE TABLE purchase_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    purchase_id INT NOT NULL,        -- Alterado para 'purchase_id'
    product_id INT NOT NULL,         -- Alterado para 'product_id'
    quantity INT NOT NULL,           -- Alterado para 'quantity'
    unit_price DECIMAL(10, 2) NOT NULL,  -- Alterado para 'unit_price'
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Dados para a tabela clients
INSERT INTO clients (name, email, birthDate, age) 
VALUES 
('Ana Silva', 'ana.silva@example.com', '1990-05-20', 34),
('Carlos Almeida', 'carlos.almeida@example.com', '1985-03-15', 39),
('Beatriz Souza', 'beatriz.souza@example.com', '1998-11-10', 26);

-- Dados para a tabela products
INSERT INTO products (name, price) 
VALUES 
('Notebook Dell', 3500.00),
('Teclado Mecânico', 250.00),
('Mouse Gamer', 150.00),
('Monitor 24"', 1200.00),
('Cadeira Gamer', 800.00);

-- Dados para a tabela purchases
INSERT INTO purchases (client_id, total) 
VALUES 
(1, 3750.00),
(2, 1950.00),
(3, 800.00);

-- Dados para a tabela purchase_items
INSERT INTO purchase_items (purchase_id, product_id, quantity, unit_price) 
VALUES 
(1, 1, 1, 3500.00), -- Cliente Ana Silva comprou 1 Notebook Dell
(1, 2, 1, 250.00),  -- Cliente Ana Silva comprou 1 Teclado Mecânico
(2, 4, 1, 1200.00), -- Cliente Carlos Almeida comprou 1 Monitor 24"
(2, 5, 1, 800.00),  -- Cliente Carlos Almeida comprou 1 Cadeira Gamer
(3, 5, 1, 800.00);  -- Cliente Beatriz Souza comprou 1 Cadeira Gamer

-- Verificando os dados inseridos
SELECT * FROM clients;
SELECT * FROM products;
SELECT * FROM purchases;
SELECT * FROM purchase_items;

