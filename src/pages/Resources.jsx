import { useState } from "react";
import PageHero from "../components/PageHero";
import PdfModal from "../components/PdfModal";
import { resourcesData } from "../data/resourcesData";
import {
  FaNewspaper, FaFileInvoiceDollar, FaFolderOpen,
  FaFilePdf, FaDownload, FaExpand, FaCalendarAlt, FaArrowRight,
} from "react-icons/fa";
import heroImg from "../assets/heroimges/Aapte-hostel.jpg";

/* ─────────────────────────────────────────────────────────────
   DARPAN CARD  — live iframe preview + expand on click
───────────────────────────────────────────────────────────── */
const DarpanCard = ({ item, onExpand, featured = false }) => (
  <div
    className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col
      ${featured
        ? "border-[var(--color-secondary)]/60 shadow-xl ring-2 ring-[var(--color-secondary)]/20"
        : "border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-primary)]/20"
      }`}
  >
    {/* Live PDF preview */}
    <div className="relative h-56 bg-gray-50 overflow-hidden">
      {featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[var(--color-secondary)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Latest
        </div>
      )}
      <iframe
        src={`${item.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        title={item.title}
        className="w-full h-full border-0 pointer-events-none"
        loading="lazy"
      />
      {/* Click overlay */}
      <div
        className="absolute inset-0 cursor-pointer bg-transparent group-hover:bg-[var(--color-primary)]/10 transition-all duration-300 flex items-center justify-center"
        onClick={() => onExpand(item.file)}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-xl">
          <FaExpand size={12} className="text-[var(--color-primary)]" />
          <span className="text-xs font-bold text-[var(--color-primary)]">Full Preview</span>
        </div>
      </div>
    </div>

    {/* Card body */}
    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-start gap-3 mb-4 flex-1">
        <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-sm mt-0.5">
          <FaNewspaper size={14} className="text-white" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-0.5">Darpan</p>
          <h4 className="text-sm font-bold text-gray-800 leading-snug">{item.title}</h4>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onExpand(item.file)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[var(--color-primary)] hover:bg-[#1a2568] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <FaExpand size={10} /> Full Preview
        </button>
        <a
          href={item.file}
          download
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/8 text-gray-400 hover:text-[var(--color-secondary)] transition-all duration-200"
          title="Download"
        >
          <FaDownload size={12} />
        </a>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   PDF PREVIEW CARD  — live iframe preview + actions
───────────────────────────────────────────────────────────── */
const PdfPreviewCard = ({ item, onExpand }) => (
  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-primary)]/20 transition-all duration-300 flex flex-col">

    {/* Live PDF preview */}
    <div className="relative h-56 bg-gray-50 overflow-hidden">
      <iframe
        src={`${item.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        title={item.title}
        className="w-full h-full border-0 pointer-events-none"
        loading="lazy"
      />
      {/* Click overlay — captures click to open modal */}
      <div
        className="absolute inset-0 cursor-pointer bg-transparent group-hover:bg-[var(--color-primary)]/10 transition-all duration-300 flex items-center justify-center"
        onClick={() => onExpand(item.file)}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-xl">
          <FaExpand size={12} className="text-[var(--color-primary)]" />
          <span className="text-xs font-bold text-[var(--color-primary)]">Full Preview</span>
        </div>
      </div>
    </div>

    {/* Card body */}
    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-start gap-3 mb-4 flex-1">
        <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-sm mt-0.5">
          <FaFilePdf size={14} className="text-white" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-gray-800 leading-snug">{item.title}</h4>
          {item.description && (
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onExpand(item.file)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[var(--color-primary)] hover:bg-[#1a2568] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <FaExpand size={10} /> Full Preview
        </button>
        <a
          href={item.file}
          download
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/8 text-gray-400 hover:text-[var(--color-secondary)] transition-all duration-200"
          title="Download"
        >
          <FaDownload size={12} />
        </a>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
const Resources = () => {
  const [activeTab, setActiveTab] = useState("darpan");
  const [selectedPdf, setSelectedPdf] = useState(null);

  const tabs = [
    {
      id: "darpan",
      label: "Darpan",
      icon: <FaNewspaper size={13} />,
      count: resourcesData.darpan.reduce((acc, y) => acc + y.items.length, 0),
    },
    {
      id: "financial",
      label: "Financial Reports",
      icon: <FaFileInvoiceDollar size={13} />,
      count: resourcesData.financial.length,
    },
    {
      id: "others",
      label: "Other Documents",
      icon: <FaFolderOpen size={13} />,
      count: resourcesData.others.length,
    },
  ];

  return (
    <>
      <PageHero
        label="Resources"
        title="Resources &"
        highlight="Publications"
        subtitle="Explore our newsletters, financial reports, and official documents reflecting our journey and transparency."
        image={heroImg}
        objectPosition="center 35%"
      />

      <div className="bg-[#f8f9fc] min-h-screen">
        <div className="max-w-[1100px] mx-auto px-6 py-14">

          {/* ── SECTION HEADER ── */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Document Library</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">
                  Transparency &{" "}
                  <span className="text-[var(--color-secondary)]">Accountability</span>
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-4 h-[2px] bg-gray-200" />
                </div>
              </div>
              <p className="text-sm text-gray-500 max-w-[380px] leading-relaxed">
                Our complete archive of newsletters, financial statements, and official certifications.
              </p>
            </div>
          </div>

          {/* ── PILL TABS ── */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm mb-10 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[var(--color-primary)] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                {tab.label}
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* ── DARPAN TAB ── */}
          {activeTab === "darpan" && (
            <div className="animate-fadeIn space-y-12">

              {/* Latest edition */}
              <section>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1 h-5 rounded-full bg-[var(--color-secondary)]" />
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Latest Edition</h3>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  <DarpanCard
                    item={resourcesData.darpan[0].items[0]}
                    onExpand={setSelectedPdf}
                    featured
                  />
                </div>
              </section>

              {/* Archive by year */}
              {resourcesData.darpan.map((yearBlock) => (
                <section key={yearBlock.year}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-[var(--color-primary)] text-white rounded-xl text-sm font-bold shadow-sm">
                      <FaCalendarAlt size={11} />
                      {yearBlock.year}
                    </div>
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400 font-medium">{yearBlock.items.length} issues</span>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {yearBlock.items.map((item, i) => (
                      <DarpanCard key={i} item={item} onExpand={setSelectedPdf} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* ── FINANCIAL TAB ── */}
          {activeTab === "financial" && (
            <div className="animate-fadeIn space-y-8">

              {/* Info banner */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[var(--color-primary)] flex items-center justify-center shadow-sm">
                  <FaFileInvoiceDollar size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-primary)] mb-1">Financial Transparency</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    VSS Foundation is a 501(c)(3) registered non-profit (EIN: 33-1919808). All annual reports are
                    audited and publicly available for review.
                  </p>
                </div>
              </div>

              {/* PDF preview cards */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {resourcesData.financial.map((item, i) => (
                  <PdfPreviewCard key={i} item={item} onExpand={setSelectedPdf} />
                ))}
              </div>
            </div>
          )}

          {/* ── OTHERS TAB ── */}
          {activeTab === "others" && (
            <div className="animate-fadeIn">
              {resourcesData.others.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <FaFolderOpen size={28} className="text-gray-300" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-400 mb-1">No documents yet</h4>
                  <p className="text-sm text-gray-300">Check back soon.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {resourcesData.others.map((item, i) => (
                    <PdfPreviewCard key={i} item={item} onExpand={setSelectedPdf} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── BOTTOM CTA ── */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-12 text-white shadow-2xl mt-16">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Need More?</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Can't Find What You're{" "}
                  <span className="text-[var(--color-secondary)]">Looking For?</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Reach out for additional documents, reports, or any questions about our operations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact Us <FaArrowRight size={11} />
                </a>
                <a
                  href="https://samiti.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  Visit VSS Website
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FULL SCREEN PDF MODAL */}
      <PdfModal
        isOpen={!!selectedPdf}
        pdfUrl={selectedPdf}
        onClose={() => setSelectedPdf(null)}
      />
    </>
  );
};

export default Resources;
