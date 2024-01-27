<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Create product</div>
                <div class="card-body">
                    <form @submit="save">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input type="text" id="name" class="form-control"
                                maxlength="50" placeholder="Name" required
                                v-model="name">
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" id="description" class="form-control"
                                maxlength="150" placeholder="Description" required
                                v-model="description">
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-dollar-sign"></i></span>
                            <input type="number" id="price" class="form-control"
                                placeholder="Price" step="0.01" required
                                v-model="price">
                        </div>

                        <div class="d-grid col-6 mx-auto">
                            <button class="btn btn-success">
                                <i class="fa-solid fa-floppy-disk"></i> Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { showAlert, sendRequest } from '../functions';

    export default {
        data() {
            return {
                name: '',
                description: '',
                url: 'http://127.0.0.1:8000/api/products'
            }
        },
        methods: {
            save() {
                event.preventDefault();

                if (this.name.trim() === '') {
                    showAlert('Enter name', 'warning', 'name');
                } else if(this.description.trim() === ''){
                    showAlert('Enter description', 'warning', 'description');
                } else if(this.price === ''){
                    showAlert('Enter price', 'warning', 'price');
                } else {
                    var parameters = {name: this.name.trim(), description: this.description.trim(), price: this.price}
                    sendRequest('POST', parameters, this.url);
                }
            }
        }
    }
</script>
