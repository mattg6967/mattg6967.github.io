// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // Función para guardar el estado del sidebar en localStorage
    const saveSidebarState = (isOpen) => {
        // Almacena el estado como 'true' o 'false' (string)
        localStorage.setItem('sidebarOpen', isOpen); 
    };

    // Función para cargar el estado del sidebar al cargar la página
    const loadSidebarState = () => {
        // Recupera el estado guardado. Si no existe, asume 'false' (cerrado)
        const isOpen = localStorage.getItem('sidebarOpen') === 'true'; 
        
        if (isOpen) {
            sidebar.classList.add('active');
            body.classList.add('sidebar-open');
        } else {
            sidebar.classList.remove('active');
            body.classList.remove('sidebar-open');
        }
    };

    // 1. Cargar el estado guardado al inicio (esto imita el guardado de YouTube)
    loadSidebarState();

    // 2. Event listener para el botón de toggle (☰)
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'active' en el sidebar
        const isCurrentlyOpen = sidebar.classList.toggle('active'); 
        // Alterna la clase 'sidebar-open' en el body para mover el contenido principal
        body.classList.toggle('sidebar-open');
        
        // 3. Guardar el nuevo estado
        saveSidebarState(isCurrentlyOpen); 
    });
});