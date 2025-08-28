fetch("posts.js")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("posts-container");

    // Ordenar por fecha descendente
    posts.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "col-md-6 col-lg-4";

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${post.imagen}" class="card-img-top" alt="${post.titulo} - ${post.categoria}">
          <div class="card-body">
            <h5 class="card-title">${post.titulo}</h5>
            <p class="card-text">${post.descripcion}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <small class="text-muted">${new Date(post.fecha).toLocaleDateString("es-AR")}</small>
            <a href="${post.link}" class="btn btn-primary btn-sm">Leer más</a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error cargando posts:", error));

