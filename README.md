🧬 PokeAPI React App
Esta es una aplicación web construida con React y Vite que consume la PokéAPI para mostrar una lista paginada de Pokémon. El usuario puede navegar entre páginas y filtrar por nombre (en desarrollo).

🚀 Características
🔄 Paginación de Pokémon.

⚛️ Construido con React y Vite.

📦 Peticiones asíncronas a la PokéAPI.

🔍 Filtro de búsqueda por nombre (interfaz lista, lógica en desarrollo).

🔄 Scroll suave al cambiar de página.

📁 Estructura del proyecto
.
├── src
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos principales
│   ├── pedirDatos.js       # Función para consumir la PokéAPI
│   ├── components
│   │   ├── Tarjeta.jsx     # Componente de tarjeta individual
│   │   └── ListaTarjetas.jsx # Componente lista de tarjetas
├── public
│   ├── vite.svg            # Logo de Vite
└── README.md

⚙️ Instalación
Clona el repositorio:
git clone https://github.com/tu-usuario/pokeapi-react-app.git
cd pokeapi-react-app

Instala las dependencias:
npm install

Ejecuta la app:
npm run dev
La aplicación estará disponible en http://localhost:5173/.

🧠 Cómo funciona
El estado paginaactual controla la página actual de resultados.

El efecto useEffect escucha los cambios de página y solicita los datos con pedirDatos(paginaactual).

Los datos se guardan en el estado arr y se muestran con el componente ListaTarjetas.

El scroll se reinicia al cambiar de página para mejorar la experiencia de usuario.

🔧 Futuras mejoras
Agregar funcionalidad de búsqueda por nombre.

Mostrar más detalles del Pokémon en la tarjeta (Tarjeta.jsx).

Agregar animaciones y estilos personalizados.

Manejo de errores si la API falla.

www.linkedin.com/in/andrea-benitez-brenes-8a250715a
