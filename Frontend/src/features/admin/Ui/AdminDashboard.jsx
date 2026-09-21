import {
  BadgeCheck,
  Check,
  CircleX,
  Hourglass,
  Inbox,
  LogOut,
  MapPin,
  Pencil,
  RotateCcw,
  Search,
  Settings,
  SquarePlus,
  TableProperties,
  Toolbox,
  Trash,
  UserRound,
  X,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosInstance from "../../../config/axiosInstace";

const AdminDashboard = () => {
  // =====================================================
  // STATES
  // =====================================================

  const [editServiceModal, setEditServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isUpdatingService, setIsUpdatingService] = useState(false);
  const [isDeletingService, setIsDeletingService] = useState(false);

  const [activeTab, setActiveTab] = useState("requests");

  const [requests, setRequests] = useState([]);
  const [services, setServices] = useState([]);

  const [isLoadingRequests, setIsLoadingRequests] = useState(true);
  const [isLoadingServices, setIsLoadingServices] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [requestModal, setRequestModal] = useState(false);
  const [createServiceModal, setCreateServiceModal] = useState(false);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const [isCreatingService, setIsCreatingService] = useState(false);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // =====================================================
  // REACT HOOK FORM
  // =====================================================

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      tag: "",
      description: "",
    },
  });

  // =====================================================
  // FETCH REQUESTS
  // =====================================================

  const fetchRequests = async () => {
    try {
      setIsLoadingRequests(true);

      const response = await axiosInstance.get("/admin/dashboard", {
        withCredentials: true,
      });

      setRequests(response.data.requests || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch requests");
    } finally {
      setIsLoadingRequests(false);
    }
  };

  // =====================================================
  // FETCH SERVICES
  // =====================================================

  const fetchServices = async () => {
    try {
      setIsLoadingServices(true);

      const response = await axiosInstance.get("/admin/services", {
        withCredentials: true,
      });

      setServices(response.data.services || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch services");
    } finally {
      setIsLoadingServices(false);
    }
  };

  // =====================================================
  // INITIAL DATA
  // =====================================================

  useEffect(() => {
    fetchRequests();
    fetchServices();
  }, []);

  // =====================================================
  // REQUEST COUNTS
  // =====================================================

  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "pending",
  ).length;

  const acceptedRequests = requests.filter(
    (request) => request.status === "accepted",
  ).length;

  const rejectedRequests = requests.filter(
    (request) => request.status === "rejected",
  ).length;

  // =====================================================
  // SEARCH + FILTER
  // =====================================================

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const searchValue = search.toLowerCase().trim();

      const searchMatch =
        !searchValue ||
        request._id?.toLowerCase().includes(searchValue) ||
        request.name?.toLowerCase().includes(searchValue) ||
        request.phone?.toLowerCase().includes(searchValue) ||
        request.email?.toLowerCase().includes(searchValue) ||
        request.service?.title?.toLowerCase().includes(searchValue);

      const statusMatch =
        statusFilter === "all" || request.status === statusFilter;

      return searchMatch && statusMatch;
    });
  }, [requests, search, statusFilter]);

  // =====================================================
  // OPEN REQUEST
  // =====================================================

  const openRequest = (request) => {
    setSelectedRequest(request);
    setRequestModal(true);
  };

  // =====================================================
  // CLOSE REQUEST
  // =====================================================

  const closeRequest = () => {
    setRequestModal(false);
    setSelectedRequest(null);
  };

  // =====================================================
  // CREATE SERVICE
  // =====================================================

  const onSubmitService = async (data) => {
    try {
      setIsCreatingService(true);

      const response = await axiosInstance.post(
        "/admin/services/create",
        {
          title: data.title.trim(),
          description: data.description.trim(),
          tag: data.tag.trim(),
        },
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message || "Service created successfully");

      reset();

      setCreateServiceModal(false);

      await fetchServices();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create service");
    } finally {
      setIsCreatingService(false);
    }
  };

  // =====================================================
  // UPDATE SERVICE
  // =====================================================

  const onUpdateService = async (data) => {
    if (!selectedService?._id) return;

    try {
      setIsUpdatingService(true);

      const response = await axiosInstance.patch(
        `/admin/services/${selectedService._id}`,
        {
          title: data.title.trim(),
          tag: data.tag.trim(),
          description: data.description.trim(),
        },
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message || "Service updated successfully");

      setServices((prevServices) =>
        prevServices.map((service) =>
          service._id === selectedService._id ? response.data.service : service,
        ),
      );

      reset();

      setSelectedService(null);
      setEditServiceModal(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update service");
    } finally {
      setIsUpdatingService(false);
    }
  };

  // =====================================================
  // DELETE SERVICE
  // =====================================================

  const onDeleteService = async (serviceId) => {
    if (!serviceId) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this service?",
    );

    if (!confirmed) return;

    try {
      setIsDeletingService(true);

      const response = await axiosInstance.delete(
        `/admin/services/${serviceId}`,
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message || "Service deleted successfully");

      setServices((prevServices) =>
        prevServices.filter((service) => service._id !== serviceId),
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete service");
    } finally {
      setIsDeletingService(false);
    }
  };

  // =====================================================
  // UPDATE REQUEST STATUS
  // =====================================================

  const updateRequestStatus = async (status) => {
    if (!selectedRequest?._id) return;

    try {
      setIsUpdatingStatus(true);

      const response = await axiosInstance.patch(
        `/admin/requests/${selectedRequest._id}/status`,
        {
          status,
        },
        {
          withCredentials: true,
        },
      );

      toast.success(response.data.message || `Request ${status} successfully`);

      setSelectedRequest((prev) => ({
        ...prev,
        status,
      }));

      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === selectedRequest._id
            ? {
                ...request,
                status,
              }
            : request,
        ),
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update request status",
      );
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // =====================================================
  // REFRESH
  // =====================================================

  const refreshDashboard = async () => {
    await Promise.all([fetchRequests(), fetchServices()]);

    toast.success("Dashboard refreshed");
  };

  // =====================================================
  // STATUS CLASS
  // =====================================================

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-[#e5e8eb] text-[#181c1e]";

      case "accepted":
        return "bg-[#b2dcfe] text-[#37627f]";

      case "rejected":
        return "bg-[#ffdad6] text-[#93000a]";

      default:
        return "bg-[#e5e8eb] text-[#181c1e]";
    }
  };

  // =====================================================
  // STATUS TEXT
  // =====================================================

  const getStatusText = (status) => {
    if (!status) return "Unknown";

    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  // =====================================================
  // DATE FORMAT
  // =====================================================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =====================================================
  // TIME FORMAT
  // =====================================================

  const formatTime = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = async () => {
    try {
      await axiosInstance.post(
        "/admin/logout",
        {},
        {
          withCredentials: true,
        },
      );

      window.location.href = "/admin";
    } catch (error) {
      console.log(error);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="min-h-screen bg-[#f7fafd] text-[#181c1e] font-sans">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <header className="sticky top-0 z-40 bg-white border-b border-[#d7dadd]">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 flex items-center justify-center border border-[#d7dadd] rounded overflow-hidden">
              <img
                src="/anugrah_enterprise_logo.png"
                alt="Anugrah Enterprise"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[22px] font-semibold uppercase tracking-tight">
                Anugrah Enterprise
              </span>

              <span className="text-[10px] px-2 py-0.5 border border-[#c4c7ca] rounded bg-[#f1f4f7] uppercase tracking-wider">
                Admin Dashboard
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 border-r border-[#c4c7ca] pr-4">
              <div className="text-right">
                <div className="font-semibold text-[16px]">Administrator</div>

                <div className="text-[10px] text-[#386380]">Admin</div>
              </div>

              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                <UserRound size={18} className="text-white" />
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#c4c7ca] rounded bg-white text-[12px] hover:bg-[#e5e8eb]"
            >
              <LogOut size={16} />

              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
        {/* ================================================= */}
        {/* SUB HEADER */}
        {/* ================================================= */}

        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white p-4 rounded border border-[#d7dadd]">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[22px] font-semibold uppercase tracking-tight">
                Admin Dashboard
              </h1>

              <span className="text-[10px] text-[#44474a] font-mono">
                INTERNAL
              </span>
            </div>

            <p className="text-[13px] text-[#44474a] mt-0.5">
              Manage customer service requests and service catalog.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 bg-[#f1f4f7] px-4 py-1.5 rounded border border-[#d7dadd]">
              <div className="w-2 h-2 rounded-full bg-[#386380] animate-pulse" />

              <span className="text-[12px]">System Operational</span>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* OVERVIEW CARDS */}
        {/* ================================================= */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            title="Total Requests"
            value={totalRequests}
            icon={<Inbox />}
            footerLeft="All submissions"
            footerRight="Current"
          />

          <DashboardCard
            title="Pending"
            value={pendingRequests}
            icon={<Hourglass />}
            footerLeft="Needs review"
            footerRight="Pending"
          />

          <DashboardCard
            title="Accepted"
            value={acceptedRequests}
            icon={<BadgeCheck />}
            iconColor="text-[#386380]"
            footerLeft="Approved requests"
            footerRight="Accepted"
          />

          <DashboardCard
            title="Rejected"
            value={rejectedRequests}
            icon={<CircleX />}
            iconColor="text-[#ba1a1a]"
            footerLeft="Rejected requests"
            footerRight="Rejected"
          />
        </section>

        {/* ================================================= */}
        {/* TABS */}
        {/* ================================================= */}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-1 bg-[#f1f4f7] p-1 rounded border border-[#d7dadd]">
            <button
              onClick={() => setActiveTab("requests")}
              className={`px-4 py-2 text-[14px] rounded flex items-center gap-2 ${
                activeTab === "requests"
                  ? "bg-white text-black shadow-sm"
                  : "text-[#44474a]"
              }`}
            >
              <TableProperties size={18} />
              Customer Requests
              <span className="text-[10px] px-1.5 py-0.5 bg-[#e5e8eb] rounded-full">
                {totalRequests}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 py-2 text-[14px] rounded flex items-center gap-2 ${
                activeTab === "services"
                  ? "bg-white text-black shadow-sm"
                  : "text-[#44474a]"
              }`}
            >
              <Toolbox size={18} />
              Services
              <span className="text-[10px] px-1.5 py-0.5 bg-[#e5e8eb] rounded-full">
                {services.length}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setActiveTab(activeTab === "requests" ? "services" : "requests")
              }
              className="inline-flex items-center gap-1 px-4 py-2 bg-black text-white text-[12px] rounded hover:bg-[#386380]"
            >
              <Settings size={18} />

              {activeTab === "requests" ? "Manage Services" : "View Requests"}
            </button>

            <button
              onClick={refreshDashboard}
              className="p-2 bg-white text-[#44474a] rounded border border-[#d7dadd] hover:bg-[#f1f4f7]"
              title="Refresh"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* REQUEST SECTION */}
        {/* ================================================= */}

        {activeTab === "requests" && (
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded border border-[#d7dadd]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-[18px] font-semibold">
                    Service Requests
                  </h2>

                  <p className="text-[13px] text-[#44474a]">
                    Monitor and manage customer service requests.
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full lg:w-96">
                  <div className="relative w-full">
                    <Search
                      size={18}
                      className="absolute left-3 top-2.5 text-[#74777a]"
                    />

                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-[#f1f4f7] text-[13px] rounded border border-[#d7dadd] focus:outline-none focus:ring-1 focus:ring-[#386380]"
                      placeholder="Search by ID, name, phone or service..."
                    />
                  </div>
                </div>
              </div>

              {/* FILTERS */}

              <div className="flex flex-wrap items-center gap-1">
                {["all", "pending", "accepted", "rejected"].map((status) => {
                  const count =
                    status === "all"
                      ? totalRequests
                      : requests.filter((request) => request.status === status)
                          .length;

                  return (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-3 py-1 text-[12px] rounded ${
                        statusFilter === status
                          ? "bg-black text-white"
                          : "bg-[#e5e8eb] text-black"
                      }`}
                    >
                      {status === "all"
                        ? `All (${count})`
                        : `${getStatusText(status)} (${count})`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* REQUEST TABLE */}

            <div className="bg-white rounded border border-[#d7dadd] overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f1f4f7] text-[#44474a] text-[10px] uppercase tracking-wider border-b border-[#d7dadd]">
                    {/* <th className="py-3 px-4">Request ID</th> */}
                    <th className="py-3 px-4">Customer Name</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Request Date</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#d7dadd]/40">
                  {isLoadingRequests ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="py-12 text-center text-[13px] text-[#74777a]"
                      >
                        Loading requests...
                      </td>
                    </tr>
                  ) : filteredRequests.length === 0 ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="py-12 text-center text-[13px] text-[#74777a]"
                      >
                        No requests found.
                      </td>
                    </tr>
                  ) : (
                    filteredRequests.map((request) => (
                      <tr
                        key={request._id}
                        className="hover:bg-[#f1f4f7]/60 transition-colors"
                      >
                        {/* <td className="py-3.5 px-4 text-[11px] text-[#386380] font-semibold font-mono">
                          {request._id}
                        </td> */}

                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-[14px]">
                            {request.name}
                          </div>

                          {request.email && (
                            <div className="text-[10px] text-[#44474a]">
                              {request.email}
                            </div>
                          )}
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="font-medium text-[13px]">
                            {request.service?.title || "Service unavailable"}
                          </span>

                          {request.service?.tag && (
                            <div className="text-[10px] text-[#386380] mt-0.5">
                              {request.service.tag}
                            </div>
                          )}
                        </td>

                        <td className="py-3.5 px-4 text-[12px] text-[#44474a]">
                          {formatDate(request.createdAt)}
                        </td>

                        <td className="py-3.5 px-4 text-[12px] text-[#44474a] font-mono">
                          {request.phone}
                        </td>

                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-semibold ${getStatusClass(
                              request.status,
                            )}`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                request.status === "rejected"
                                  ? "bg-[#ba1a1a]"
                                  : "bg-[#386380]"
                              }`}
                            />

                            {getStatusText(request.status)}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => openRequest(request)}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-[#ebeef1] text-black hover:bg-black hover:text-white text-[12px] rounded"
                          >
                            View Request
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              <div className="p-4 bg-[#f1f4f7] border-t border-[#d7dadd] text-[10px] text-[#44474a]">
                Showing{" "}
                <strong className="text-black">
                  {filteredRequests.length}
                </strong>{" "}
                of <strong className="text-black">{totalRequests}</strong>{" "}
                service requests
              </div>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* SERVICES SECTION */}
        {/* ================================================= */}

        {activeTab === "services" && (
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded border border-[#d7dadd] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-[18px] font-semibold">Service Catalog</h2>

                <p className="text-[13px] text-[#44474a]">
                  Manage services available to customers.
                </p>
              </div>

              <button
                onClick={() => {
                  reset();
                  setCreateServiceModal(true);
                }}
                className="inline-flex items-center gap-1 px-4 py-2 bg-black text-white text-[12px] rounded hover:bg-[#386380]"
              >
                <SquarePlus size={18} />
                Add New Service
              </button>
            </div>

            {/* SERVICE TABLE */}

            <div className="bg-white rounded border border-[#d7dadd] overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f1f4f7] text-[#44474a] text-[10px] uppercase tracking-wider border-b border-[#d7dadd]">
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Tag</th>
                    <th className="py-3 px-4">Description</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#d7dadd]/40">
                  {isLoadingServices ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="py-12 text-center text-[13px] text-[#74777a]"
                      >
                        Loading services...
                      </td>
                    </tr>
                  ) : services.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="py-12 text-center text-[13px] text-[#74777a]"
                      >
                        No services available.
                      </td>
                    </tr>
                  ) : (
                    services.map((service) => (
                      <tr
                        key={service._id}
                        className="hover:bg-[#f1f4f7]/60 transition-colors"
                      >
                        <td className="py-3.5 px-4">
                          <div className="text-[15px] font-semibold">
                            {service.title}
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="text-[10px] px-2 py-0.5 bg-[#ebeef1] rounded">
                            {service.tag}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-[13px] text-[#44474a] max-w-xl">
                          {service.description}
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <div className="inline-flex items-center gap-1">
                            {/* EDIT BUTTON */}

                            <button
                              type="button"
                              onClick={() => {
                                setSelectedService(service);

                                reset({
                                  title: service.title,
                                  tag: service.tag,
                                  description: service.description,
                                });

                                setEditServiceModal(true);
                              }}
                              disabled={isDeletingService}
                              className="p-1.5 text-[#555] hover:bg-[#f1f1f1] rounded transition disabled:opacity-50"
                              title="Edit service"
                            >
                              <Pencil size={18} />
                            </button>

                            {/* DELETE BUTTON */}

                            <button
                              type="button"
                              disabled={isDeletingService}
                              onClick={() => onDeleteService(service._id)}
                              className="p-1.5 text-[#ba1a1a] hover:bg-[#ffdad6] rounded transition disabled:opacity-50"
                              title="Delete service"
                            >
                              <Trash size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* ================================================= */}
      {/* REQUEST MODAL */}
      {/* ================================================= */}

      {requestModal && selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-3xl rounded shadow-xl overflow-hidden flex flex-col max-h-[92vh] border border-[#d7dadd]">
            {/* MODAL HEADER */}

            <div className="px-4 py-4 bg-[#f1f4f7] border-b border-[#d7dadd] flex items-center justify-between">
              <div>
                <h3 className="text-[20px] font-semibold">Request Details</h3>

                <span className="text-[10px] text-[#74777a] font-mono">
                  ID: {selectedRequest._id}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-semibold ${getStatusClass(
                    selectedRequest.status,
                  )}`}
                >
                  {getStatusText(selectedRequest.status)}
                </span>

                <button
                  onClick={closeRequest}
                  className="text-[#44474a] hover:text-black p-1 rounded"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* MODAL BODY */}

            <div className="p-5 overflow-y-auto space-y-4">
              {/* CUSTOMER */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#f1f4f7] p-4 rounded border border-[#d7dadd]">
                <InfoBlock label="Customer Name" value={selectedRequest.name} />

                <InfoBlock label="Phone" value={selectedRequest.phone} mono />

                <InfoBlock
                  label="Email"
                  value={selectedRequest.email || "-"}
                  mono
                />
              </div>

              {/* DATE */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f1f4f7] p-4 rounded border border-[#d7dadd]">
                  <span className="text-[10px] text-[#74777a] uppercase tracking-wider block">
                    Submitted Date
                  </span>

                  <span className="text-[14px] font-medium block mt-1">
                    {formatDate(selectedRequest.createdAt)}
                  </span>

                  <span className="text-[11px] text-[#44474a]">
                    {formatTime(selectedRequest.createdAt)}
                  </span>
                </div>

                <div className="bg-[#f1f4f7] p-4 rounded border border-[#d7dadd]">
                  <span className="text-[10px] text-[#74777a] uppercase tracking-wider block">
                    Current Status
                  </span>

                  <span
                    className={`inline-flex mt-1 px-2.5 py-1 rounded text-[10px] font-semibold ${getStatusClass(
                      selectedRequest.status,
                    )}`}
                  >
                    {getStatusText(selectedRequest.status)}
                  </span>
                </div>
              </div>

              {/* ADDRESS */}

              <div className="bg-[#f1f4f7] p-4 rounded border border-[#d7dadd]">
                <span className="text-[10px] text-[#74777a] uppercase tracking-wider block">
                  Address
                </span>

                <div className="flex items-start gap-2 mt-1">
                  <MapPin
                    size={18}
                    className="text-[#386380] mt-0.5 shrink-0"
                  />

                  <span className="text-[14px] font-medium">
                    {selectedRequest.address}
                  </span>
                </div>
              </div>

              {/* SERVICE */}

              <div className="bg-[#f1f4f7] p-4 rounded border border-[#d7dadd]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <span className="text-[10px] text-[#74777a] uppercase tracking-wider">
                    Selected Service
                  </span>

                  <span className="text-[11px] px-2 py-1 bg-[#b2dcfe] text-[#37627f] font-semibold rounded">
                    {selectedRequest.service?.tag || "Service"}
                  </span>
                </div>

                <h4 className="text-[16px] font-semibold">
                  {selectedRequest.service?.title || "Service unavailable"}
                </h4>

                {selectedRequest.service?.description && (
                  <p className="text-[12px] text-[#44474a] mt-2">
                    {selectedRequest.service.description}
                  </p>
                )}
              </div>

              {/* CUSTOMER DESCRIPTION */}

              <div className="bg-[#f1f4f7] p-4 rounded border border-[#d7dadd]">
                <span className="text-[10px] text-[#74777a] uppercase tracking-wider block mb-2">
                  Customer Description
                </span>

                <p className="text-[14px] leading-relaxed whitespace-pre-wrap">
                  {selectedRequest.description || "No description provided."}
                </p>
              </div>

              {/* MEDIA */}

              {selectedRequest.media?.length > 0 && (
                <div className="bg-[#f1f4f7] p-4 rounded border border-[#d7dadd]">
                  <span className="text-[10px] text-[#74777a] uppercase tracking-wider block mb-3">
                    Uploaded Media
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedRequest.media.map((file, index) => (
                      <a
                        key={index}
                        href={file.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 bg-white border border-[#d7dadd] rounded hover:bg-[#ebeef1]"
                      >
                        <div className="w-10 h-10 bg-[#ebeef1] rounded flex items-center justify-center">
                          {file.type === "video" ? (
                            <span className="text-[10px] font-semibold">
                              VIDEO
                            </span>
                          ) : (
                            <span className="text-[10px] font-semibold">
                              IMAGE
                            </span>
                          )}
                        </div>

                        <div className="min-w-0">
                          <div className="text-[12px] font-semibold">
                            Media {index + 1}
                          </div>

                          <div className="text-[10px] text-[#74777a]">
                            Open file
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* MODAL FOOTER */}

            <div className="p-4 bg-[#f1f4f7] border-t border-[#d7dadd] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={closeRequest}
                className="w-full sm:w-auto px-4 py-2 bg-white text-black border border-[#d7dadd] rounded text-[12px]"
              >
                Close
              </button>

              {selectedRequest.status === "pending" && (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    disabled={isUpdatingStatus}
                    onClick={() => updateRequestStatus("rejected")}
                    className="w-full sm:w-auto px-4 py-2 bg-[#ffdad6] text-[#93000a] rounded text-[12px] disabled:opacity-50"
                  >
                    <span className="inline-flex items-center gap-1">
                      <X size={14} />
                      Reject Request
                    </span>
                  </button>

                  <button
                    disabled={isUpdatingStatus}
                    onClick={() => updateRequestStatus("accepted")}
                    className="w-full sm:w-auto px-5 py-2 bg-black text-white rounded text-[12px] disabled:opacity-50"
                  >
                    <span className="inline-flex items-center gap-1">
                      <Check size={14} />
                      Accept Request
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================================================= */}
      {/* CREATE SERVICE MODAL */}
      {/* ================================================= */}

      {createServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded shadow-xl overflow-hidden border border-[#d7dadd]">
            {/* MODAL HEADER */}

            <div className="px-4 py-4 bg-[#f1f4f7] border-b border-[#d7dadd] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SquarePlus size={20} className="text-[#386380]" />

                <h3 className="text-[20px] font-semibold">Add New Service</h3>
              </div>

              <button
                onClick={() => {
                  reset();
                  setCreateServiceModal(false);
                }}
                className="text-[#44474a] hover:text-black p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit(onSubmitService)}
              className="p-5 space-y-4"
            >
              {/* TITLE */}

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#44474a] mb-1">
                  Service Title
                </label>

                <input
                  type="text"
                  placeholder="e.g. Rainwater Harvesting"
                  {...register("title", {
                    required: "Service title is required",
                    minLength: {
                      value: 3,
                      message: "Title must be at least 3 characters",
                    },
                  })}
                  className={`w-full px-3 py-2 bg-[#f1f4f7] text-[13px] rounded border ${
                    errors.title ? "border-red-500" : "border-[#d7dadd]"
                  } focus:outline-none focus:ring-1 focus:ring-[#386380]`}
                />

                {errors.title && (
                  <p className="text-[11px] text-red-600 mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* TAG */}

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#44474a] mb-1">
                  Service Tag
                </label>

                <input
                  type="text"
                  placeholder="e.g. Water Conservation"
                  {...register("tag", {
                    required: "Service tag is required",
                  })}
                  className={`w-full px-3 py-2 bg-[#f1f4f7] text-[13px] rounded border ${
                    errors.tag ? "border-red-500" : "border-[#d7dadd]"
                  } focus:outline-none focus:ring-1 focus:ring-[#386380]`}
                />

                {errors.tag && (
                  <p className="text-[11px] text-red-600 mt-1">
                    {errors.tag.message}
                  </p>
                )}
              </div>

              {/* DESCRIPTION */}

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#44474a] mb-1">
                  Service Description
                </label>

                <textarea
                  rows="5"
                  placeholder="Describe the service..."
                  {...register("description", {
                    required: "Service description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
                  className={`w-full px-3 py-2 bg-[#f1f4f7] text-[13px] rounded border ${
                    errors.description ? "border-red-500" : "border-[#d7dadd]"
                  } focus:outline-none focus:ring-1 focus:ring-[#386380]`}
                />

                {errors.description && (
                  <p className="text-[11px] text-red-600 mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* FORM BUTTONS */}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  disabled={isCreatingService}
                  onClick={() => {
                    reset();
                    setCreateServiceModal(false);
                  }}
                  className="px-4 py-2 bg-[#f1f4f7] text-black rounded text-[12px] disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isCreatingService}
                  className="px-5 py-2 bg-black text-white rounded text-[12px] disabled:opacity-50"
                >
                  {isCreatingService ? "Creating..." : "Create Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================================================= */}
      {/* EDIT SERVICE MODAL */}
      {/* ================================================= */}

      {editServiceModal && selectedService && (
        <div className="fixed inset-0 z-50 flex iems-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded shadow-xl overflow-hidden border border-[#d7dadd]">
            {/* MODAL HEADER */}

            <div className="px-4 py-4 bg-[#f1f4f7] border-b border-[#d7dadd] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil size={20} className="text-[#386380]" />

                <h3 className="text-[20px] font-semibold">Edit Service</h3>
              </div>

              <button
                type="button"
                disabled={isUpdatingService}
                onClick={() => {
                  reset();
                  setSelectedService(null);
                  setEditServiceModal(false);
                }}
                className="text-[#44474a] hover:text-black p-1 disabled:opacity-50"
              >
                <X size={18} />
              </button>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit(onUpdateService)}
              className="p-5 space-y-4"
            >
              {/* TITLE */}

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#44474a] mb-1">
                  Service Title
                </label>

                <input
                  type="text"
                  placeholder="e.g. Rainwater Harvesting"
                  {...register("title", {
                    required: "Service title is required",
                    minLength: {
                      value: 3,
                      message: "Title must be at least 3 characters",
                    },
                  })}
                  className={`w-full px-3 py-2 bg-[#f1f4f7] text-[13px] rounded border ${
                    errors.title ? "border-red-500" : "border-[#d7dadd]"
                  } focus:outline-none focus:ring-1 focus:ring-[#386380]`}
                />

                {errors.title && (
                  <p className="text-[11px] text-red-600 mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* TAG */}

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#44474a] mb-1">
                  Service Tag
                </label>

                <input
                  type="text"
                  placeholder="e.g. Water Conservation"
                  {...register("tag", {
                    required: "Service tag is required",
                  })}
                  className={`w-full px-3 py-2 bg-[#f1f4f7] text-[13px] rounded border ${
                    errors.tag ? "border-red-500" : "border-[#d7dadd]"
                  } focus:outline-none focus:ring-1 focus:ring-[#386380]`}
                />

                {errors.tag && (
                  <p className="text-[11px] text-red-600 mt-1">
                    {errors.tag.message}
                  </p>
                )}
              </div>

              {/* DESCRIPTION */}

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#44474a] mb-1">
                  Service Description
                </label>

                <textarea
                  rows="5"
                  placeholder="Describe the service..."
                  {...register("description", {
                    required: "Service description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
                  className={`w-full px-3 py-2 bg-[#f1f4f7] text-[13px] rounded border ${
                    errors.description ? "border-red-500" : "border-[#d7dadd]"
                  } focus:outline-none focus:ring-1 focus:ring-[#386380]`}
                />

                {errors.description && (
                  <p className="text-[11px] text-red-600 mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* FORM BUTTONS */}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  disabled={isUpdatingService}
                  onClick={() => {
                    reset();
                    setSelectedService(null);
                    setEditServiceModal(false);
                  }}
                  className="px-4 py-2 bg-[#f1f4f7] text-black rounded text-[12px] disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isUpdatingService}
                  className="px-5 py-2 bg-black text-white rounded text-[12px] disabled:opacity-50"
                >
                  {isUpdatingService ? "Updating..." : "Update Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// =====================================================
// INFO BLOCK
// =====================================================

const InfoBlock = ({ label, value, mono = false }) => {
  return (
    <div>
      <span className="text-[10px] text-[#74777a] uppercase tracking-wider block">
        {label}
      </span>

      <span
        className={`text-[14px] font-semibold block mt-1 ${
          mono ? "font-mono" : ""
        }`}
      >
        {value || "-"}
      </span>
    </div>
  );
};

// =====================================================
// DASHBOARD CARD
// =====================================================

const DashboardCard = ({
  title,
  value,
  icon,
  iconColor = "text-black",
  footerLeft,
  footerRight,
}) => {
  return (
    <div className="bg-white p-5 rounded border border-[#d7dadd] flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#44474a] block">
            {title}
          </span>

          <span className="text-[40px] leading-[48px] font-semibold mt-1 block">
            {value}
          </span>
        </div>

        <div className="w-10 h-10 rounded bg-[#ebeef1] flex items-center justify-center">
          <span className={iconColor}>{icon}</span>
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-[#f1f4f7] flex items-center justify-between">
        <span className="text-[10px] text-[#386380] font-medium">
          {footerLeft}
        </span>

        <span className="text-[10px] text-[#74777a]">{footerRight}</span>
      </div>
    </div>
  );
};

export default AdminDashboard;
