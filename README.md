# 📍 Sistema de Consulta IBGE

Este projeto é uma aplicação Single Page Application (SPA) desenvolvida para a disciplina de Front-end com React no **IFMG**. O sistema consome a API oficial do IBGE para consultar estados e municípios, permitindo que o usuário salve suas pesquisas em um histórico global.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas de Engenharia de Software:

* **React.js** (Vite) - Biblioteca principal.
* **Redux Toolkit** - Gerenciamento de estado global para o histórico.
* **React Router Dom** - Navegação entre páginas (Home e Histórico).
* **Axios** - Consumo da API de Localidades do IBGE.
* **CSS Modules** - Estilização isolada e organizada.
* **LocalStorage** - Persistência de dados para não perder o histórico ao atualizar a página.

---

## 🛠️ Funcionalidades

- [x] Listagem dinâmica de Estados (UFs) via API.
- [x] Filtragem de Cidades baseada no estado selecionado.
- [x] Salvamento de consultas no estado global do Redux.
- [x] Página de Histórico com exibição de data e hora.
- [x] Opção de limpeza completa do histórico.
- [x] Layout responsivo e centralizado ("No Esquadro").

---

## 📂 Estrutura do Projeto

text
src/
├── components/     # Componentes compartilhados (Navbar)
├── pages/          # Páginas da aplicação (Home e Histórico)
├── services/       # Configuração do Axios (API IBGE)
├── store/          # Configuração do Redux Toolkit
└── App.jsx         # Gerenciamento de Rotas

## 🏁 Como rodar o projeto

**1. Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/sistema-ibge.git](https://github.com/SEU_USUARIO/sistema-ibge.git)

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

Acesse no navegador:

Abra o link exibido no terminal (geralmente http://localhost:5173).
```
### 2. Entre no Vercel
* [Clique aqui](https://api-ibge-topaz.vercel.app/)
  
👩‍💻 Autora: Nayara Ventura Candido 

IFMG 2026
