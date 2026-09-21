import axiosInstance from "../../config/axiosInstace"


export const myRequestApi = async() => {
    try {
        const response = await axiosInstance.get("/my-request")
        return response.data
    } catch (error) {
        console.log("Error is my-requestApi calling",error)
        throw error;
    }

}