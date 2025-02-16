# 🎵 Spotify Clone

Uma réplica do Spotify desenvolvida com **React** no frontend, **MongoDB** e **Express.js** no backend. O projeto está hospedado no **Render Cloud**.

## 🚀 Tecnologias Utilizadas

- **Frontend:** React, React Router, Styled Components
- **Backend:** Node.js, Express.js, MongoDB
- **Autenticação:** JWT
- **Hospedagem:** Render Cloud

## 📂 Estrutura do Projeto

```
/spotify-clone
│── back-end/         # Código do backend (Node.js, Express, MongoDB)
│── front-end/        # Código do frontend (React)
│── package.json      # Configuração dos scripts para rodar o projeto
│── README.md         # Documentação do projeto
```

## 🔧 Configuração e Execução

### 🛠 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (v16+)
- **MongoDB** (se rodar localmente)
- **NPM** ou **Yarn**

### 📥 Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/spotify-clone.git
cd spotify-clone
```

### ⚙️ Instalação das Dependências

```bash
npm install
```

### 🏗️ Build e Start do Frontend + Backend

No Render Cloud, o **package.json** foi configurado para:

1. Executar `npm run build` para instalar dependências e iniciar o frontend.
2. Rodar `npm run start` para iniciar o backend na porta 3000.

Para rodar localmente:

#### 🔹 Backend

```bash
cd back-end
npm install
npm start
```

#### 🔹 Frontend

```bash
cd front-end
npm install
npm start
```

### 🌍 Configuração da API no Frontend

No arquivo `front-end/api/api.js`, altere a constante `API_URL` para `http://localhost:3000` ao rodar localmente:

```javascript
const API_URL = "http://localhost:3000"; // Alterar para a URL do Render em produção
```

ℹ️ O `.env` não está funcionando corretamente, então a URL do backend foi definida diretamente no código.

## 🎯 Funcionalidades

- 🎶 Listagem de músicas e artistas
- 🎼 Reprodução de músicas (mockado)

## 📤 Deploy

O projeto foi deployado no **Render Cloud**. Para acessar, basta visitar:

🔗 **[URL do Projeto no Render](https://spotify-project-kbz6.onrender.com/)**

---

👨‍💻 Desenvolvido por **Seu Nome**\
📧 Contato: [seuemail@email.com](mailto\:gucpinto26@gmail.com)

