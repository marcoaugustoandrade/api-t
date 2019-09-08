## Instalação
Para utilizar essa API é necessário a instalação do Docker (é necessário reiniciar):
sudo snap install docker
sudo usermod -a -G docker $USER

E também o docker-compose:
sudo apt install -y docker-compose

## Rodando o container
Para subir a aplicação utilize o comando:
docker-compose up -d
docker run -p 3009:3009 marcoandrade:apitarefas

## Acesando a documentação da API
Para acessar a documentação da API basta abrir no navegador o endereço:
http://localhost:3009/api/v1/docs/

## Acessando o cliente do MariaDB (MySQL) dentro do container
Caso seja necessário acessar o banco de dados dentro do container:
docker exec -it container-tarefas mysql -u suporte -p


# Packages
dotenv
expressjs
body-parser
cors
morgan
mysql
swagger-ui-express
yamljs
nodemon
mysql
express-validator
newman
eslint

./node_modules/eslint/bin/eslint --init
