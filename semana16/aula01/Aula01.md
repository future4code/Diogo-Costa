# Exercícios aula 01


## Ex01

a) 
```VARCHAR```

usado para strings
```Date```
para datas.

b) 
```SHOW DATABASES 
information_schema
mello_diogo_costa
 ```
```
SHOW TABLES mostra 
Actor
```
c) 
```SHOW Actor```

acusa erro de sintaxe

## Ex02

b) 
Chave Primaria duplicada, o SQL não permite criar duas entradas com a mesma key.

c)
Quantidade de colunas não confere, não esta sendo declarado a quantiade de colunas e por isso ele não sabe onde os inputs devem ser inseridos. 

d)
Campos name não tem um valor padrão.

## Ex03

c)
A query retorna os os valores padrão de quando criamos a tabela.

e)
'nome' não é um campo da lista


## Ex04


```sh

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    SALARY FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    "1200000",
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"003", 
	"Fernanda Montenegro",
	300000,
	"1929-10-19", 
	"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT salary FROM Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";

SELECT id, name, salary FROM Actor WHERE salary < 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating FLOAT NOT NULL
);

INSERT INTO Filmes (id, name, synopsis, release_date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Filmes (id, name, synopsis, release_date, rating)
VALUES (
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Filmes (id, name, synopsis, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
)
```












