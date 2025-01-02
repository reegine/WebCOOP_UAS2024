const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const dataContainer = document.getElementById('job-data');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let itemsPerPage = 12;
let totalItems = 0;
let totalPages = 0;
let allData = [];  // Store all data globally for search and pagination
let filteredData = [];  // Store filtered data after search

const fetchData = '../json_dummy_data/data_mahasiswa4.json';

// Function to render the paginated data
function renderData(data, page) {
  dataContainer.innerHTML = '';
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach(item => {
    const dataItemDiv = document.createElement('div');
    dataItemDiv.classList.add('data-item');
    dataItemDiv.innerHTML = `
      <a href="#" class="col-md-3 justify-content-center">
        <div class="card my-2 pb-2">
          <img src="${item.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.fullName}</h5>
            <p class="card-text">${item.major}</p>
            <p class="card-text m-0">Semester Terakhir : ${item.semester}</p>
            <p class="card-text m-0">Posisi Yang Diinginkan:</p>
            <ul>
              <li><p class="card-text">${item.positionOne}</p></li>
              <li><p class="card-text">${item.positionTwo}</p></li>
            </ul>
          </div>
        </div>
      </a>
    `;
    dataContainer.appendChild(dataItemDiv);
  });
}

// Function to render the pagination
function renderPagination(totalPages) {
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const paginationLink = document.createElement('li');
    paginationLink.classList.add('page-item');
    const paginationLinkAnchor = document.createElement('a');
    paginationLinkAnchor.classList.add('page-link');
    paginationLinkAnchor.href = '#';
    paginationLinkAnchor.textContent = i;
    paginationLink.appendChild(paginationLinkAnchor);
    pagination.appendChild(paginationLink);
  }
}

// Initial fetch and render of data
fetch(fetchData)
  .then(response => response.json())
  .then(data => {
    allData = data;  // Store the entire dataset globally
    totalItems = allData.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    renderData(allData, currentPage);
    renderPagination(totalPages);
  })
  .catch(error => console.error(`Error:`, error));

// Search functionality
searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value.trim().toLowerCase();
  filteredData = allData.filter(item => {
    return item.fullName.toLowerCase().includes(searchQuery) ||
           item.major.toLowerCase().includes(searchQuery);
  });

  // Reset pagination for search results
  totalItems = filteredData.length;
  totalPages = Math.ceil(totalItems / itemsPerPage);
  currentPage = 1;  // Reset to the first page
  renderData(filteredData, currentPage);
  renderPagination(totalPages);
});

// Pagination event listener
pagination.addEventListener('click', (e) => {
  if (e.target.classList.contains('page-link')) {
    currentPage = parseInt(e.target.textContent);
    const dataToPaginate = filteredData.length ? filteredData : allData;  // Use filtered data if search was performed
    renderData(dataToPaginate, currentPage);
  }
});
