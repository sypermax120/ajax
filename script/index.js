document.getElementsByClassName("buttomn1")[0].addEventListener('click', function(){
    var log = document.getElementsByClassName('pole1')[0].value;
    var pass = document.getElementsByClassName('pole2')[0].value;

    // if (login == "maks" && pass == "123"){
    //     console.log(document.getElementsByClassName('pole1')[0].value);
    //     console.log(document.getElementsByClassName('pole2')[0].value);
    //     window.location.href = "page2.html";

    // }
    
    var method = "GET"
    var URL = 'http://localhost:3000/resp';
    var async = true;

    var xhr = new XMLHttpRequest();

    xhr.open(method, URL, async)
    xhr.send({"log": log , "pass": pass});
    

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function() {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            console.log(`Готово`); // response -- это ответ сервера
        }
        console.log(xhr.status);
        console.log(xhr.responseText);

        if(xhr.status == 200){
            window.location.href = "page2.html";
            
        };
    };

    console.log('ok');

});
