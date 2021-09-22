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

### Inicilizando o docker compose

1 - Utilizando um terminal Lunux/Mac ou Prompt de comandos do Windows, acesse a pasta raíz deste projeto e execute o comando:

```bash
docker-compose up ou docker-compose up -d # para rodar o projeto mesmo após uma reinicialização
```

Se tudo ocorrer bem o projeto pode ser acessado através do endereço URL: [http://localhost](http://localhost).
Caso tenha ocorrido algum erro, verifique os logs de inicialização do docker.
