import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Info,
  LocateFixed,
  MoveRight,
  Plus,
  X,
} from "lucide-react";
import { useMyRequest, downloadReceipt } from "../hook/useMyRequestHook";
import { useNavigate } from "react-router";

const MyRequest = () => {
  const navigate = useNavigate();
  const { requests } = useMyRequest();

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState(null);

  const filteredRequests =
    activeFilter === "all"
      ? requests
      : requests.filter((request) => request.status === activeFilter);

  const pendingCount = requests.filter(
    (request) => request.status === "pending",
  ).length;

  const acceptedCount = requests.filter(
    (request) => request.status === "accepted",
  ).length;

  const rejectedCount = requests.filter(
    (request) => request.status === "rejected",
  ).length;

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "accepted":
        return {
          badge: "bg-[#e7f5ec] text-[#0d6e38]",
          dot: "bg-[#0d6e38]",
          label: "Accepted",
        };

      case "rejected":
        return {
          badge: "bg-[#fde8e8] text-[#9b1c1c]",
          dot: "bg-[#ba1a1a]",
          label: "Rejected",
        };

      default:
        return {
          badge: "bg-[#fef5e7] text-[#935b00]",
          dot: "bg-[#d97706]",
          label: "Pending",
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#f7fafd] text-[#181c1e]">
      {/* Main Content */}
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center justify-between border-b border-[#e0e3e6] pb-2 text-xs text-[#44474a]">
          <div className="flex items-center gap-2">
            <span className="cursor-pointer hover:text-black">Home</span>

            <span>/</span>

            <span>Customer Portal</span>

            <span>/</span>

            <span className="font-semibold text-black">My Requests</span>
          </div>

          <div className="hidden items-center gap-1.5 font-mono tracking-wider text-[#74777a] sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#386380]" />
            <span>SEC: HYD-OPS // VERIFIED CLIENT</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="flex flex-col justify-between gap-5 border-b border-[#e5e8eb] pb-8 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#181c1e] sm:text-4xl">
              My Requests
            </h1>

            <p className="mt-1.5 text-sm text-[#44474a] sm:text-base">
              View the service requests you have submitted.
            </p>
          </div>

          <button
            onClick={() => navigate("/home/services")}
            type="button"
            className="inline-flex items-center gap-2 rounded bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2d3133]"
          >
            <Plus size={18} />
            <span>Request a Service</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeFilter === "all"
                  ? "bg-black text-white"
                  : "bg-[#ebeef1] text-[#44474a] hover:text-black"
              }`}
            >
              All ({requests.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("pending")}
              className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeFilter === "pending"
                  ? "bg-black text-white"
                  : "bg-[#ebeef1] text-[#44474a] hover:text-black"
              }`}
            >
              Pending ({pendingCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("accepted")}
              className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeFilter === "accepted"
                  ? "bg-black text-white"
                  : "bg-[#ebeef1] text-[#44474a] hover:text-black"
              }`}
            >
              Accepted ({acceptedCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("rejected")}
              className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeFilter === "rejected"
                  ? "bg-black text-white"
                  : "bg-[#ebeef1] text-[#44474a] hover:text-black"
              }`}
            >
              Rejected ({rejectedCount})
            </button>
          </div>

          <p className="font-mono text-xs text-[#74777a]">
            Showing {filteredRequests.length} records • Realtime Sync
          </p>
        </div>

        {/* Request List */}
        {filteredRequests.length > 0 ? (
          <div className="space-y-4">
            {filteredRequests.map((request) => {
              const status = getStatusStyle(request.status);

              return (
                <article
                  key={request._id}
                  className="rounded border border-[#e0e3e6] bg-white p-5 transition-all hover:border-[#c4c7ca] hover:shadow-sm sm:p-6"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    {/* Left Side */}
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#ebeef1] text-[#386380]">
                        <ClipboardList size={22} />
                      </div>

                      <div className="max-w-2xl space-y-1.5">
                        {/* Title */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-lg font-semibold text-[#181c1e]">
                            {request.service?.title}
                          </h3>

                          {/* <span className="rounded bg-[#ebeef1] px-2 py-0.5 font-mono text-xs font-medium text-[#44474a]">
                            {request._id}
                          </span> */}
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-[#44474a]">
                          {request.description}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 pt-1 text-xs text-[#74777a]">
                          <span className="flex items-center gap-1">
                            <LocateFixed size={14} />

                            {request.address}
                          </span>

                          <span className="flex items-center gap-1 font-mono">
                            <CalendarDays size={14} />

                            {formatDate(request.createdAt)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#ebeef1] pt-2 md:flex-col md:items-end md:justify-start md:border-t-0 md:pt-0">
                      {/* Status */}
                      <span
                        className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-semibold ${status.badge}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
                        />

                        {status.label}
                      </span>

                      {/* Details */}
                      <button
                        type="button"
                        onClick={() => setSelectedRequest(request)}
                        className="group flex items-center gap-1 py-1 text-xs font-semibold text-black hover:text-[#386380]"
                      >
                        View Details
                        <MoveRight
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-4 rounded border border-dashed border-[#c4c7ca] bg-white px-6 py-16 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded bg-[#ebeef1] text-[#74777a]">
              <ClipboardList size={28} />
            </div>

            <h3 className="text-lg font-semibold text-[#181c1e]">
              No service requests yet.
            </h3>

            <p className="mx-auto mt-1 mb-6 max-w-md text-sm text-[#44474a]">
              Submit a service request and it will appear here. Our engineering
              team reviews incoming requests within 24 to 48 business hours.
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2d3133]"
            >
              <Plus size={16} />
              Request a Service
            </button>
          </div>
        )}

        {/* Trust Note */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded border border-[#e0e3e6] bg-[#f1f4f7] p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-xs text-[#44474a]">
            <CheckCircle2 size={20} className="shrink-0 text-[#386380]" />

            <span>
              All submissions are processed under CGWA (Central Ground Water
              Authority) compliance protocols.
            </span>
          </div>

          <button
            type="button"
            className="whitespace-nowrap text-xs font-semibold text-[#386380] hover:underline"
          >
            Need immediate engineering consultation?
          </button>
        </div>
      </main>

      {/* Details Modal */}
      {selectedRequest && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedRequest(null);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded border border-[#e0e3e6] bg-white p-6 shadow-xl sm:p-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#e0e3e6] pb-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  {/* <span className="rounded bg-[#ebeef1] px-2 py-0.5 font-mono text-xs font-medium text-[#44474a]">
                    {selectedRequest._id}
                  </span> */}

                  <span
                    className={`rounded px-2 py-0.5 text-xs font-semibold ${
                      getStatusStyle(selectedRequest.status).badge
                    }`}
                  >
                    {getStatusStyle(selectedRequest.status).label}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#181c1e]">
                  {selectedRequest.service?.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedRequest(null)}
                className="rounded p-1 text-[#74777a] transition-colors hover:bg-[#ebeef1] hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 py-5 text-sm">
              {/* Rejection Reason */}
              {selectedRequest.status === "rejected" &&
                selectedRequest.rejectionReason && (
                  <div className="rounded border border-[#f0b8b8] bg-[#fde8e8] p-3.5">
                    <div className="flex items-start gap-2 text-[#9b1c1c]">
                      <Info size={16} className="mt-0.5 shrink-0" />

                      <div>
                        <span className="mb-0.5 block text-xs font-bold">
                          Rejection Reason
                        </span>

                        <p className="text-xs leading-relaxed text-[#181c1e]">
                          {selectedRequest.rejectionReason}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              {/* Customer Meta */}
              <div className="grid grid-cols-1 gap-4 border-b border-[#e5e8eb] py-2 sm:grid-cols-2">
                <div>
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#74777a]">
                    Submitted By
                  </span>

                  <span className="font-medium text-[#181c1e]">
                    {selectedRequest.name}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#74777a]">
                    Submission Date
                  </span>

                  <span className="font-medium text-[#181c1e]">
                    {formatDate(selectedRequest.createdAt)}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#74777a]">
                    Phone
                  </span>

                  <span className="font-mono text-sm text-[#181c1e]">
                    {selectedRequest.phone}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#74777a]">
                    Email
                  </span>

                  <span className="font-mono text-sm text-[#181c1e]">
                    {selectedRequest.email}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div>
                <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#74777a]">
                  Service Site Location
                </span>

                <p className="rounded border border-[#e0e3e6] bg-[#f1f4f7] p-2.5 text-xs leading-relaxed text-[#181c1e]">
                  {selectedRequest.address}
                </p>
              </div>

              {/* Description */}
              <div>
                <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#74777a]">
                  Project Scope & Description
                </span>

                <p className="text-xs leading-relaxed text-[#181c1e] sm:text-sm">
                  {selectedRequest.description}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-[#e0e3e6] pt-4">
              <button
                type="button"
                onClick={() => setSelectedRequest(null)}
                className="rounded bg-[#ebeef1] px-4 py-2 text-xs font-semibold text-[#181c1e] transition-colors hover:bg-[#e0e3e6]"
              >
                Close
              </button>

              <button
                onClick={() => downloadReceipt(selectedRequest)}
                type="button"
                className="rounded bg-black px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2d3133]"
              >
                Download PDF Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRequest;
