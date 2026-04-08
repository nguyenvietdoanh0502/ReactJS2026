import axiosInstance from "../utils/axiosInstance";
export const bookService = {
    getAllBooks: ()=>{
        return axiosInstance.get('/home');
    }
}