import axiosCustom from "./index";

export default {
    async getTest() {
        return await axiosCustom.get('/');
    }
}