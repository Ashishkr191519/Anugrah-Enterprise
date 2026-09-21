import { useEffect, useState } from "react";
import { myRequestApi } from "../api/myRequestApi";
import jsPDF from "jspdf";

export const useMyRequest = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const getMyRequest = async () => {
      try {
        const response = await myRequestApi();
        setRequests(response.requests);
        console.log(response);
      } catch (error) {
        console.log("error in my request hook", error);
      }
    };

    getMyRequest();
  }, []);

  return {
    requests,
  };
};

export const downloadReceipt = (request) => {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();

  // Outer border
  doc.setDrawColor(40, 40, 40);
  doc.setLineWidth(0.5);
  doc.rect(10, 10, pageWidth - 20, 277);

  // Header
  doc.setFillColor(20, 20, 20);
  doc.rect(10, 10, pageWidth - 20, 35, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("ANUGRAH ENTERPRISE", 20, 25);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Service Request Receipt", 20, 35);

  // Reset text color
  doc.setTextColor(30, 30, 30);

  // Request information heading
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Request Details", 20, 60);

  doc.setDrawColor(180, 180, 180);
  doc.line(20, 64, pageWidth - 20, 64);

  // Helper function
  const addField = (label, value, y) => {
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(90, 90, 90);
    doc.text(label, 20, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 30, 30);
    doc.text(String(value || "N/A"), 70, y);
  };

  addField("Request ID", request._id, 78);
  addField("Service", request.service?.title, 90);
  addField("Name", request.name, 102);
  addField("Phone", request.phone, 114);
  addField("Email", request.email, 126);
  addField("Address", request.address, 138);

  // Status
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(90, 90, 90);
  doc.text("Status", 20, 150);

  doc.setFillColor(230, 245, 235);
  doc.roundedRect(70, 142, 35, 11, 3, 3, "F");

  doc.setTextColor(20, 110, 55);
  doc.setFontSize(9);
  doc.text(request.status?.toUpperCase() || "PENDING", 75, 149);

  // Description section
  doc.setTextColor(30, 30, 30);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Description", 20, 175);

  doc.setDrawColor(180, 180, 180);
  doc.line(20, 179, pageWidth - 20, 179);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const description = doc.splitTextToSize(
    request.description || "No description provided.",
    pageWidth - 40,
  );

  doc.text(description, 20, 192);

  // Date
  const requestDate = new Date(request.createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  doc.setFont("helvetica", "bold");
  doc.setTextColor(90, 90, 90);
  doc.text("Request Date", 20, 225);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(30, 30, 30);
  doc.text(requestDate, 70, 225);

  // Footer
  doc.setDrawColor(180, 180, 180);
  doc.line(20, 245, pageWidth - 20, 245);

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("Thank you for choosing Anugrah Enterprise.", pageWidth / 2, 258, {
    align: "center",
  });

  doc.text("This is a computer-generated receipt.", pageWidth / 2, 266, {
    align: "center",
  });

  // Download
  doc.save(`Anugrah-Request-${request._id}.pdf`);
};
