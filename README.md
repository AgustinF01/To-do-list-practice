# H1 Introducción

Este proyecto es una aplicación de lista de tareas creada con React y Vite. La aplicación permite a los usuarios agregar, eliminar y marcar como completadas las tareas. También incluye una función de filtrado para mostrar solo las tareas completadas, pendientes o todas.

# H2 Estructura del Proyecto

**El proyecto está compuesto por las siguientes secciones:**

**- src:** Carpeta que contiene el código fuente de la aplicación.
**- main.jsx:** Archivo que contiene el punto de entrada de la aplicación.
**- App.jsx:** Archivo que contiene el componente principal de la aplicación.
**- components:** Carpeta que contiene los componentes individuales de la aplicación.
**- TaskList.jsx**: Archivo que contiene el componente que muestra la lista de tareas.
**- Task.jsx:** Archivo que contiene el componente que muestra una tarea individual.
**- Filter.jsx:** Archivo que contiene el componente que permite filtrar las tareas.
**- styles.css:** Archivo que contiene los estilos CSS de la aplicación.
**- public:** Carpeta que contiene los archivos estáticos de la aplicación.
**- index.html:** Archivo que contiene el HTML de la aplicación.
**- package.json:** Archivo que contiene la configuración del proyecto.

# H2 Componentes

**- TaskList:** Este componente muestra la lista de tareas y permite a los usuarios agregar, eliminar y marcar como completadas las tareas. Utiliza la biblioteca @dnd-kit/core para permitir la reordenación de las tareas.
**- Task:** Este componente muestra una tarea individual y permite a los usuarios marcarla como completada o eliminarla.
**- Filter:** Este componente permite a los usuarios filtrar las tareas por estado (completadas, pendientes o todas).

# H2 Funcionalidades

**- Agregar tareas:** Los usuarios pueden agregar nuevas tareas escribiendo en el campo de texto y presionando la tecla Enter.
**- Eliminar tareas:** Los usuarios pueden eliminar tareas individuales haciendo clic en el botón "Eliminar".
**- Marcar como completadas:** Los usuarios pueden marcar tareas como completadas haciendo clic en el checkbox.
**- Filtrar tareas:** Los usuarios pueden filtrar las tareas por estado (completadas, pendientes o todas) haciendo clic en los botones de filtro.

# H2 Tecnologías Utilizadas

**- React:** Biblioteca de JavaScript para crear interfaces de usuario.
**- Vite:** Herramienta de desarrollo y construcción de aplicaciones web.
**- localforage:** Biblioteca para almacenar datos en el navegador.

# H2 Uso

1. Clona el repositorio del proyecto.
2. Instala las dependencias ejecutando npm install o yarn install.
3. Inicia la aplicación ejecutando npm run dev.
4. Abre la aplicación en un navegador web.

# H2 Licencia

Este proyecto está licenciado bajo la licencia MIT.