function sendMessage(form) {
    $.post({
        type: 'POST',
        url: 'https://warm-sands-85930.herokuapp.com/clientMessage',
        dataType: 'json',
        data: {
            "name": form.name.value,
            "email": form.email.value,
            "message": form.message.value
        }
    });
    return false;
}