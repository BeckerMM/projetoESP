import api from '../api/index';

const service = {
    value: 0,
    valueHumity: 0,
    get: async (value) => {
        const token = "974c1b2a-c37b-4258-8957-3005614f25ce"; // Substitua pelo seu token de API real
        const query = "last_value";
        const variable = "temperaturaweg";
        const endpoint = `/?token=${token}&query=${query}&variable=${variable}`;

        try {
            const response = await api.get(endpoint);
            service.value = parseInt(response.data.result[0].value);
        } catch (error) {
            console.log(error);
        }
    },

    getValue: () => {
        return service.value;
    },
    getValueHumity: () => {
        return service.valueHumity;
    },
    getHumity: async () => {
        const token = "974c1b2a-c37b-4258-8957-3005614f25ce"; // Substitua pelo seu token de API real
        const query = "last_value";
        const variable = "umidadeweg";
        const endpoint = `/?token=${token}&query=${query}&variable=${variable}`;

        try {
            const response = await api.get(endpoint);
            service.valueHumity = parseInt(response.data.result[0].value);
        } catch (error) {
            console.log(error);
        }
    }

};

export default service;
