import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import React from "react";

const Alerts = ({ message, type, onClose }) => {
  const alertStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };
  const icons = {
    success: <CheckCircle className="inline-block mr-2" />,
    error: <XCircle className="inline-block mr-2" />,
    warning: <AlertTriangle className="inline-block mr-2" />,
    info: <Info className="inline-block mr-2" />,
  };
  return (
    <div
      className={`fixed top-4 right-4 text-white px-4 py-2 rounded-lg shadow-lg transition-all ${alertStyles[type]}`}>
      {icons[type]} {message}
      <button className="ml-4" onClick={onClose}>
        ✖
      </button>
    </div>
  );
};

export default Alerts;
