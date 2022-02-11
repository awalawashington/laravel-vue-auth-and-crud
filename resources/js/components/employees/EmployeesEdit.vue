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
import useEmployees  from "../../composables/Employees.js";

export default {
    props: {
        employee: {
            required: true,
            type: Object
        }
    },
    setup(props){
        const form = reactive({
            _token: '',
            name: props.employee.name,
            employee_id: props.employee.employee_id,
        })

        const { errors, updateEmployee } = useEmployees()

        onMounted(() => {
            form._token = document.querySelector('meta[name="csrf-token"]').content
        })

        const saveEmployee = async () => {
            await updateEmployee(props.employee.id, { ...form })
        }

        return {
            form,
            errors,
            saveEmployee
        }
    }
}

</script>
