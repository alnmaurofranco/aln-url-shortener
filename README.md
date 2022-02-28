<h1 align="center" style="font-weight: bold;">⚡ ALN Projeto ⚡ - URL Shortener</h1>

<p align="center">
  Encurtador de URL é usado para criar uma url curta, para compartilhar em sites, chats, e-mails e redes sociais. Como o Facebook, Instagram, Youtube, Whatsapp. 
</p>

<p align="center">
  <img alt="JobsManager" src=".github/screen.png" width="100%" />
</p>

<p align="center" style="font-style: italic;">
Este projeto foi desenvolvido para praticar o uso do Prisma 2 ORM e a utilização das arquiteturas SOLID e Clean Architecture.
</p> 

## 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Next.js](https://nextjs.org/) - The React Framework
for Production
* [Typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
* [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express.js](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Prisma](https://prisma.io/) - Next-generation Node.js and TypeScript ORM
* [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database

## 🎉 Funcionalidades
* Funcionalidade de criar um encurtador de URL ✅
* Redirecionamento da URL encurtada pelo NextJS utilizando Server Side Rendering ✅
* Implementado no back-end (NodeJS + TypeScript) as arquiteturas e métodologias: Clean Architecture, Domain Driven Design (DDD), Clean Code e SOLID ✅

## 👨🏼‍💻 Rodando o projeto
Para rodar o projeto é necessário ter [Node.js](https://nodejs.org/) instalado em sua maquina. Caso não tenha ainda basta acessar o site do [Node.js](https://nodejs.org/)
e instalar para continuar.

- Clone o repositório
```bash
git clone https://github.com/alnmaurofranco/aln-url-shortener
```
- Acesse a pasta do projeto
```bash
cd aln-url-shortener
```
### **Front-end**
- Agora vá na pasta do front-end:
```bash
cd web
```
- Instale as dependências do projeto com (yarn ou npm)
```bash
yarn install
```

- Inicie o front-end com o comando abaixo:
```bash
yarn dev
```

E pronto agora o frontend estára rodando e pode ser acessado em [`localhost:3000`](http://localhost:3000)

### **Back-end**
- Agora vá na pasta do back-end:
```bash
cd server
```
- Instale as dependências do projeto com (yarn ou npm)
```bash
yarn install
```

- Logo depois você deve alterar os arquivos que terminam com `.env.development.example` para `.env.development` e modifique a variavel abaixo com suas configurações do seu banco de dados:

```bash
DATABASE_URL="postgresql://USER:PASS@HOST:PORT/DATABASE?schema=public"
```

- Inicie o back-end com o comando abaixo:
```bash
yarn dev
```

E pronto agora o backend estára rodando e pode ser acessado em [`localhost:3333`](http://localhost:3333)

## **:memo: Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💚 by AlanM Franco  [Visite meu Portfolio!](https://alnmaurofranco.github.io/)
