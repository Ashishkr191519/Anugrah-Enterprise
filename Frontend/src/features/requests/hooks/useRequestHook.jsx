import { useContext } from "react";
import { ServiceStore } from "../../services/state/ServiceContext";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import { createRequest } from "../api/requestApi";
import {toast} from 'react-toastify'

export const useRequestHook = () => {
  const { services } = useContext(ServiceStore);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRequestSubmit = async(data) => {
    const requestData = {
      ...data,
      service: serviceId,
    };
    const res = await createRequest(requestData)
    console.log(res)

    toast.success("Request sent")
    navigate("/home")

    
  };

  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("service");

  const selectedService = services.find((service) => service._id === serviceId);

  return {
    register,
    handleSubmit,
    errors,
    onRequestSubmit,
    selectedService,
  };
};
