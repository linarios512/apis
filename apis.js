// app.js

document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://jsonplaceholder.typicode.com/photos";
    const galleryContainer = document.body;

    fetch(apiUrl)
        .then(response => response.json())
        .then(photos => {
            // Tomamos solo las primeras 10 fotos
            const firstTenPhotos = photos.slice(0, 10);

            // Crear elementos HTML para cada foto
            firstTenPhotos.forEach(photo => {
                const photoElement = createPhotoElement(photo);
                galleryContainer.appendChild(photoElement);
            });
        })
        .catch(error => console.error("Error fetching photos:", error));

    function createPhotoElement(photo) {
        const photoContainer = document.createElement("div");
        photoContainer.classList.add("photo");

        const titleElement = document.createElement("p");
        titleElement.textContent = photo.title;

        const imgElement = document.createElement("img");
        imgElement.src = photo.url;
        imgElement.alt = photo.title;

        photoContainer.appendChild(imgElement);
        photoContainer.appendChild(titleElement);

        return photoContainer;
    }
});
