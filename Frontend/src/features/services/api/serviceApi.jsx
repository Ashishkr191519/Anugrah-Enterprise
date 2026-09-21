import axiosInstance from "../../../config/axiosInstace"


export const getServices = async() => {
    try {
        let response = await axiosInstance.get("/service")
     return response.data.services;
    } catch (error) {
        console.log("Error is ",error)
    }
}