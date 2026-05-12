import { useEffect } from "react";
import { FaTimes, FaDownload, FaFilePdf } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";

const PdfModal = ({ isOpen, onClose, pdfUrl, title }) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Derive a readable name from the URL
  const fileName = pdfUrl
    ? decodeURIComponent(pdfUrl.split("/").pop().replace(/[-_]/g, " ").replace(".pdf", ""))
    : "Document";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-sm flex-shrink-0">
            <FaFilePdf size={13} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Document Preview</p>
            <h3 className="text-sm font-bold text-gray-800 truncate capitalize">{title || fileName}</h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={pdfUrl}
              download
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/8 text-gray-500 hover:text-[var(--color-secondary)] text-xs font-semibold transition-all duration-200"
              title="Download"
            >
              <FaDownload size={11} /> Download
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/8 text-gray-500 hover:text-[var(--color-primary)] text-xs font-semibold transition-all duration-200"
              title="Open in new tab"
            >
              <FiMaximize2 size={11} /> Open
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-all duration-200"
              aria-label="Close"
            >
              <FaTimes size={13} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-gray-100 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1`}
            title={title || fileName}
            className="w-full h-full border-0"
          />
        </div>

      </div>
    </div>
  );
};

export default PdfModal;
