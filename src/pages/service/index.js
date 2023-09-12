import api from '../api/index';

const service = {
    value: 0,

    get: async () => {
        const token = "41c6d4e2-a010-4721-82b4-c3537d933afd"; // Substitua pelo seu token de API real
        const query = "last_value";
        const variable = "umidade";
        const endpoint = `/?token=${token}&query=${query}&variable=${variable}`;

        try {
            const response = await api.get(endpoint);
            service.value = parseInt(response.data.result[0].value);
            console.log(service.value);
        } catch (error) {
            console.log(error);
        }
    },

    getValue: () => {
        return service.value;
    }
};

export default service;
