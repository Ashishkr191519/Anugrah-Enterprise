import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { adminLogin } from "../state/adminAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const useAdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(adminLogin(data)).unwrap();
        navigate("/admin/dashboard")
      toast.success("Admin welcome");
    } catch (error) {
      toast.error("Unauthorized access");
    }
  };
  return {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useAdminLogin;
