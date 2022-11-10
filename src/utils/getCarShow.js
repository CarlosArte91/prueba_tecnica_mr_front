import axios from "axios";

const getCarShow = async (userRegister) => {
    try {
        let result = [];
        if (!userRegister) {
            if (Object.keys(localStorage).length) result = [localStorage];
        }
        else {
            const { data } = await axios.get("http://localhost:3000/api/carsaves");
            result = data;
        }
        return result;
    } catch (error) {
        console.log(error);
    }
};

export default getCarShow;