import { FaFilePdf, FaEye } from "react-icons/fa";

const ResourceCard = ({ item, onPreview }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--color-primary)]/20 hover:-translate-y-1">

      {/* THUMBNAIL / FALLBACK */}
      <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[#2b3c9a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaFilePdf size={24} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">PDF Document</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
            <FaEye size={12} className="text-[var(--color-primary)]" />
            <span className="text-xs font-semibold text-[var(--color-primary)]">Preview</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3 leading-snug">
          {item.title}
        </h3>

        <button
          onClick={() => onPreview(item.file)}
          className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[#1a2568] text-white py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <FaEye size={11} /> View Document
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;