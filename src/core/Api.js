
const $xhttp = new XMLHttpRequest();

function mySend(fileURL) {
    $xhttp.onreadystatechange = callFunction;
    $xhttp.open("GET", fileURL, true);
    $xhttp.send(null);

    return $xhttp.response;
}

function callFunction() {
    let response;
    if($xhttp.readyState === 4) {
        if($xhttp.status === 200) {
            response = $xhttp.responseText;
            return response;
        }
    }
}

export {
    mySend
}

