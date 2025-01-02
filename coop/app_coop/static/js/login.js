// IF admin log's in, then they will be re-directed to another page, different from the students
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    const emailAddress = formData.get('email'); 
    const password = formData.get('password');

    if (emailAddress == '' || password == '') {
        alert('Tolong Isi Semua Data Yang Dibutuhkan');
        return;
    }

    if (emailAddress === 'admin123@gmail.com' && password !== '') {
        window.location.href = urls.dashboardAdmin; 
    } else {
        window.location.href = urls.dashboardStudent; 
    }
});

document.querySelector('.btn-custom-red').addEventListener('click', function () {
    document.querySelector('form').submit();
});

window.onload = function() {
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('input[name="password"]').value = '';
}