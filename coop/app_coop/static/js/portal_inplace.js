const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const dataContainer = document.getElementById('job-data');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let itemsPerPage = 20;
let totalItems = 0;
let totalPages = 0;
let allData = [];
let filteredData = [];

const fetchData = 'https://jsonfakery.com/jobs';

// SEARCH AND PAGINATION LOGIC ===========================================================================================================================================================================
function renderData(data, page) {
  dataContainer.innerHTML = '';
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach(item => {
    const dataItemDiv = document.createElement('div');
    dataItemDiv.classList.add('data-item');
    
    dataItemDiv.innerHTML = `
            <a href="#" class="col-md-3">
              <div class="card my-2 pb-2" style="height:26.5rem; overflow-y:hidden">
                  <img style="max-height:15rem;" src="{% static 'assets/bg/bg-job.png' %}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.company}</p>
                      <p class="card-text"><i class="fa-solid fa-table-cells me-2"></i>${item.job_category}</p>
                      <p class="card-text"><i class="fa-solid fa-building me-2"></i>${item.employment_type}</p>
                      <p class="card-text"><i class="fa-solid fa-location-dot me-2"></i>${item.location}</p>
                      <p class="card-text"><i class="fa-solid fa-business-time me-2"></i>Hari ini - ${item.application_deadline}</p>
                  </div>
              </div>
          </a>     
        `;
    dataContainer.appendChild(dataItemDiv);
  });
}

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

// DEFAULT FETCH ===========================================================================================================================================================================
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

// SEARCH LOGIC ===========================================================================================================================================================================
searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value.trim().toLowerCase();
  filteredData = allData.filter(item => {
    // Adjust properties based on your data
    return item.title.toLowerCase().includes(searchQuery) || 
           item.company.toLowerCase().includes(searchQuery) ||
           item.job_category.toLowerCase().includes(searchQuery) ||
           item.location.toLowerCase().includes(searchQuery);
  });

  totalItems = filteredData.length;
  totalPages = Math.ceil(totalItems / itemsPerPage);
  currentPage = 1;  // Reset to the first page
  renderData(filteredData, currentPage);
  renderPagination(totalPages);
});

// PAGINATION LOGIC ===========================================================================================================================================================================
pagination.addEventListener('click', (e) => {
  if (e.target.classList.contains('page-link')) {
    currentPage = parseInt(e.target.textContent);
    const dataToPaginate = filteredData.length ? filteredData : allData;  
    renderData(dataToPaginate, currentPage);
  }
});
