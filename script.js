const images = [
  {
    preview: 'https://kompastour.com/useruploads/regions/region_ac26b1de00.jpg',
    original:
      'https://kompastour.com/useruploads/regions/region_ac26b1de00.jpg',
    description: 'Temple on an ocean',
  },
  {
    preview:
      'https://loveyouplanet.com//wp-content/uploads/2018/03/hramyi-ostrova-bali-16.jpg',
    original:
      'https://loveyouplanet.com//wp-content/uploads/2018/03/hramyi-ostrova-bali-16.jpg',
    description: 'Beautiful temple',
  },
  {
    preview:
      'https://img.pac.ru/resorts/213172/248694/big/B39C17E8C0A8801470BD51480C17F6C3.jpg',
    original:
      'https://img.pac.ru/resorts/213172/248694/big/B39C17E8C0A8801470BD51480C17F6C3.jpg',
    description: 'Cliff',
  },
  {
    preview: 'https://abt.ua/uploads/images/city/maxresdefault__1_.jpg',
    original: 'https://abt.ua/uploads/images/city/maxresdefault__1_.jpg',
    description: 'Swimming pool near the seaside',
  },
  {
    preview:
      'https://cs10.pikabu.ru/post_img/big/2019/10/01/8/1569934816117780127.jpg',
    original:
      'https://cs10.pikabu.ru/post_img/big/2019/10/01/8/1569934816117780127.jpg',
    description: 'Volcano',
  },
  {
    preview: 'https://kompastour.com/useruploads/regions/region_8c7302039b.jpg',
    original:
      'https://kompastour.com/useruploads/regions/region_8c7302039b.jpg',
    description: 'Rice plantation',
  },
  {
    preview:
      'https://pegassales.kz/userfiles/upload/country/indonesia/indoneziya.jpg',
    original:
      'https://pegassales.kz/userfiles/upload/country/indonesia/indoneziya.jpg',
    description: 'islands',
  },
  {
    preview:
      'https://www.ultimatebali.com/wp-content/uploads/2023/12/Bali-Best-Waterfalls.jpg',
    original:
      'https://www.ultimatebali.com/wp-content/uploads/2023/12/Bali-Best-Waterfalls.jpg',
    description: 'Waterfall',
  },
  {
    preview:
      'https://extremelab.ru/wp-content/uploads/2018/05/surfing-na-bali.jpg',
    original:
      'https://extremelab.ru/wp-content/uploads/2018/05/surfing-na-bali.jpg',
    description: 'Surfing',
  },
];

const galleryContainer = document.querySelector('.gallery');


function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
          <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
        </li>`,
    )
    .join('');
  galleryContainer.innerHTML = galleryMarkup;
}

// Функція для відкриття модального вікна
function onImageClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;

  const largeImageURL = target.dataset.source;

  // Ініціалізація модального вікна
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${target.alt}" />
  `);

  instance.show();

  // Закриття модального вікна за ESC
  const closeModalOnEsc = e => {
    if (e.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModalOnEsc);
    }
  };

  window.addEventListener('keydown', closeModalOnEsc);
}

// Додаємо слухач кліків на контейнер
galleryContainer.addEventListener('click', onImageClick);

// Викликаємо функцію створення галереї
createGallery(images);
