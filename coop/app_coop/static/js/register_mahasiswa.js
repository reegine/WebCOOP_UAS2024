document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    console.log("ini udh yg debugging");
    console.log(formData);
    window.location.href = 'student/dashboard/';
    this.submit();

});

document.querySelector('.btn-custom-red').addEventListener('click', function () {
    document.querySelector('form').submit();
});
