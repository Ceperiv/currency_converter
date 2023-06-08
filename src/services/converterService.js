import axios from "axios";
import {urls} from "../constants/urls";


const converterService = {
    getByValcode:(valcode)=>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const date = `${year}${month}${day}`;
        return axios.get(urls(valcode.toString(), date))
    }
};

export {converterService}
