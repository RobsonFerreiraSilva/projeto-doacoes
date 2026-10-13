# 🤲 Projeto de Extensão: Plataforma de Doações (`projeto-doacoes`)

Repositório unificado do projeto acadêmico de extensão voltado para a gestão e facilitação de doações. O sistema é composto por uma aplicação Front-end para a interface do usuário e um Back-end robusto desenvolvido em Java com Spring Boot.

---

## 🛠️ Tecnologias Utilizadas

### Back-end
* **Java** (Versão recente)
* **Spring Boot** (v4.1.0)
* **Spring Data JPA / Hibernate**
* **Banco de Dados:** PostgreSQL 18

### Front-end
* **HTML5**, **CSS3** e **JavaScript**

---

## ⚙️ Pré-requisitos para Execução

Certifique-se de ter instalado em sua máquina:
* Java Development Kit (JDK)
* PostgreSQL configurado com o banco de dados `doacoes_db`
* Ferramenta de controle de versão Git

---

## 🚀 Como Executar o Projeto

### 1. Banco de Dados
Certifique-se de que o PostgreSQL está rodando localmente (porta padrão `5432`) e crie o banco de dados correspondente:
```sql
CREATE DATABASE doacoes_db;