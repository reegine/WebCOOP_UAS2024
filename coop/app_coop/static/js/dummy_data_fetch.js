//  DAFTAR MAHASISWA =====================================================================================================================================

// CODE SHOW ALL DATA
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-mahasiswa');
  
      data.forEach(item =>{
          const dataItemDiv = document.createElement('div');
          dataItemDiv.classList.add('data-item');
          console.log('ini udh di dlm')
  
          item.statusKurikulum == "COOP" 
                ? badgestatus ='success'
                : badgestatus ='warning'

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-4">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                    <span class="badge text-bg-${badgestatus} p-2">${item.statusKurikulum}</span>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.issuedAt}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
          dataContainer.appendChild(dataItemDiv);
      })
    })
    .catch(error => console.error(`Error:`, error));


// REGULER STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa2.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const dataContainer2 = document.getElementById('data-mahasiswa2');

    data.forEach(item =>{
        if (item.statusKurikulum == "Reguler") {
            const dataItemDiv = document.createElement('div');
            dataItemDiv.classList.add('data-item');
            console.log('ini udh di dlm')

            dataItemDiv.innerHTML = `
            <div class="col my-2">
            <div class="card">
                <div class="card-body">
                    <div class="text-start">
                        <div class="row row-cols-4">
                            <div class="col">
                            <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                            </div>
                            <div class="col">
                            <p class="mb-0">${item.NIM}</p>
                            </div>
                            <div class="col">
                                    <span class="badge text-bg-warning p-2">${item.statusKurikulum}</span>
                                </div>
                            <div class="col">
                                <div class="row align-items-center">
                                    <p class="col-10 mb-0">${item.issuedAt}</p>
                                    <i class="col-2 fa-solid fa-angle-right"></i>
                                </div>
                            </div>

                        </div>
                        </div>
                </div>
                </div>
            </div> 
            `;
            dataContainer2.appendChild(dataItemDiv);
        }
    })
})
.catch(error => console.error(`Error:`, error));


// COOP STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const dataContainer3 = document.getElementById('data-mahasiswa3');

        data.forEach(item =>{
            if (item.statusKurikulum == "COOP") {
                const dataItemDiv = document.createElement('div');
                dataItemDiv.classList.add('data-item');
                console.log('ini udh di dlm')

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-4">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                    <span class="badge text-bg-success p-2">${item.statusKurikulum}</span>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.issuedAt}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
                dataContainer3.appendChild(dataItemDiv);
            }
        })
    })
    .catch(error => console.error(`Error:`, error));



// PAGE DAFTAR SURAT PENGANTAR==========================================================================================================================

// CODE SHOW ALL DATA
fetch('../json_dummy_data/data_mahasiswa1.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-surat');
  
      data.forEach(item =>{
          const dataItemDiv = document.createElement('div');
          dataItemDiv.classList.add('data-item');
          console.log('ini udh di dlm')
  
          item.status == "Terkonfirmasi" 
                ? badgestatus ='success'
                : badgestatus ='warning'

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-4">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.issuedByName}</p>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.issuedByNIM}</p>
                                </div>
                                <div class="col">
                                    <span class="badge text-bg-${badgestatus} p-2">${item.status}</span>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.issuedAt}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
          dataContainer.appendChild(dataItemDiv);
      })
    })
    .catch(error => console.error(`Error:`, error));


// REGULER STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa1.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const dataContainer2 = document.getElementById('data-surat2');

    data.forEach(item =>{
        if (item.status == "Sedang Diproses") {
            const dataItemDiv = document.createElement('div');
            dataItemDiv.classList.add('data-item');
            console.log('ini udh di dlm')

            dataItemDiv.innerHTML = `
            <div class="col my-2">
            <div class="card">
                <div class="card-body">
                    <div class="text-start">
                        <div class="row row-cols-4">
                            <div class="col">
                            <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.issuedByName}</p>
                            </div>
                            <div class="col">
                            <p class="mb-0">${item.issuedByNIM}</p>
                            </div>
                            <div class="col">
                                    <span class="badge text-bg-warning p-2">${item.status}</span>
                                </div>
                            <div class="col">
                                <div class="row align-items-center">
                                    <p class="col-10 mb-0">${item.issuedAt}</p>
                                    <i class="col-2 fa-solid fa-angle-right"></i>
                                </div>
                            </div>

                        </div>
                        </div>
                </div>
                </div>
            </div> 
            `;
            dataContainer2.appendChild(dataItemDiv);
        }
    })
})
.catch(error => console.error(`Error:`, error));


