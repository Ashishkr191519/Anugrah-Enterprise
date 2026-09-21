import { useContext, useEffect } from "react";
import { ServiceStore } from "../state/ServiceContext";
import { getServices } from "../api/serviceApi";

export const useServiceHook = () => {
  const { setservices } = useContext(ServiceStore);

  const fetchServices = async () => {
    const data = await getServices();
    setservices(data);
  };
  useEffect(() => {
    fetchServices();
  }, []);
};
