$('#create-user-form').submit(function (e) {
    e.preventDefault();

    const formValues = $(this).serializeArray();

    const requestBody = Object.fromEntries(
        formValues.map(fv => [fv.name, fv.value])
    );

    $.ajax(`/api/users/`, {
        dataType: 'json',
        method: 'POST',
        contentType: 'application/json',
        // TODO_2: enviar email del usuario actual
        // headers: {
        //     'x-user-email': localStorage.getItem('userEmail')
        // },
        data: JSON.stringify(requestBody),
        success: function () {
            window.location = '/'
        }
    })

})