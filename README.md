# Restrictions Service
 

Este es un servicio desarrollado en Node.js y Express dedicado a la gestión de restricciones y limitaciones que puede tener un estudiante.

## Características

- **Express**: Framework web minimalista y rápido para manejar solicitudes HTTP.
- **Nodemon**: Herramienta que reinicia automáticamente el servidor cuando se detectan cambios en el código durante el desarrollo.
- **Gestión de Restricciones**: Incluye rutas y controladores para gestionar restricciones académicas de estudiantes.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (se recomienda la versión 14 o superior).
- **npm** (Administrador de paquetes de Node, incluido con Node.js).
## Dependencias
Este proyecto utiliza las siguientes dependencias:

- **dotenv**: Carga variables de entorno desde un archivo .env.
- **express**: Framework web minimalista para Node.js que permite manejar rutas, middleware y    solicitudes HTTP.
- **express-handlebars**: Un motor de plantillas para generar vistas dinámicas en aplicaciones Express.
- **firebase-admin**: SDK de administración para Firebase, utilizado para gestionar Firestore, autenticación, y otros servicios de Firebase.
- **morgan**: Middleware de registro de solicitudes HTTP para Node.js, utilizado para facilitar la depuración y el monitoreo del tráfico en la aplicación.
- **nodemon**: Herramienta que monitorea los archivos de la aplicación y reinicia automáticamente el servidor cuando detecta cambios, útil para el desarrollo.
- **uuid**: Generador de identificadores únicos universales (UUID), usado comúnmente para asignar IDs únicos a recursos.
## Comenzando

### 1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git

cd tu-repositorio

npm install

npm run dev
```

El servidor estará disponible por defecto en http://localhost:4000. Puedes acceder a él mediante tu navegador o herramientas como Postman. Si el enlace del despliegue en Render no está disponible, puedes utilizar esta opción para pruebas locales.

*Nota: Si estás ejecutando el proyecto localmente, necesitarás las credenciales de Firebase (archivo secreto) y las variables de entorno necesarias. Contacta con el propietario del repositorio para obtener acceso a estas credenciales.*

## Endpoints

- Obtener todas las restricciones: GET | /restrictions/
- Eliminar una restricción por id: DELETE | /restrictions/remove/:id
- Eliminar una restricción por razón: DELETE | /restrictions/reason/remove/:id
- Asignar una restricción: POST | /restrictions/assign (Parámetros por Query)
- Validar si un estudiante posee restricciones, mediante su id: GET | /restrictions/validate/:id
- Obtener restricciones de un estudiante mediante su id: GET | /restrictions/student/:id
- Obtener restricciones por razón: GET | /restrictions/reason (Parámetros por Query)
- Obtener restricción por su id : GET | /restrictions/:id
