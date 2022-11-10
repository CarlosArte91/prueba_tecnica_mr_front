import getCarShow from "./getCarShow";

const updateChecked = async (userRegister) => {
    const cars = await getCarShow(userRegister);
    let asing;
    let check = {};
    for (let i = 0; i < cars.length; i++) {
        if (i == cars.length - 1) asing = true;
        else asing = false;
        check[i] = asing;
    }
    return check;
};

export default updateChecked;