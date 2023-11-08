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

export function sendRequest (method, parameters, url, message) {
    axios({method:method, url:url, data:parameters})
        .then(function(response) {
            var status = response.data[0]['status'];
            console.log(status);

            if (status === 'success') {
                showAlert(message, status);
                window.setTimeout(function() {
                    window.location.href='/';
                }, 1000);
            } else {
                var list = '';
                var errors = response.data[1]['errors'];
                Object.keys(errors).forEach(
                    key => list += errors[key][0] + '.'
                );
                
                showAlert(list, 'error');
            }
        }).catch(function(error) {
            showAlert('Error request', 'error');
        });
}
