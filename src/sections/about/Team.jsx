import { FaEnvelope, FaPhone, FaLinkedinIn } from "react-icons/fa";
import president from "../../assets/team/president.png";
import secretary from "../../assets/team/secretary.png";
import treasurer from "../../assets/team/treasurer.png";

const team = [
  {
    name: "Anjali Anturkar",
    role: "President",
    img: president,
    email: "president.vssf@samiti.org",
    phone: "(248) 202-6613",
  },
  {
    name: "Archana Somnay",
    role: "Secretary",
    img: secretary,
    email: "secretary.vssf@samiti.org",
    phone: "(248) 505-8602",
  },
  {
    name: "Veena Joshi",
    role: "Treasurer",
    img: treasurer,
    email: "treasurer.vssf@samiti.org",
    phone: "(734) 612-8771",
  },
];

export default function Team() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="secondary-text text-xs uppercase tracking-[0.25em] mb-2 font-medium">
            Leadership
          </p>
          <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">
            Meet Our Office Bearers
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-[500px] mx-auto">
            The people guiding the vision and ensuring impactful execution of our mission.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[260px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* ROLE BADGE */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[var(--color-secondary)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* NAME */}
                <h3 className="heading-font text-base font-semibold text-gray-900 mb-4">
                  {member.name}
                </h3>

                {/* DIVIDER */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-3 h-[2px] bg-gray-200" />
                </div>

                {/* CONTACT INFO */}
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 group/link"
                  >
                    <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/8 group-hover/link:bg-[var(--color-primary)] transition-colors duration-200">
                      <FaEnvelope size={11} className="text-[var(--color-primary)] group-hover/link:text-white transition-colors duration-200" />
                    </span>
                    <span className="text-xs text-gray-500 group-hover/link:text-[var(--color-primary)] transition-colors duration-200 truncate">
                      {member.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${member.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-3 group/link"
                  >
                    <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-secondary)]/8 group-hover/link:bg-[var(--color-secondary)] transition-colors duration-200">
                      <FaPhone size={11} className="text-[var(--color-secondary)] group-hover/link:text-white transition-colors duration-200" />
                    </span>
                    <span className="text-xs text-gray-500 group-hover/link:text-[var(--color-secondary)] transition-colors duration-200">
                      {member.phone}
                    </span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
