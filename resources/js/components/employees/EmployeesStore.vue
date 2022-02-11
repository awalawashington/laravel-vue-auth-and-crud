<template>
  <div>
    <form @submit.prevent="saveEmployee">
        <div class="mb-3">
            <label>Name</label>
            <input v-model="form.name" type="text" >
        </div>
        <div>
            <label >Employee ID</label>
            <input v-model="form.employee_id" type="text">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import useEmployees from "../../composables/Employees.js";

export default {
    setup() {
        const form = reactive({
            _token: '',
            name: '',
            employee_id: '',

        })

        const { errors, storeEmployee } = useEmployees()
        
        onMounted(() => {
            form._token = document.querySelector('meta[name="csrf-token"]').content
        })

        const saveEmployee = async () => {
            await storeEmployee({ ...form })
        }

        return {
            form,
            errors,
            saveEmployee
        }
    }
}
</script>

<style>

</style>