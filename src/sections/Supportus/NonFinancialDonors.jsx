import { FaUserTie, FaHandshake, FaBriefcase, FaUsers, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    icon: <FaUserTie />,
    color: "border-[var(--color-secondary)] bg-[var(--color-secondary)]/5",
    iconColor: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
    title: "Provide Mentorship to our Students",
    points: [
      "Mentor students under Palya Palaka Yojana to help fulfil their professional aspirations.",
      "Provide guidance in their field of study, professional journey or conduct group courses (e.g. resume writing).",
    ],
  },
  {
    icon: <FaHandshake />,
    color: "border-[var(--color-primary)] bg-[var(--color-primary)]/5",
    iconColor: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    title: "Identify Earn & Learn Opportunities",
    points: [
      "Help promote self-reliance among students, enabling financially challenged students to support their education while gaining practical experience.",
    ],
  },
  {
    icon: <FaBriefcase />,
    color: "border-[var(--color-secondary)] bg-[var(--color-secondary)]/5",
    iconColor: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
    title: "Provide References for Internship & Placement",
    points: [
      "Support students by providing references for internships and job opportunities in India to help them grow professionally.",
    ],
  },
  {
    icon: <FaUsers />,
    color: "border-[var(--color-primary)] bg-[var(--color-primary)]/5",
    iconColor: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    title: "Join as a Samiti Mitra",
    points: [
      "Be a Samiti Mitra and help improve awareness of VSS Mission, accomplishments and plans in your community.",
    ],
  },
];

export default function NonFinancialDonors({ openModal }) {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="heading-font text-xl md:text-2xl font-semibold text-[var(--color-primary)]">
          Besides financial support, you can also help students as below
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <div key={i} className={`group rounded-2xl border-l-4 p-6 ${card.color} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl ${card.iconColor} text-lg`}>
                {card.icon}
              </div>
              <div>
                <h3 className="heading-font text-base font-semibold text-gray-800 mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[#1a2568] text-white px-8 py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(35,48,125,0.2)] hover:-translate-y-0.5 transition-all duration-200"
        >
          I Would Like to Help with Student Development <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
