# API REST Taekwondo

Este repositorio forma parte del Trabajo final de Master cursado en la Universitat Oberta de Catalunya para el máster Desarrollo de sitios y aplicaciones web.

Aquí se encuentra la parte relacionada con la API para el proyecto https://github.com/jorgebg12/TFM_Bartol_Guillamon_Jorge.git.

## Funcionamiento

Para que todo funcione correctamente se necesita crear una base de datos local con las tablas que hay definidas en la carpeta databaseQuerys.

Cuando este creada, en la raíz del proyecto se crea un fichero .env donde se configura la conexión a la base de datos. Los parámetros por defecto son:
```
MYSQL_HOST = 'localhost'
MYSQL_USER = 'root'
MYSQL_PORT = 3306
MYSQL_PASSWORS = ''
MYSQL_DATABASE ='techniquesdb'
```

Cambiar el valor de los parámetros si se han definido de otra forma.

Una vez esté todo configurado ejecutamos:
```
npm run dev
```
