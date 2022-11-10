import { CHANGE_USER_REGISTER, CHANGE_TEXT_BUTTON, SAVE_CHECKED, OPEN_CLOSE_FORM, CHANGE_RENDER_OPTION } from "../../utils/constants.js";

const initialState = {
    userRegister: false,
    nameVehicleUser: "Agregar vehiculo",
    nameVehicleNoUser: "Agregar vehiculo",
    checked: {},
    checkedNu: {},
    openCloseForm: false,
    renderOption: 0
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_USER_REGISTER:
            return {
                ...state,
                userRegister: action.payload
            }
        case CHANGE_TEXT_BUTTON:
            return {
                ...state,
                [action.payload.user]: action.payload.text
            }
        case SAVE_CHECKED:
            return {
                ...state,
                [action.payload.user]: action.payload.checked
            }
        case OPEN_CLOSE_FORM:
            return {
                ...state,
                openCloseForm: action.payload
            }
        case CHANGE_RENDER_OPTION:
            return {
                ...state,
                renderOption: action.payload
            }
        default:
            return state;
    }
};

export default reducer;