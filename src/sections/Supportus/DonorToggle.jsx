export default function DonorToggle({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1">
        {[
          { key: "financial",  label: "Financial Donors"     },
          { key: "non",        label: "Non-Financial Donors" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-[var(--color-primary)] text-white shadow-md"
                : "text-gray-500 hover:text-[var(--color-primary)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
