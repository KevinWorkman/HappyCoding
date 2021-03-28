async function getEtsyListings() {
  const containerDiv = document.getElementById('etsy-listings');

  const response = await fetch('https://happycoding.io/api/etsy-listings.json');
  const listings = await response.json();

  const indexes = [];
  while (indexes.length < 6) {
    const index = Math.floor(Math.random() * listings.length);
    if (!indexes.includes(index)) {
      indexes.push(index);
    }
  }

  for (const index of indexes) {
    const listing = listings[index];
    containerDiv.appendChild(buildEtsyThumbnail(listing));
  }
}

function buildEtsyThumbnail(listing) {
  const div = document.createElement('div');
  div.classList.add('etsy-thumbnail');
  div.innerHTML += `<a href="${listing.url}"><img src="${listing.imageSmallUrl}" /></a>`;
  div.innerHTML += `<a href="${listing.url}">${listing.title}</a>`;
  return div;
}

getEtsyListings();