// FETCH COMMENT FOR NOTIFICATION
// console.log('ini udh di atasnya')
// fetch('https://dummyjson.com/comments')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const dataContainer = document.getElementById('comments-data');

//     data.comments.forEach(item =>{
//         const dataItemDiv = document.createElement('div');
//         dataItemDiv.classList.add('data-item');
//         console.log('ini udh di dlm')

//         dataItemDiv.innerHTML = `
//         <div class="card mb-2">
//             <div class="card-body">
//                 <div class="container text-start align-center">
//                 <div class="row justify-content-between">
//                     <div class="col-7">
//                         <h6>${item.body}</h6>
//                     </div>
//                     <div class="col-5">
//                         <div class="row align-items-start">
//                             <div class="col">
//                                 ${item.user.fullName}
//                             </div>
//                             <div class="col">
//                                 235023100 ${item.postId}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//         `;
//         dataContainer.appendChild(dataItemDiv);
//     })
//   })
//   .catch(error => console.error(`Error:`, error));


// fetch('../json_dummy_data/data_mahasiswa1.json')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     const dataContainer = document.getElementById('todo-data');

//     data.forEach(item =>{
//         const dataItemDiv = document.createElement('div');
//         dataItemDiv.classList.add('data-item');
//         console.log('ini udh di dlm')

//         item.status === 'Terkonfirmasi'
//         ? check = 'checked'
//         : check = ''

//         dataItemDiv.innerHTML = `
//         <div class="card mb-2">
//         <div class="card-body">
//             <div class="container text-start">
//             <div class="row justify-content-between">
//                 <div class="col-md-1">
//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${item.id}" ${check}>
//                     </div>
//                 </div>
//                 <div class="col-md-5">
//                     <label class="form-check-label" for="flexCheckDefault${item.id}">
//                         ${item.title}
//                     </label>
//                 </div>
//                 <div class="col-md-6">
//                     <div class="row align-items-start">
//                         <div class="col">
//                             ${item.issuedByName}
//                         </div>
//                         <div class="col">
//                             ${item.issuedByNIM}
//                         </div>
//                         <div class="col">
//                             ${item.issuedAt}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>
//         `;
//         dataContainer.appendChild(dataItemDiv);
//     })
// })
// .catch(error => console.error(`Error:`, error));



// COUNTDOWN LOGIC
const countDownDate = new Date("December 31, 2024 23:59:59").getTime();


const x = setInterval(function() {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);



// GENERATE DUMMY LINK FOR EVALUATION
const generateLinkButton = document.getElementById('generate-link-button');
const copyLinkButton = document.getElementById('copy-link-button');
const linkInput = document.getElementById('link-input');

generateLinkButton.addEventListener('click', (e) => {
    e.preventDefault();
    const dummyLink = 'https://coopeducationprasetiyamulya.com/user/23502310025/digital-evaluation-form';
    linkInput.value = dummyLink;
    copyLinkButton.style.display = 'block';
});

copyLinkButton.addEventListener('click', () => {
  navigator.clipboard.writeText(linkInput.value);
  alert('Link copied to clipboard!');
});

const generateLinkButton2 = document.getElementById('generate-link-button2');
const copyLinkButton2 = document.getElementById('copy-link-button2');
const linkInput2 = document.getElementById('link-input2');

generateLinkButton2.addEventListener('click', (e) => {
    e.preventDefault();
    const dummyLink = 'https://coopeducationprasetiyamulya.com/user/23502310025/digital-evaluation-form';
    linkInput2.value = dummyLink;
    copyLinkButton2.style.display = 'block';
});

copyLinkButton2.addEventListener('click', () => {
  navigator.clipboard.writeText(linkInput2.value);
  alert('Link copied to clipboard!');
});