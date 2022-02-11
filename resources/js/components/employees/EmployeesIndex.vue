<template>
  <div>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in employees" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.employee_id}}</td>
                <td>{{item.status}}</td>
                <td @click="viewEmployee(item.id)">View</td>
                <td @click="deleteEmployee(item.id, item.name)">Delete</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import useEmployees from "../../composables/Employees.js";
import Swal from 'sweetalert2'

export default {
    setup(){
        const {employees, getEmployees, destroyEmployee} = useEmployees()
     
        onMounted(getEmployees)

        const viewEmployee = async (id) => {
            window.location = '/admin/employees/edit/' + id
        }

        const deleteEmployee = async (id, name) => {
            Swal.fire({
                title: 'Delete ' + name + '?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Delete!'
            }).then((result) => {
                if (result.isConfirmed) {
                    destroyEmployee(id)
                }
            })
        }

        return{
            employees,
            viewEmployee,
            deleteEmployee
        }
    }
}
</script>

<style>

</style>