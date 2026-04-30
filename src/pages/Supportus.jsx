import { useState } from "react";
import PageHero from "../components/PageHero";
import heroImg from "../assets/aboutvsspune/aboutvss.png";
import { FaArrowRight } from "react-icons/fa";
import DonorToggle from "../sections/Supportus/DonorToggle";
import FinancialDonors from "../sections/Supportus/FinancialDonors";
import NonFinancialDonors from "../sections/Supportus/NonFinancialDonors";
import DonateModal from "../sections/Supportus/DonateModal";

export default function SupportUs() {
  const [activeTab, setActiveTab] = useState("financial");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("financial");

  const openModal = (tab = "financial") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <>
      <PageHero
        label="Support Us"
        title="Make a"
        highlight="Difference"
        subtitle="Your helping hand can make a world of difference to the future of students at VSS, Pune."
        image={heroImg}
        objectPosition="80% 15%"
        actions={
          <>
            <button
              onClick={() => openModal("financial")}
              className="inline-flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Donate Now <FaArrowRight size={11} />
            </button>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
            </a>
          </>
        }
      />

      <section className="w-full bg-white py-14">
        <div className="max-w-[1100px] mx-auto px-6">

          {/* DESCRIPTION */}
          <div className="max-w-[780px] mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">How You Can Help</p>
            </div>
            <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-4">
              Every Contribution <span className="text-[var(--color-secondary)]">Counts</span>
            </h2>
            <div className="flex justify-center items-center gap-2 mb-5">
              <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
              <span className="w-4 h-[2px] bg-gray-200" />
              <span className="w-2 h-[2px] bg-gray-100" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              Every contribution, big or small, helps us provide lodging, education and mentorship to deserving students —
              enabling them to become confident, self-reliant and responsible members of society.
            </p>
            <p className="text-sm font-semibold text-[var(--color-primary)] mt-3">
              VSS Foundation is registered as a non-profit charity — 501(c)(3), EIN: 33-1919808.
            </p>
          </div>

          {/* TOGGLE */}
          <DonorToggle activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* CONTENT */}
          <div className="mt-10">
            {activeTab === "financial"
              ? <FinancialDonors openModal={() => openModal("financial")} />
              : <NonFinancialDonors openModal={() => openModal("nonfinancial")} />
            }
          </div>

        </div>
      </section>

      {/* MODAL */}
      <DonateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={modalTab}
      />
    </>
  );
}
