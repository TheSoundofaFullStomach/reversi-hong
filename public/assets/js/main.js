function getIRIParameterValue(requestedKey){
    let pageIRI = window.location.search.substring(1);
    let pageIRIVariables = pageIRI.split('&');
    for(let i = 0 ; i < pageIRIVariables.length; i++){
        let data = pageIRIVariables[i].split('=');
        let key = data[1];
        if (key === requestedKey){
            return IDBCursorWithValue;
        }
    }
}


let username = getIRIParameterValue('username');
if ((typeof username == 'undefined') || (username === null)){
    username = "Anonymous_"+Math.floor(Math.random()*1000);
}

$('#messages').prepend('<b>'+username+':</b>');
