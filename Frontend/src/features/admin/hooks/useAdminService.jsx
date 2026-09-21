// import { useState } from "react";
// import { toast } from "react-toastify";
// import axiosInstance from "../../../config/axiosInstace";

// const useAdminServices = () => {
//   const [services, setServices] = useState([]);

//   const [isLoadingServices, setIsLoadingServices] = useState(true);
//   const [isCreatingService, setIsCreatingService] = useState(false);
//   const [isUpdatingService, setIsUpdatingService] = useState(false);
//   const [isDeletingService, setIsDeletingService] = useState(false);

//   // Get all services
//   const fetchServices = async () => {
//     try {
//       setIsLoadingServices(true);

//       const response = await axiosInstance.get("/admin/services", {
//         withCredentials: true,
//       });

//       setServices(response.data.services || []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to fetch services",
//       );
//     } finally {
//       setIsLoadingServices(false);
//     }
//   };

//   // Create service
//   const createService = async (data) => {
//     try {
//       setIsCreatingService(true);

//       const response = await axiosInstance.post(
//         "/admin/services/create",
//         {
//           title: data.title.trim(),
//           description: data.description.trim(),
//           tag: data.tag.trim(),
//         },
//         {
//           withCredentials: true,
//         },
//       );

//       toast.success(
//         response.data.message || "Service created successfully",
//       );

//       await fetchServices();

//       return true;
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to create service",
//       );

//       return false;
//     } finally {
//       setIsCreatingService(false);
//     }
//   };

//   // Update service
//   const updateService = async (serviceId, data) => {
//     try {
//       setIsUpdatingService(true);

//       const response = await axiosInstance.patch(
//         `/admin/services/${serviceId}`,
//         {
//           title: data.title.trim(),
//           tag: data.tag.trim(),
//           description: data.description.trim(),
//         },
//         {
//           withCredentials: true,
//         },
//       );

//       toast.success(
//         response.data.message || "Service updated successfully",
//       );

//       setServices((prevServices) =>
//         prevServices.map((service) =>
//           service._id === serviceId
//             ? response.data.service
//             : service,
//         ),
//       );

//       return true;
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to update service",
//       );

//       return false;
//     } finally {
//       setIsUpdatingService(false);
//     }
//   };

//   // Delete service
//   const deleteService = async (serviceId) => {
//     if (!serviceId) return false;

//     const confirmed = window.confirm(
//       "Are you sure you want to delete this service?",
//     );

//     if (!confirmed) return false;

//     try {
//       setIsDeletingService(true);

//       const response = await axiosInstance.delete(
//         `/admin/services/${serviceId}`,
//         {
//           withCredentials: true,
//         },
//       );

//       toast.success(
//         response.data.message || "Service deleted successfully",
//       );

//       setServices((prevServices) =>
//         prevServices.filter((service) => service._id !== serviceId),
//       );

//       return true;
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to delete service",
//       );

//       return false;
//     } finally {
//       setIsDeletingService(false);
//     }
//   };

//   return {
//     services,
//     isLoadingServices,
//     isCreatingService,
//     isUpdatingService,
//     isDeletingService,
//     fetchServices,
//     createService,
//     updateService,
//     deleteService,
//   };
// };

// export default useAdminServices;