// COOP NOT CONFIRMED
fetch('../json_dummy_data/data_mahasiswa1.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const dataContainer3 = document.getElementById('data-surat3');

        data.forEach(item =>{
            if (item.status == "Terkonfirmasi") {
                const dataItemDiv = document.createElement('div');
                dataItemDiv.classList.add('data-item');
                console.log('ini udh di dlm')

                dataItemDiv.innerHTML = `
                    <div class="col my-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="text-start">
                                <div class="row row-cols-4">
                                    <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.issuedByName}</p>
                                    </div>
                                    <div class="col">
                                    <p class="mb-0">${item.issuedByNIM}</p>
                                    </div>
                                    <div class="col">
                                            <span class="badge text-bg-warning p-2">${item.status}</span>
                                        </div>
                                    <div class="col">
                                        <div class="row align-items-center">
                                            <p class="col-10 mb-0">${item.issuedAt}</p>
                                            <i class="col-2 fa-solid fa-angle-right"></i>
                                        </div>
                                    </div>

                                </div>
                                </div>
                        </div>
                        </div>
                    </div> 
                    `;
                dataContainer3.appendChild(dataItemDiv);
            }
        })
    })
    .catch(error => console.error(`Error:`, error));


// PAGE DAFTAR MOCK INTERVIEW ==========================================================================================================================

// CODE SHOW ALL DATA
fetch('../json_dummy_data/data_mahasiswa3.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-intv');
  
      data.forEach(item =>{
          const dataItemDiv = document.createElement('div');
          dataItemDiv.classList.add('data-item');
          console.log('ini udh di dlm')
  
          item.status == "Terkonfirmasi" 
                ? badgestatus ='success'
                : badgestatus ='warning'

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-7">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="${item.img}" />${item.issuedByName}</p>
                                </div>
                                <div class="col">${item.issuedByNIM}</div>
                                <div class="col">
                                    <span class="badge text-bg-${badgestatus} p-2">${item.status}</span>
                                </div>
                                <div class="col">${item.intvDateRequest}</div>
                                <div class="col">${item.fromTime}</div>
                                <div class="col">${item.interviewerRequest}</div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.duration}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
          dataContainer.appendChild(dataItemDiv);
      })
    })
    .catch(error => console.error(`Error:`, error));


// REGULER STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa3.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const dataContainer2 = document.getElementById('data-intv2');

    data.forEach(item =>{
        if (item.status == "Sedang Diproses") {
            const dataItemDiv = document.createElement('div');
            dataItemDiv.classList.add('data-item');
            console.log('ini udh di dlm')

            dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-7">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="${item.img}" />${item.issuedByName}</p>
                                </div>
                                <div class="col">${item.issuedByNIM}</div>
                                <div class="col">
                                    <span class="badge text-bg-warning p-2">${item.status}</span>
                                </div>
                                <div class="col">${item.intvDateRequest}</div>
                                <div class="col">${item.fromTime}</div>
                                <div class="col">${item.interviewerRequest}</div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.duration}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
            dataContainer2.appendChild(dataItemDiv);
        }
    })
})
.catch(error => console.error(`Error:`, error));


