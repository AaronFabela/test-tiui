# TIUI TEST

El proyecto fue desarrollado con NodeJS y Express como Framework

## Primeros pasos

Para poder inicializar el proyecto, una vez que este clonado, ejectuar el comando:

### `npm install`

Este comando instalará todas las dependencias necesarias y que fueron utilizadas para la elaboración de este proyecto.

Al finalizar, para poder montar la aplicación en tu servidor local, tendrémos que ejecutar el comando

### `npm start`

Con este comnado, podremos tener la apliación en nuestra computadora, bastará con ingresar a la siguiente dirección [http://localhost:4000](http://localhost:4000) en nuestro navegador.

## Rutas

Las rutas para acceder a esta aplicación serán 6, dependiendo del método HTTP a ocupar es lo que se debe de enviar en el body y como parámetros.

### GET

**/api/entidad/jwt**

La ruta [http://localhost:4000/api/entidad/jwt](http://localhost:4000/api/entidad/jwt) nos permitirá generar un JWT que servirá para poder autentificar el acceso a las rutas y mantenerlas protegidas.

**/api/entidad/**

La ruta [http://localhost:4000/api/entidad/](http://localhost:4000/api/entidad/) desplegará todas las entidades que fueron definidas en un inicio.

**/api/entidad/:entidadId**

La ruta [http://localhost:4000/api/entidad/:entidadId](http://localhost:4000/api/entidad/:entidadId) llevará el parámetro **entidadId** que nos permitirá buscar una entidad en específico.

### POST

**/api/entidad/**

En la ruta [http://localhost:4000/api/entidad/](http://localhost:4000/api/entidad/) se debe enviar en el body **id, nombre, descripcion, fechaDeCreacion**.

### PUT

**/api/entidad/:entidadId**

En la ruta [http://localhost:4000/api/entidad/:entidadId](http://localhost:4000/api/entidad/:entidadId) se debe enviar como parámetro el **id** de la entidad a actualizar y en el body **nombre, descripcion, fechaDeCreacion**.

### DELETE

**/api/entidad/:entidadId**

En la ruta [http://localhost:4000/api/entidad/:entidadId](http://localhost:4000/api/entidad/:entidadId) se debe enviar como parámetro el **id** de la entidad eliminar.
