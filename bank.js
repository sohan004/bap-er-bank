

document.getElementById('btn-1').addEventListener('click', function () {
    const diposi = document.getElementById('dipo')
    const diposit = parseFloat(diposi.innerText);

    const blanc = document.getElementById('blan')
    const blance = parseFloat(blanc.innerText);

    const input1 = document.getElementById('input-1');
    const dipositInput = parseFloat(input1.value)

    if (dipositInput > 0) {
        diposi.innerText = diposit + dipositInput;
        blanc.innerText = blance + dipositInput;
        input1.value = "";
        
    }
    input1.value = "";
})

document.getElementById('btn-2').addEventListener('click', function(){
    const withdra = document.getElementById('with')
    const withdraw = parseFloat(withdra.innerText);

    const blanc = document.getElementById('blan')
    const blance = parseFloat(blanc.innerText);

    const input2 = document.getElementById('input-2');
    const withdrawInput = parseFloat(input2.value)

    if (withdrawInput <= blance && withdrawInput > 0) {
        withdra.innerText = withdrawInput + withdraw;
        blanc.innerText = blance - withdrawInput;
        input2.value = "";
        
    }
    else if (withdrawInput > blance){
        alert('acount eto tk nai')
        input2.value = "";
    }
    input2.value = "";
})