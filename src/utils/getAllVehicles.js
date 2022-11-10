import axios from "axios";
import getVehiclesByProp from "./getVehiclesByProp";

const getAllVehicles = async (vehicles, params) => {
    try {
        if (!Object.keys(vehicles).length) {
            const { data } = await axios.get("http://localhost:3000/api/carmodels");
            return data;
        }
        else return await getVehiclesByProp(params);
                
    } catch (error) {
        console.log(error);
    }            
};

export default getAllVehicles;