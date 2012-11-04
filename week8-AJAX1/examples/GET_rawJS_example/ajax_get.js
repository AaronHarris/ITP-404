//GET
var ajax = function () {
    var xhr = new XMLHttpRequest();
    var url = "example1.php?name=David";
    
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('ajaxResponse').innerHTML = xhr.responseText;
        }
    };

    xhr.send(); //send the request
};
