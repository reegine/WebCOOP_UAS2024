document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    const emailAddress = formData.get('email'); 
    const adminCode = formData.get('adminCode');
    const password = formData.get('password');

    if (emailAddress == '' || password == '' || adminCode =='') {
        alert('Tolong Isi Semua Data Yang Dibutuhkan');
        return;
    } else {
        window.location.href = 'admin/dashboard/';
    }

    
});

document.querySelector('.btn-custom-red').addEventListener('click', function () {
    document.querySelector('form').submit();
});

window.onload = function() {
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('input[name="adminCode"]').value = '';
    document.querySelector('input[name="password"]').value = '';
}