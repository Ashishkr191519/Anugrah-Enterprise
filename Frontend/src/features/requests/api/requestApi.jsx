import axiosInstance from "../../../config/axiosInstace"


export const createRequest = async(data) => {
    try {
        let response = await axiosInstance.post("/request",data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}