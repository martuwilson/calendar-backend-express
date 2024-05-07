# Calendario Backend

Este es un proyecto de backend para un calendario donde los usuarios registrados pueden agregar eventos. Utiliza una arquitectura MERN (MongoDB, Express, React y Node.js) para gestionar tanto los usuarios como los eventos.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. Antes de ejecutar el servidor, asegúrate de proporcionar tus propias variables de entorno en un archivo `.env`.
5. Ejecutar `npm run dev`

## Endpoints de Auth

#### 1- Registrar un nuevo usuario

- **URL:** `/api/auth/new`
- **Método:** `POST`
- **Parámetros de la solicitud:**
  - `name` (string): Nombre del usuario.
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario (debe tener al menos 6 caracteres).
- **Respuesta exitosa:** Código de estado 200
- **Respuesta fallida:** Código de estado 400
- **Ejemplo de solicitud:**
  ```json
  {
    "name": "Ejemplo",
    "email": "ejemplo@gmail.com",
    "password": "contraseña"
  }

#### 2- Iniciar sesión

- **URL:** `/api/auth`
- **Método:** `POST`
- **Parámetros de la solicitud:**
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario (debe tener al menos 6 caracteres).
- **Respuesta exitosa:** Código de estado 200
- **Respuesta fallida:** Código de estado 400
- **Ejemplo de solicitud:**
  ```json
  {
    "email": "ejemplo@gmail.com",
    "password": "contraseña"
  }

#### 3- Renovar Token

- **URL:** `/api/auth/renew`
- **Método:** `GET`
- **Parámetros de la solicitud:** No requiere parámetros.
- **Respuesta exitosa:** Código de estado 200
- **Respuesta fallida:** Código de estado 401 (No autorizado)

## Endpoints de Events
#### 1- Obtener todos los eventos

- **URL:** `/api/events`
- **Método:** `GET`
- **Parámetros de la solicitud:** No requiere parámetros.
- **Respuesta exitosa:** Código de estado 200
- **Respuesta fallida:** Código de estado 400

#### 2- Crear un nuevo evento

- **URL:** `/api/events`
- **Método:** `POST`
- **Parámetros de la solicitud:**
  - `title` (string): Título del evento.
  - `start` (string): Fecha y hora de inicio del evento.
  - `end` (string): Fecha y hora de finalización del evento.
- **Respuesta exitosa:** Código de estado 200
- **Respuesta fallida:** Código de estado 400
- **Ejemplo de solicitud:**
  ```json
  {
    "title": "Evento de ejemplo",
    "start": "2024-05-06T10:00:00Z",
    "end": "2024-05-06T12:00:00Z"
  }

#### 3- Actualizar un evento existente

- **URL:** `/api/events/:id`
- **Método:** `PUT`
- **Parámetros de la solicitud:**
  - `id` (string): ID del evento a actualizar.
  - `title` (string): Título actualizado del evento (opcional).
  - `start` (string): Fecha y hora de inicio actualizada del evento (opcional).
  - `end` (string): Fecha y hora de finalización actualizada del evento (opcional).
- **Respuesta exitosa:** Código de estado 200
- **Respuesta fallida:** Código de estado 400

#### Eliminar un evento

- **URL:** `/api/events/:id`
- **Método:** `DELETE`
- **Parámetros de la solicitud:**
  - `id` (string): ID del evento a eliminar.
- **Respuesta exitosa:** Código de estado 200
- **Respuesta fallida:** Código de estado 400



