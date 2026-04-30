import React, { useState } from "react";

const DonateFormModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("financial");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      
      {/* Modal Box */}
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">
            {activeTab === "financial"
              ? "Financial Donor Form"
              : "Non-Financial Donor Form"}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("financial")}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === "financial"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            Financial Donors
          </button>

          <button
            onClick={() => setActiveTab("nonFinancial")}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === "nonFinancial"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            Non-Financial Donors
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {activeTab === "financial" ? (
            <FinancialForm />
          ) : (
            <NonFinancialForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default DonateFormModal;