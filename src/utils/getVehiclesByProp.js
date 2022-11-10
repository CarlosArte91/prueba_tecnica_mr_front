import axios from "axios";

const getVehiclesByProp = async (params) => {
    try {
        let apiUri = "http://localhost:3000/api/carmodels?";

        for (const property in params) {
            apiUri = `${apiUri}${property}=${params[property]}&`
        }

        const { data } = await axios.get(`${apiUri}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getVehiclesByProp;