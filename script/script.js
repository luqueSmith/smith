// Prevenir el envío predeterminado del formulario
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener la consulta de búsqueda
    var searchQuery = document.getElementById("search-query").value;

    // Enviar la consulta al script del lado del servidor usando AJAX
    fetch("search_results.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "query=" + searchQuery
    })
        .then(response => response.text())
        .then(data => {
            // Actualizar el contenedor de resultados de búsqueda
            document.getElementById("search-results").innerHTML = data;
        })
        .catch(error => console.error("Error al obtener resultados:", error));
});
