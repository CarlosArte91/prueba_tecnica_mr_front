import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeRenderOption } from "../store/actions";
import AddVehicle from "./form_options/add_vehicle/addVehicle";
import ManageVehicles from "./form_options/manage_vehicles/manageVehicles";
import getCarShow from "../utils/getCarShow";

import styleForm from "./form.module.css";

function Form () {
    const userRegister = useSelector(state => state.userRegister);
    const renderOption = useSelector(state => state.renderOption);
    const dispatch = useDispatch();

    useEffect(() => {        
        const loadRender = async () => {
            dispatch(changeRenderOption((await getCarShow(userRegister)).length));
        };
        loadRender();
    }, []);

    return (
        <div className={styleForm.container}>
            { renderOption ? <ManageVehicles/> : <AddVehicle/> }            
        </div>
    );
};

export default Form;