// COOP NOT CONFIRMED
fetch('../json_dummy_data/data_mahasiswa3.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const dataContainer3 = document.getElementById('data-intv3');

        data.forEach(item =>{
            if (item.status == "Terkonfirmasi") {
                const dataItemDiv = document.createElement('div');
                dataItemDiv.classList.add('data-item');
                console.log('ini udh di dlm')

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-7">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="${item.img}" />${item.issuedByName}</p>
                                </div>
                                <div class="col">${item.issuedByNIM}</div>
                                <div class="col">
                                    <span class="badge text-bg-success p-2">${item.status}</span>
                                </div>
                                <div class="col">${item.intvDateRequest}</div>
                                <div class="col">${item.fromTime}</div>
                                <div class="col">${item.interviewerRequest}</div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.duration}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
                dataContainer3.appendChild(dataItemDiv);
            }
        })
    })
    .catch(error => console.error(`Error:`, error));



//  DAFTAR CV =====================================================================================================================================

// CODE SHOW ALL DATA
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-cv');
  
      data.forEach(item =>{
          const dataItemDiv = document.createElement('div');
          dataItemDiv.classList.add('data-item');
          console.log('ini udh di dlm')
  
          item.statusKurikulum == "COOP" 
                ? badgestatus ='success'
                : badgestatus ='warning'

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-5">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                    <span class="badge text-bg-${badgestatus} p-2">${item.statusKurikulum}</span>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.issuedAt}</p>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <button type="button" class="btn btn-outline-secondary w-50 col-10">Lihat File</button>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
          dataContainer.appendChild(dataItemDiv);
      })
    })
    .catch(error => console.error(`Error:`, error));


// REGULER STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa2.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const dataContainer2 = document.getElementById('data-cv2');

    data.forEach(item =>{
        if (item.statusKurikulum == "Reguler") {
            const dataItemDiv = document.createElement('div');
            dataItemDiv.classList.add('data-item');
            console.log('ini udh di dlm')

            dataItemDiv.innerHTML = `
            <div class="col my-2">
            <div class="card">
                <div class="card-body">
                    <div class="text-start">
                        <div class="row row-cols-5">
                            <div class="col">
                            <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                            </div>
                            <div class="col">
                            <p class="mb-0">${item.NIM}</p>
                            </div>
                            <div class="col">
                                    <span class="badge text-bg-warning p-2">${item.statusKurikulum}</span>
                            </div>
                            <div class="col">
                                    <p class="mb-0">${item.issuedAt}</p>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <button type="button" class="btn btn-outline-secondary w-50 col-10">Lihat File</button>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                </div>
                                </div>          

                        </div>
                        </div>
                </div>
                </div>
            </div> 
            `;
            dataContainer2.appendChild(dataItemDiv);
        }
    })
})
.catch(error => console.error(`Error:`, error));


// COOP STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const dataContainer3 = document.getElementById('data-cv3');

        data.forEach(item =>{
            if (item.statusKurikulum == "COOP") {
                const dataItemDiv = document.createElement('div');
                dataItemDiv.classList.add('data-item');
                console.log('ini udh di dlm')

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-5">
                                <div class="col">
                                <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                        <span class="badge text-bg-success p-2">${item.statusKurikulum}</span>
                                </div>
                                <div class="col">
                                        <p class="mb-0">${item.issuedAt}</p>
                                    </div>
                                    <div class="col">
                                        <div class="row align-items-center">
                                            <button type="button" class="btn btn-outline-secondary w-50 col-10">Lihat File</button>
                                            <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                    </div>          
    
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
                dataContainer3.appendChild(dataItemDiv);
            }
        })
    })
    .catch(error => console.error(`Error:`, error));



//  DAFTAR LAPORAN HASIL =====================================================================================================================================

// CODE SHOW ALL DATA
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-laporan');
  
      data.forEach(item =>{
          const dataItemDiv = document.createElement('div');
          dataItemDiv.classList.add('data-item');
          console.log('ini udh di dlm')
  
          item.status == "Terkonfirmasi" 
                ? badgestatus ='success'
                : badgestatus ='warning'

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-5">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                    <span class="badge text-bg-${badgestatus} p-2">${item.status}</span>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.issuedAt}</p>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <button type="button" class="btn btn-outline-secondary w-50 col-10">Lihat File</button>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
          dataContainer.appendChild(dataItemDiv);
      })
    })
    .catch(error => console.error(`Error:`, error));


