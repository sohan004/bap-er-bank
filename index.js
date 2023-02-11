document.getElementById('sub').addEventListener('click', function(){
    const emailBox = document.getElementById('email-box');
    const email = emailBox.value;
    const passBox = document.getElementById('pass-box');
    const pass = passBox.value;
    if(email === 'sohan@gmail.com' && pass === 'sohan123'){
        window.location.href = 'bank.html'
    }
    else{
        alert('please input valid gmail and password')
    }
})