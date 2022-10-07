import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Alert({ title, message }){
    const Pesan = withReactContent(Swal);
    Pesan.fire({
        title: <strong>{title}</strong>,
        html: <p>{message}</p>,
        icon: 'success',
    })
}

export default Alert;