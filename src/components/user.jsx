import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../store/actions";

import styleUser from "./user.module.css";

function User () {
    const userRegister = useSelector(state => state.userRegister);
    const dispatch = useDispatch();

    const handleUser = () => {
        dispatch(changeUser(userRegister));
    };
    return (
        <div className={styleUser.container}>
            <p>Usuario registrado</p>
            
            <label htmlFor="yes">Si</label>
            <label htmlFor="no">No</label>

            <input type="radio" id="yes" value="si" name="register" checked={userRegister} onChange={handleUser}/>           
            <input type="radio" id="no" value="no" name="register" checked={!userRegister} onChange={handleUser}/>               
        </div>
    );
};

export default User;