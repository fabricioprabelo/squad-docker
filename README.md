# Squad Admin no Docker

Para rodar o projeto [Squad Admin](https://github.com/fabriciorabelo/squad) no docker é inicialmente preciso ter passado pelos processo de configuração de instalação do mesmo.

## Estrutura de pastas

---

A estrutura de pasta foi oganizada da seguinte forma:

-   /data - Pasta destinada para a persistencia de dados do SGBD [Mongo](https://hub.docker.com/_/mongo)
-   /etc - Pasta destinada para configuração do servidor de aplicação [Nginx](https://hub.docker.com/_/nginx)
-   /logs - Pasta destinada para o armazenamento de logs do Mongo e Nginx
-   /scripts - Contém um script de inicialização para criação do banco de dados e usuário do mesmo no SGBD Mongo, você pode alterar de acordo com suas necessidades. Mas lembre-se de alterar as configurações de banco do servidor API.
-   /server - Pasta destinada para servidor api
-   /www - Pasta destinada para o servidor de aplicação

## Configuração e instalação

---

É necessário que você possua instalado em seu computador o [Docker](https://www.docker.com//) (prefenrêncialmente uma versão do tipo LTS) e um editor de texto, recomendo o [Visual Studio Code](https://code.visualstudio.com/) para edição.

### Configurando e instalando o servidor

1 - Utilizando um terminal Lunux/Mac ou Prompt de comandos do Windows, acesse a pasta raíz do projeto [Squad Admin](https://github.com/fabriciorabelo/squad) em _/backend_ e execute o comando para gerar a versão de produção do projeto:

```bash
npm run build ou yarn build
```

2 - Copie as seguintes pastas e arquivos para dentro da pasta _/server_ deste projeto:

-   /build
-   /public
-   /views
-   .env
-   .ormconfig.json
-   package.json
-   .yarn.lock

3 - Após copiado estes arquivos do projeto [Squad Admin](https://github.com/fabriciorabelo/squad) configure as seguintes linhas de configuração do _/server/.env_ para o seguinte:

```env
SERVER_PORT=4000
SERVER_HOST="localhost"
SERVER_URL="http://localhost:4000"
```

4 - Altere as configurações do _/server/ormconfig.json_ para:

```json
{
    "type": "mongodb",
    "host": "mongo",
    "port": 27017,
    "database": "squad",
    "username": "squad",
    "password": "a1s2d3f4m0n9b8v7",
    "useUnifiedTopology": true,
    "entities": ["build/types/*.js"]
}
```

### Configurando a aplicação de interface

1 - Antes de executar a compilação da aplicação do projeto [Squad Admin](https://github.com/fabriciorabelo/squad), altere a seguinte linha do _.env_ em _/frontend/.env_:

```env
REACT_APP_GRAPHQL_SERVER="http://localhost:4000"
```

2 - Utilizando um terminal Lunux/Mac ou Prompt de comandos do Windows, acesse a pasta raíz do projeto [Squad Admin](https://github.com/fabriciorabelo/squad) em _/frontend_ e execute o comando para gerar a versão de produção do projeto:

```bash
npm run build ou yarn build
```

2 - Copie todos os arquivos e pastas gerados dentro de _/frontend/build_ para a pasta _/www_ deste projeto.

### Inicilizando o docker compose

1 - Utilizando um terminal Lunux/Mac ou Prompt de comandos do Windows, acesse a pasta raíz deste projeto e execute o comando:

```bash
docker-compose up ou docker-compose up -d #para rodar o projeto mesmo após uma reinicialização
```

Se tudo ocorrer bem o projeto pode ser acessado através do endereço URL: [http://localhost](http://localhost).
Caso tenha ocorrido algum erro, verifique os logs de inicialização do docker.
