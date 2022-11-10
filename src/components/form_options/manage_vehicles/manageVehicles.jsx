import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { changeRenderOption, changeTextButton, openClose, saveCheckedInputs } from "../../../store/actions";
import getCarShow from "../../../utils/getCarShow";
import deleteVehicle from "../../../utils/deleteVehicle";

import styleManage from "./manageVehicles.module.css";
import trashblue from "../../../assets/icons/trashblue.png";

function ManageVehicles () {
    const userRegister = useSelector(state => state.userRegister);
    const checked = useSelector(state => state.checked);
    const checkedNu = useSelector(state => state.checkedNu);
    const dispatch = useDispatch();
    const [carShow, setCarShow] = useState([]);
    const [checkValue, setCheckValue] = useState({});

    useEffect(() => {
        const getData = async () => {
            setCarShow(await getCarShow(userRegister));
        };
        getData();
        setCheckValue(userRegister ? checked : checkedNu);
    }, [checked, checkedNu]);

    const handleInputRadio = (event) => {        
        let asing;
        let copy = {};
        for (let i = 0; i <= carShow.length; i++) {
            if (i === parseInt(event.target.id)) asing = true;
            else asing = false;
            copy[i] = asing;
        }
        dispatch(changeTextButton(userRegister ? "nameVehicleUser" : "nameVehicleNoUser", event.target.value));
        dispatch(saveCheckedInputs(userRegister ? "checked" : "checkedNu", copy));
    };

    const closeForm = (event) => {
        event.preventDefault();
        dispatch(openClose(true));
    };

    const handleNewVehicle = (event) => {
        event.preventDefault();
        if (!userRegister) {
            if (carShow.length === 1) {
                Swal.fire({
                    text: "Solamente puedes guardar 1 vehiculo, registrate para ampliar tu garage",
                    icon: "error"
                });
            }
            else {
                dispatch(changeRenderOption(0));
            }
        }
        else {
            if (carShow.length === 3) {
                Swal.fire({
                    text: "Lo sentimos, no tienes más espacio en tu garage",
                    icon: "info"
                });
            }
            else {
                dispatch(changeRenderOption(0));
            }
        }
    };

    const handleTrashCar = async (event) => {
        await deleteVehicle(event.target.id, setCarShow, userRegister);
        dispatch(changeTextButton(userRegister ? "nameVehicleUser" : "nameVehicleNoUser", "Agregar vehiculo"));
        dispatch(saveCheckedInputs(userRegister ? "checked" : "checkedNu", {}));
    };

    return (
        <div className={styleManage.container}>
            <h3>Agrega tu vehículo para filtrar tu busqueda</h3>
            <form className={styleManage.form}>
                <div className={styleManage.item}>
                    <label htmlFor={carShow.length}>Buscar para cualquier vehiculo</label>
                    <input
                        type="radio"
                        name="mycars"
                        id={carShow.length}                        
                        checked={checkValue[carShow.length]}
                        value={"Cualquier vehiculo"}
                        onChange={handleInputRadio}
                    />
                </div>
                {
                    carShow.length ? carShow.map((car, index) => {
                        const resum = `${car.brand}, ${car.model}, ${car.year}, ${car.cylinder}, ${car.fuel}`;
                        return (
                            <div className={styleManage.subcontainer} key={car.model}>
                                <div className={styleManage.item}>
                                    <label htmlFor={index}>{resum}</label>
                                    <input
                                        type="radio"
                                        name="mycars"
                                        id={index}
                                        checked={checkValue[index]}
                                        value={resum}
                                        onChange={handleInputRadio}
                                    />
                                </div>
                                <span id={car._id} onClick={handleTrashCar}><img id={car._id} src={trashblue} alt="trash" /></span>
                            </div>
                        );
                    }) : <div></div>
                }
                <div className={styleManage.down}>
                    <button className={styleManage.new} onClick={handleNewVehicle}>Agregar nuevo vehiculo</button>
                    <input className={styleManage.add} onClick={closeForm} type="submit" value="Listo"/>
                </div>
            </form>

        </div>
    );
};

export default ManageVehicles;