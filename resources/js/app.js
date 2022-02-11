require('./bootstrap');

import { createApp } from 'vue';
import Toast, { POSITION } from "vue-toastification";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

let app=createApp({})

app.component('employee-index', require('./components/employees/EmployeesIndex').default);
app.component('employee-view', require('./components/employees/EmployeesView').default);
app.component('employee-create', require('./components/employees/EmployeesStore').default);
app.component('employee-edit', require('./components/employees/EmployeesEdit').default);

const options = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 3000
};
app.mount("#app");
app.use(Toast, options);
