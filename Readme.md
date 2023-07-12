# Medá Test App

Este proyecto consiste en el desarrollo de un pequeño módulo de gestión de empleados y empresas, así como el consumo de una API. Está desarrollado en React Native y se proporcionan las instrucciones para revisarlo y ejecutarlo.

## Instrucciones de instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de que tienes Node.js instalado en tu sistema.
3. Abre un terminal en la carpeta raíz del proyecto.
4. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

5. Una vez completada la instalación, ejecuta el siguiente comando para iniciar la aplicación:

   ```
   npm start
   ```

6. La aplicación se abrirá en tu navegador o en el emulador correspondiente.

## Características del proyecto

- El proyecto utiliza un pequeño contexto para almacenar la información.
- La interfaz principal tiene tres botones:
  - "Login empresa": permite iniciar sesión con las siguientes credenciales: _nombre de usuario: admin, contraseña: test_. Al iniciar sesión, se mostrará una lista de empleados y un botón "Añadir empleado", donde se pueden introducir los datos del empleado (nombre, usuario y contraseña).
  - "Acceso empleado": Permite acceder al perfil del usuario (sólo se muestra el nombre) utilizando las credenciales previamente registradas.
  - "Ver mensajes": Consume la API "https://jsonplaceholder.typicode.com/posts" y muestra la información devuelta (título y cuerpo del post).

## Notas adicionales

- Asegúrate de tener una conexión a Internet activa para poder consumir la API
