<template>
  <div class="row d-flex justify-content-center">
    <div class="col-lg-10">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price $</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="content">
            <tr v-for="product, i in products" :key="product.id">
              <td>{{ (++i) }}</td>
              <td>{{ (product.name) }}</td>
              <td>{{ (product.description) }}</td>
              <td>{{ (product.price) }}</td>
              <td class="d-flex gap-2">
                <RouterLink :to="{path: '/edit/' + product.id}" title="Edit">
                  <i class="fa-solid fa-edit text-warning"></i>
                </RouterLink>
                <button @click="deleteAlert(product.id, product.name)"
                  class="border-0 bg-transparent" title="Delete">
                  <i class="fa-solid fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { confirm } from '../functions'

  export default {
    data() {
      return {
        products: null
      }
    },
    mounted() {
      this.index();
    },
    methods: {
      index() {
        axios.get('http://127.0.0.1:8000/api/products/')
          .then(
            response => (
              this.products = response.data.products
            )
          )
      },
      deleteAlert(id, name) {
        confirm(id, name);
      }
    },
  }
</script>
