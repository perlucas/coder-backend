// TODO_2: identificar al usuario
// // solicitar email al inicio
// Swal.fire({
//     title: "Identifícate para continuar",
//     input: "email",
//     text: "Ingresa tu email",
//     inputValidator: (value) => {
//         if (!value) {
//             return "¡Coloca tu email para continuar!"
//         }
//         return false
//     },
//     allowOutsideClick: false
// })
//     .then(input => {
//         const email = input.value
//         localStorage.setItem('userEmail', email)
//     })


$('#filter-users').submit(function (e) {
    e.preventDefault();

    const formValues = $(this).serializeArray();

    const requestBody = Object.fromEntries(
        formValues.map(fv => [fv.name, fv.value])
    );

    // request GET a api/users enviando los parámetros del filtro
    $.getJSON('api/users', requestBody, function (data) {

        // renderizar el listado de usuarios
        $('#users-list ul')
            .html(
                data
                    .map(u => `
                    <li id="list-item-${u.id}">
                        ${u.name} ${u.lastName} - ${u.age} años (${u.genre})
                        <a href='#' onclick="removeUser('${u.id}')">Eliminar</a>
                    </li>
                    `)
                    .join('')
            );

    });
})

function removeUser(userId) {
    $.ajax(`/api/users/${userId}`, {
        dataType: 'json',
        method: 'DELETE',
        // TODO_2: enviar email del usuario actual
        // headers: {
        //     'x-user-email': localStorage.getItem('userEmail')
        // },
        success: function () {
            // eliminar el elemento <li> con el user
            $(`#list-item-${userId}`).remove()
        }
    })
}
