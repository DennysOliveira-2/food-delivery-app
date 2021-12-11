# Food Delivery Web Application Sample
![GitHub Repo size](https://img.shields.io/github/repo-size/bardsnight/dsdeliver-sds2?style=flat-square)
![GitHub Languages](https://img.shields.io/github/languages/count/bardsnight/dsdeliver-sds2?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/bardsnight/dsdeliver-sds2?style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/bardsnight/dsdeliver-sds2?style=flat-square)
![License](https://img.shields.io/github/license/bardsnight/dsdeliver-sds2?style=flat-square)
> This project was developed with the intent of learning full-stack development with Springboot and React.
> <br>Live preview is available and source code if completely free to use.

Aplicação web de entrega de comida de página única (SPA) desenvolvida com React, TypeScript e Node no front-end que requisita a uma API RESTful feita em Java com SpringBoot hospedada no Heroku.

  O app tem como função mostrar os produtos disponíveis ao cliente pela página de produtos e realizar a transação com o end-point da API REST, onde os dados são gravados no banco de dados PostgreSQL relacional.
São usadas duas tabelas de muitos para muitos onde o mínimo de produtos em um pedido é 1, e o mínimo de pedidos relacionado a um produto é zero.
Uma terceira tabela relacionando os PEDIDOS e os PRODUTOS é usada pra retornar as informações.

Devido ao servidor do Heroku entrar em modo sleep (versão gratuita), o primeiro carregamento da página de produtos pode demorar um ou dois minutos até que funcione perfeitamente.
