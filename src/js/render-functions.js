import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageList = document.querySelector(".gallery");

export function createImageCard(image) {
    const shortAlt = image.tags.split(',').slice(0, 3).join(', ');
    
    return `
    <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${shortAlt}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${image.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${image.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${image.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${image.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `;
}
export function createGallery(images) {
    return images.map(createImageCard).join('');
}


// export function createGallery(images) {
//   function imgTemplate(img) {
//     const {
//       webformatURL,
//       tags,
//       likes,
//       views,
//       comments,
//       downloads,
//       largeImageURL,
//     } = img;

//     return `<li class="photo-card">
//               <a href=${largeImageURL}><img src="${webformatURL}" alt="${tags}"/></a>

//               <div class="info">
//               <div class="info-item"><h2>Likes: <span>${likes}</span></h2></div>
//               <div class="info-item"> <h2>Views: <span>${views}</span></h2></div>
//               <div class="info-item"><h2>Comments: <span>${comments}</span></h2></div>
//               <div class="info-item"><h2>Downloads: <span>${downloads}</span></h2></div>
//             </div>
//             </li>
//             `;
//   }
// }