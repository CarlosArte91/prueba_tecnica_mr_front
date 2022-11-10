import axios from "axios";
import Swal from "sweetalert2";

const saveNewCar = async (params, userRegister) => {
    try {
        if (Object.keys(params).length < 8) {
            Swal.fire({
                text: "Debes completar todos los campos",
                icon: "warning"
            });
        }
        else {
            let nameButton = "";
            if (!userRegister) {
                for (const property in params) {
                    localStorage.setItem(property, params[property]);
                }
                nameButton = `${localStorage.brand}, ${localStorage.model}, ${localStorage.year}, ${localStorage.cylinder}, ${localStorage.fuel}`;
            }
            else {
                const { data } = await axios.post("http://localhost:3000/api/carsaves", params);
                nameButton = `${data.brand}, ${data.model}, ${data.year}, ${data.cylinder}, ${data.fuel}`;                
            }
            await Swal.fire({
                text: "Su vehiculo se ha guardado exitosamente",
                icon: "success"
            });

            return nameButton;
        }        
    } catch (error) {
        console.log(error);
    }
};

export default saveNewCar;