import axios from "axios";
import { ref, useSSRContext } from "vue";
import { useToast } from "vue-toastification";

export default function useEmployees() {
    const employees = ref([])
    const errors = ref('')

    // Get toast interface
    const toast  = useToast()

    //async function to get employees
    const getEmployees = async () => {
        let response = await axios.get('/admin/employees')
        employees.value = response.data.data
    }

    //Create employee
    const storeEmployee = async (data) => {
        errors.value = ''
        try {
            const {data:response} = await axios.post('/admin/employees', data)
            await toast.success(response.data.name + ' Created!!!');
            await secondsDelay(3);
            window.location = '/admin/employees/index'
            await window.location   
        } catch (e) {
            if (e.response.status === 422) {
                console.log(e.response.data)
                for (const key in e.response.data.errors) {
                    await toast.warning(e.response.data.errors[key][0]);
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }else{
                await toast.error('Something wrong occurred. Status: '+ e.response.status);
            }
        }
    }

    //update employee
    const updateEmployee = async (id, data) => {
        errors.value = ''
        try {
            const {data:response} = await axios.put('/admin/employees/' + id, data)
            await toast.success(response.data.name + ' Updated!!!');
            await secondsDelay(3);
            window.location = '/admin/employees/index'
            await window.location
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    await toast.warning(e.response.data.errors[key][0]);
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }else{
                await toast.error('Something wrong occurred. Status: '+ e.response.status);
            }
        }
    }

    //delete employee
    const destroyEmployee = async (id) =>{
        try {
            const {data:response} = await axios.delete('/admin/employees/' + id)
            await toast.success(response.data.name + ' Deleted!!!');
            await secondsDelay(2);
            window.location = '/admin/employees/index'
            await window.location
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    await toast.warning(e.response.data.errors[key][0]);
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }else{
                await toast.error('Something wrong occurred. Status: '+ e.response.status);
            }
        }
    }

    const secondsDelay = (n) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, n * 1000);
        });
    }

    return{
        employees,
        errors,
        getEmployees,
        storeEmployee,
        updateEmployee,
        destroyEmployee
    }
}