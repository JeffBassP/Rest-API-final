## simple-rest-api
Aplicando os exemplos da aula na Arbyte.


## Design Patterns

# MVC 
    m - model -> entidades do banco de dados, como SCHEMAS.
    v - view -> HTMLs - inter face de usuarios.
    c - **controller** ->  Controlador de requisições que trabalha entre a camada de view e dados.

# Sigleton 
    * Forma de atribuir o valor a uma variavel, para evitar demais instancias desnecessárias.
    
# Factory
    * Um arquivo isolado que servirá para fazer todas as instancias do seu projeto/dominio.

# Repository
    * Codigo responsavel por manipulação de dados no banco.

# Service
    * Codigo dedicado a regra de negocio da aplicação.

# DDD (Domain-driven-design)
    * Cria estruturas isoladas de dominio na sua aplicação.
    V1/API
        domains
            user
                controllers 
                    DomainController.js
                factory
                    index.js
                repository
                    DomainRepository.js
                routes
                    index.js -> responsavel por carregar todas as rotas dinamicamente.
                    //rotas
                service
                    DomainService.js

# TDD (Test Driven Development) - Mocka/Jest
    * Software construido pensado em testes.
        Teste unitario
            - Responsavel pela unidade do codigo            
        Teste funcional
            - Teste de caixa preta -> serve para sabermos a entrada e saida de dados.
        Teste de integração
            - Testa integração entre sistemas
    * Coverage -> taxa de cobertura de testes (um codigo eficiente normalmente esta com 80% de cobertura)




