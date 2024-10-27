# Clean Architecture API

Esta API foi desenvolvida em TypeScript, implementando conceitos de **Clean Architecture**, **Test-Driven Development (TDD)**, **Refatoração Contínua** e **Commits Atômicos**. O projeto é estruturado de maneira modular, visando escalabilidade e manutenibilidade.

A arquitetura é baseada nos princípios de Clean Architecture, separando as responsabilidades em camadas independentes para facilitar a expansão, a reutilização de componentes e a integração com diferentes interfaces de usuário.

## Tecnologias Utilizadas

- **TypeScript**: Para tipagem estática e desenvolvimento mais seguro.
- **Express**: Framework para criação de APIs REST.
- **MongoDB**: Banco de dados NoSQL, usado para armazenamento de dados.
- **Nodemailer**: Para envio de emails.
- **Jest**: Para testes unitários e integração.
- **Supertest**: Para testes de endpoints HTTP.
- **ESLint**: Para análise e padronização do código.
- **Husky e Lint-Staged**: Para garantir qualidade de código antes de cada commit.
- **Git Commit Msg Linter**: Para padronização das mensagens de commit.

## Estrutura de Pastas

A estrutura de pastas segue os princípios da Clean Architecture, dividida em camadas de responsabilidade:

- `src`
  - **entities**: Define as entidades principais do domínio.
  - **external**: Integrações com serviços externos (por exemplo, MongoDB, serviços de email).
  - **main**: Configuração principal da aplicação, incluindo rotas, servidor e middlewares.
  - **shared**: Utilitários e módulos comuns usados em diferentes partes da aplicação.
  - **usecases**: Casos de uso, representando a lógica de negócios.
  - **web-controllers**: Controladores HTTP que lidam com as requisições e chamam os casos de uso apropriados.

- `test`
  - Espelha a estrutura da pasta `src`, contendo os testes de unidade e integração para cada módulo.


## Metodologias de Desenvolvimento

Este projeto adota algumas práticas recomendadas de desenvolvimento:

- **Test-Driven Development (TDD)**: Cada funcionalidade é desenvolvida com testes desde o início, garantindo maior confiabilidade e qualidade.
- **Refatoração Contínua**: O código é constantemente revisado e refatorado para melhorar a legibilidade e a estrutura.
- **Commits Atômicos**: Cada commit representa uma mudança pequena e completa, facilitando o entendimento do histórico de alterações.
