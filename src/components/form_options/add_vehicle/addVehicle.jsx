import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeRenderOption, changeTextButton, saveCheckedInputs } from "../../../store/actions";
import getAllVehicles from "../../../utils/getAllVehicles";
import saveNewCar from "../../../utils/saveNewCar";
import updateChecked from "../../../utils/updateChecked";

import styleAdd from "./addVehicle.module.css";

function AddVehicle () {
    const userRegister = useSelector(state => state.userRegister);    
    const dispatch = useDispatch();
    const [params, setParams] = useState({});
    const [vehicles, setVehicles] = useState({});    

    useEffect(() => {
        const getVehicles = async () => {
            const result = await getAllVehicles(vehicles, params);
            result && setVehicles(result);           
        };
        getVehicles();
    }, [params]);

    const handleSelect = async (event) => {
        setParams({
            ...params,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result =  await saveNewCar(params, userRegister);
        const check = await updateChecked(userRegister);
        if (result) {
            dispatch(changeTextButton(userRegister ? "nameVehicleUser" : "nameVehicleNoUser", result));
            dispatch(changeRenderOption(1));
            dispatch(saveCheckedInputs(userRegister ? "checked" : "checkedNu", check));
        }
    }

    return (
        <div className={styleAdd.container}>
            <h3>Agrega tu vehículo para filtrar tu busqueda</h3>
            <form className={styleAdd.form} onSubmit={handleSubmit}>
                <select className={styleAdd.radiusLeft} name="vehicle" onChange={handleSelect}>
                    <option value="" disabled selected>Tipo</option>
                    {
                        Object.keys(vehicles).length && vehicles.vehicle.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <select name="carBody" onChange={handleSelect}>
                    <option value="" disabled selected>Carroceria</option>
                    {
                        Object.keys(vehicles).length && vehicles.carBody.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <select name="brand" onChange={handleSelect}>
                    <option value="" disabled selected>Marca</option>
                    {
                        Object.keys(vehicles).length && vehicles.brand.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <select className={styleAdd.radiusRight} name="model" onChange={handleSelect}>
                    <option value="" disabled selected>Modelo</option>
                    {
                        Object.keys(vehicles).length && vehicles.model.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <select className={styleAdd.radiusLeft} name="year" onChange={handleSelect}>
                    <option value="" disabled selected>Año</option>
                    {
                        Object.keys(vehicles).length && vehicles.year.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <select name="cylinder" onChange={handleSelect}>
                    <option value="" disabled selected>Cilindraje</option>
                    {
                        Object.keys(vehicles).length && vehicles.cylinder.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <select name="fuel" onChange={handleSelect}>
                    <option value="" disabled selected>Combustible</option>
                    {
                        Object.keys(vehicles).length && vehicles.fuel.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <select className={styleAdd.radiusRight} name="transmission" onChange={handleSelect}>
                    <option value="" disabled selected>Transmisión</option>
                    {
                        Object.keys(vehicles).length && vehicles.transmission.map(item => {
                            return (<option key={item} value={item}>{item}</option>);
                        })
                    }
                </select>

                <input className={styleAdd.add} type="submit" value="Agregar"/>
            </form>
        </div>
    );
};

export default AddVehicle;