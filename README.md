# API REST - Control de peliculas

Esta es una api para controlar el flujo de datos en una base de datos de Mongo DB. La misma fue proyecto de un curso introductorio de Node Js en ADA ITW.

## Requisitos previos

- Node Js
- npm

## Instalación

1. Clona este repositorio o descárgalo como archivo ZIP.
2. Navega hasta la carpeta del proyecto en la terminal.
3. Ejecuta el siguiente comando para instalar las dependencias:

`npm install | npm i`

## Configuración

Antes de ejecutar la aplicación, asegúrate las siguientes variables de entorno correspondientes a tu proyecto. Las mismas se encuentran en `.env.example`

## Iniciando la aplicación

1. En la terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando para iniciar la aplicación:

`npm run dev`

2. Abre tu navegador web y visita `http://localhost:3001/api/films` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

Todos los endpoint tienen como base `http://localhost:3001`

- GET `/api/films` - traer todas las peliculas
- GET `/api/films/:id` - traer una pelicula
- POST `/api/films` - crear pelicula
- PUT `/api/films/:id` - actualizar pelicula
- DELETE `/api/films/:id` - borrar pelicula

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes alguna sugerencia de mejora, por favor crea un issue o envía una pull request.

## Licencia

Este proyecto está bajo la [Licencia MIT](https://opensource.org/licenses/MIT).
