import Swal from 'sweetalert2';
import axios from 'axios';

export default {

}

export function showAlert(message, icon, focus = '') {
    if (focus !== '') {
        document.getElementById(focus).focus();
    }
    Swal.fire({
        title: message,
        icon: icon,
        customClass: {confirmButton: 'btn btn.primary', popup: 'animated zoomIn'},
    })
}

export function confirm(id, name) {
    var url = 'http://127.0.0.1:8000/api/products/' + id;
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger'},
        buttonsstyling: false
    });
    
    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Yes, delete',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancel'
    }).then((result) => { 
        if (result.isConfirmed) {
            sendRequest('DELETE', {id:id}, url, 'product delete');
        } else {
            showAlert ('Operation cancel','info');
        }
    })
}

export function sendRequest (method, parameters, url) {
    axios({method:method, url:url, data:parameters})
        .then(function (response) {
            showAlert(response.data.message, 'success');
            window.setTimeout(function() {
                window.location.href='/';
            }, 2000);
        }).catch(function (error) {
            showAlert(error.response.data.message, 'error');
        });
}
