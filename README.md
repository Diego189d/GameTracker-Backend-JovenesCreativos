GameTracker — Backend

API REST creada con Node.js, Express y MongoDB para gestionar tareas dentro del proyecto GameTracker.
Forma parte del proyecto MERN solicitado en la actividad final de jovenes creativos.

Tecnologías que usé:

Node.js

Express

MongoDB Atlas

Mongoose

CORS

Dotenv

Estructura de mi proyecto
backend/
│── controllers/
│     └── taskController.js
│── models/
│     └── Task.js
│── routes/
│     └── taskRoutes.js
│── .env
│── .env.example
│── server.js
│── package.json
│── package-lock.json

⚙️ Instalación y configuración
 1 Clonar el repositorio
git clone https://github.com/TU_USUARIO/GameTracker-Backend.git
cd GameTracker-Backend

2️ Instalar dependencias
npm install

3️ Crear archivo .env

Crea un archivo .env en la raíz del backend con:

MONGO_URI=TU_URI_DE_MONGODB
PORT=5001




Ejecutar el servidor

Modo desarrollo con nodemon:

npm run dev


Modo producción:

npm start


El servidor inicia en:

http://localhost:5001

📡 Endpoints disponibles
🔹 Obtener todas las tareas

GET /api/tasks

🔹 Crear una tarea nueva

POST /api/tasks
Body JSON:

{
  "id": "1",
  "nombre": "Tarea de prueba",
  "descripcion": "Descripción de la tarea"
}

🛢 Base de datos

La API se conecta a MongoDB Atlas mediante Mongoose y crea una colección llamada:

tasks

🧑‍💻 Autor

Proyecto desarrollado como parte de la actividad MERN final.
