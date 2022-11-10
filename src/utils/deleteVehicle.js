import axios from "axios";
import Swal from "sweetalert2";
import getCarShow from "./getCarShow";

const deleteVehicle = async (id, setCarShow, userRegister) => {
    Swal.fire({
        text: "Estas seguro que deseas eliminar el vehiculo",
        icon: "warning",
        showDenyButton: true,
        denyButtonText: "Cancelar",
        denyButtonColor: "purple",
        confirmButtonText: "Eliminar"
    }).then(response => {
        if (response.isConfirmed) {
            return !userRegister ? localStorage.clear() : axios.delete(`http://localhost:3000/api/carsaves/delete/${id}`);
        }
    }).then(response => {
        return getCarShow(userRegister);
    }).then(response => {
        setCarShow(response);
    }).catch(error => {
        console.log(error);
    });
};

export default deleteVehicle;