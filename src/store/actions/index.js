import { CHANGE_USER_REGISTER, CHANGE_TEXT_BUTTON, SAVE_CHECKED, OPEN_CLOSE_FORM, CHANGE_RENDER_OPTION } from "../../utils/constants.js";

export const changeUser = (userRegister) => {
    return {
        type: CHANGE_USER_REGISTER,
        payload: !userRegister
    };
};

export const changeTextButton = (user, text) => {
    return {
        type: CHANGE_TEXT_BUTTON,
        payload: {
            user,
            text
        }
    };
};

export const saveCheckedInputs = (user, checked) => {
    return {
        type: SAVE_CHECKED,
        payload: {
            user,
            checked
        }
    };
};

export const openClose = (state) => {
    return {
        type: OPEN_CLOSE_FORM,
        payload: !state
    };
};

export const changeRenderOption = (num) => {
    return {
        type: CHANGE_RENDER_OPTION,
        payload: num
    };
};