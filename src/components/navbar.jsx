import { useDispatch, useSelector } from "react-redux";
import { openClose } from "../store/actions";

import User from "./user";

import logo from "../assets/images/logo.JPG";
import lupa from "../assets/icons/lupa.png"
import stylesNav from "./navbar.module.css";

function Navbar() {
    const userRegister = useSelector(state => state.userRegister);
    const nameVehicleUser = useSelector(state => state.nameVehicleUser);
    const nameVehicleNoUser = useSelector(state => state.nameVehicleNoUser);
    const openCloseForm = useSelector(state => state.openCloseForm);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openClose(openCloseForm));
    };
    
    return (
        <div className={stylesNav.container}>
            <div className={stylesNav.container2}>
                <img src={logo} alt="logo" />
                <button onClick={handleClick}>{userRegister ? nameVehicleUser : nameVehicleNoUser}</button>
                <div>
                    <input type="text" placeholder="Busca el producto para tu vehiculo"/>
                    <div className={stylesNav.lupa}><img src={lupa} alt="buscar" /></div>
                </div>            
            </div>
            <User/>
        </div>
    );
};

export default Navbar;