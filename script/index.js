document.getElementsByClassName("buttomn1")[0].addEventListener('click', function(){
    var login = document.getElementsByClassName('pole1')[0].value;
    var pass = document.getElementsByClassName('pole2')[0].value;

    if (login == "maks" && pass == "123"){
        console.log(document.getElementsByClassName('pole1')[0].value);
        console.log(document.getElementsByClassName('pole2')[0].value);
        window.location.href = "page2.html";

    }

});