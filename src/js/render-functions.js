export function createMarkup(params) {
  return params
    .map(
      item => `<li class="element-item">
                <a class="element-link" href='${item.largeImageURL}'>
                  <img class="element-image" src='${item.webformatURL}' alt='${item.tags}' />
                </a>
                <div class="stats">
                  <p><span>Likes</span>${item.likes}</p>
                  <p><span>Views</span>${item.views}</p>
                  <p><span>Comments</span>${item.comments}</p>
                  <p><span>Downloads</span>${item.downloads}</p>
                </div>
              </li>`
    )
    .join('');
}
