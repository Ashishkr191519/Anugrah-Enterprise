import { useState } from "react";
import { createContext } from "react";

export const ServiceStore = createContext();

const ServiceProvider = ({ children }) => {
  const [services, setservices] = useState([]);
  return (
    <ServiceStore.Provider value={{ services, setservices }}>
      {children}
    </ServiceStore.Provider>
  );
};

export default ServiceProvider;