// REGULER STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa2.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    const dataContainer2 = document.getElementById('data-laporan2');

    data.forEach(item =>{
        if (item.status == "Sedang Diproses") {
            const dataItemDiv = document.createElement('div');
            dataItemDiv.classList.add('data-item');
            console.log('ini udh di dlm')

            dataItemDiv.innerHTML = `
            <div class="col my-2">
            <div class="card">
                <div class="card-body">
                    <div class="text-start">
                        <div class="row row-cols-5">
                            <div class="col">
                            <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                            </div>
                            <div class="col">
                            <p class="mb-0">${item.NIM}</p>
                            </div>
                            <div class="col">
                                    <span class="badge text-bg-warning p-2">${item.status}</span>
                            </div>
                            <div class="col">
                                    <p class="mb-0">${item.issuedAt}</p>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <button type="button" class="btn btn-outline-secondary w-50 col-10">Lihat File</button>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                </div>
                                </div>          

                        </div>
                        </div>
                </div>
                </div>
            </div> 
            `;
            dataContainer2.appendChild(dataItemDiv);
        }
    })
})
.catch(error => console.error(`Error:`, error));


// COOP STUDENTS ONLY
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const dataContainer3 = document.getElementById('data-laporan3');

        data.forEach(item =>{
            if (item.status == "Terkonfirmasi") {
                const dataItemDiv = document.createElement('div');
                dataItemDiv.classList.add('data-item');
                console.log('ini udh di dlm')

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-5">
                                <div class="col">
                                <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                        <span class="badge text-bg-success p-2">${item.status}</span>
                                </div>
                                <div class="col">
                                        <p class="mb-0">${item.issuedAt}</p>
                                    </div>
                                    <div class="col">
                                        <div class="row align-items-center">
                                            <button type="button" class="btn btn-outline-secondary w-50 col-10">Lihat File</button>
                                            <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                    </div>          
    
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
                dataContainer3.appendChild(dataItemDiv);
            }
        })
    })
    .catch(error => console.error(`Error:`, error));



//  DAFTAR INPLACE =====================================================================================================================================

// CODE SHOW ALL DATA
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-mahasiswa4');
  
      data.forEach(item =>{
          const dataItemDiv = document.createElement('div');
          dataItemDiv.classList.add('data-item');
          console.log('ini udh di dlm')
  
          item.statusKurikulum == "COOP" 
                ? badgestatus ='success'
                : badgestatus ='warning'

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-4">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                    <span class="badge text-bg-${badgestatus} p-2">${item.statusKurikulum}</span>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.issuedAt}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
          dataContainer.appendChild(dataItemDiv);
      })
    })
    .catch(error => console.error(`Error:`, error));


// CODE SHOW ALL DATA
fetch('../json_dummy_data/data_mahasiswa2.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataContainer = document.getElementById('data-mahasiswa5');
  
      data.forEach(item =>{
          const dataItemDiv = document.createElement('div');
          dataItemDiv.classList.add('data-item');
          console.log('ini udh di dlm')
  
          item.statusKurikulum == "COOP" 
                ? badgestatus ='success'
                : badgestatus ='warning'

                dataItemDiv.innerHTML = `
                <div class="col my-2">
                <div class="card">
                    <div class="card-body">
                        <div class="text-start">
                            <div class="row row-cols-4">
                                <div class="col">
                                    <p class="mb-0"><img class="rounded-circle profile me-3" alt="avatar1" src="../assets/people/profile_pic.png" />${item.fullName}</p>
                                </div>
                                <div class="col">
                                    <p class="mb-0">${item.NIM}</p>
                                </div>
                                <div class="col">
                                    <span class="badge text-bg-${badgestatus} p-2">${item.statusKurikulum}</span>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <p class="col-10 mb-0">${item.issuedAt}</p>
                                        <i class="col-2 fa-solid fa-angle-right"></i>
                                    </div>
                                </div>                                 
                            </div>
                            </div>
                    </div>
                    </div>
                </div> 
                `;
          dataContainer.appendChild(dataItemDiv);
      })
    })
    .catch(error => console.error(`Error:`, error));
