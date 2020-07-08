<p align="center">
    <img src="./public/logo.png" width="200" alt="doe">
    <br />
    Um simples site de doação
</p>
<hr />

<p align="center">
    <img src="./public/snapshot-1.png" width="500" alt="snapshot 1">
    <img src="./public/snapshot-2.png" width="500" alt="snapshot 1">
</p>


## Tecnologias usadas

- [Node.JS](https://nodejs.org/en/) - Um interpretador de JavaScript assíncrono
- [Express](https://expressjs.com/pt-br/) - Framework JS para desenvolver aplicações web
- [Sequelize](https://sequelize.org/) - ORM (Object-Relational Mapper) para Node. js
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Uma poderosa template engine para o Javascript.
- [Nodemailer](https://nodemailer.com/about/) - Um modulo do JS para mandar emails

## Começando

### Instalação

- Clone este repositorio ```git clone https://github.com/sudo-victor/doe.git```
- Entre na pasta do projeto ```cd doe```
- Instale todas as dependencias ```yarn``` ou ```npm install```


### Inicialização 

 - Antes de dar um ```yarn dev``` ou ```npm run dev``` você deverá criar um arquivo ```.env``` na pasta raiz e copiar tudo que tem no arquivo ```file_env```
 - Você precisa colocar todas as configurações do seu banco de dados postgres e do email no arquivo ```.env```
 - E depois disso tudo rodar com ```yarn dev``` ou ```npm run dev```

Estará rodando na porta 8000
