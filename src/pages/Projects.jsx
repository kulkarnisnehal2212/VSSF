import PageHero from "../components/PageHero";
import { FaArrowRight, FaHeart, FaHome, FaUtensils, FaLaptopCode, FaCheckCircle, FaDollarSign } from "react-icons/fa";

import heroImg      from "../assets/aboutvsspune/aboutvss.png";
import project1     from "../assets/aboutvsspune/vss-meeting.png";
import meals        from "../assets/services/food.png";
import hostel       from "../assets/heroimges/madhubhau_chaudhari-hostel.jpg";
import girlsHostel  from "../assets/heroimges/latikagaitonde-hostel.jpg";
import webDev       from "../assets/projects/websitedevlopment.png";

const projects = [
  {
    id: "01",
    tag: "Student Support",
    icon: <FaHeart />,
    color: "from-orange-400 to-orange-600",
    title: "Support a Student's Education",
    img: project1,
    imgRight: false,
    highlights: ["USD 840 total cost per student per year", "50% borne by the student", "Remaining raised through donations", "One-time contribution of USD 1,700 for full journey"],
    body: "VSS incurs a total cost of USD 840 per student per year. Of this, 50% is borne by the student. The remaining balance is raised through donations. It is highly desirable that a donor supports the entire academic journey of a student, typically spanning 3 to 4 years.",
    note: "*Students are encouraged to contribute through the Earn & Learn program.",
    cta: "Sponsor a Student",
  },
  {
    id: "02",
    tag: "Nutrition",
    icon: <FaUtensils />,
    color: "from-emerald-400 to-emerald-600",
    title: "Sponsoring Meals for Students",
    img: meals,
    imgRight: true,
    highlights: ["USD 2,800 sponsors meals for 1,200 students", "Two meals per day for one full week", "Ensures proper nutrition & well-being"],
    body: "A donation of USD 2,800 provides two meals per day for 1,200 students for one week, ensuring proper nutrition and well-being for every student at VSS.",
    note: null,
    cta: "Sponsor Meals",
  },
  {
    id: "03",
    tag: "Infrastructure",
    icon: <FaHome />,
    color: "from-blue-400 to-blue-600",
    title: "Kalyanrao Jadhav Boys Hostel, Ahilya Nagar",
    img: hostel,
    imgRight: false,
    highlights: ["Hostel nearing completion", "Donation packages available", "Donors can name facilities of their choice"],
    body: "The hostel is nearing completion and donation packages are available. Donors have the opportunity to name facilities of their choice, contributing meaningfully to the infrastructure and future of the students.",
    note: null,
    cta: "Donate Now",
  },
  {
    id: "04",
    tag: "New Hostel",
    icon: <FaHome />,
    color: "from-purple-400 to-purple-600",
    title: "Sponsoring a Room in New Girls Hostel",
    img: girlsHostel,
    imgRight: true,
    highlights: ["112 rooms, capacity of 336 students", "Opened at start of academic year 2024–25", "Located on Lajpat campus, Senapati Bapat Road", "Single room sponsorship: USD 12,500", "Donor name displayed on plaque outside room"],
    body: "At the beginning of academic year 2024–25, a new girls hostel with 112 rooms and a capacity of 336 students was opened on the Lajpat campus of VSS behind Shivaji Housing Society, off Senapati Bapat Road.",
    note: null,
    cta: "Sponsor a Room",
  },
  {
    id: "05",
    tag: "Digital Initiative",
    icon: <FaLaptopCode />,
    color: "from-rose-400 to-rose-600",
    title: "Website Development Program",
    img: webDev,
    imgRight: false,
    highlights: ["Real-world projects for NGOs & businesses", "Students earn stipends under Earn & Learn", "Skills in coding, UI/UX & project management", "Connect with us for your website project"],
    body: "The Website Development Program at VSS empowers students with real-world technical skills while delivering professional web solutions to NGOs, businesses and institutions. Students design, develop and maintain websites while gaining industry exposure and financial support.",
    note: "If you have a website project, connect with us to get it developed by our skilled students.",
    cta: "Connect With Us",
  },
];

export default function Projects() {
  return (
    <>
      <PageHero
        label="Our Projects"
        title="Initiatives That"
        highlight="Transform Lives"
        subtitle="Every project at VSS is a step toward a more equitable future — where education is accessible to all."
        image={heroImg}
        objectPosition="80% 15%"
      />

      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-6">

          {/* INTRO BANNER */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/5 via-white to-[var(--color-secondary)]/5 border border-gray-100 p-8 md:p-10 mb-8">
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-[var(--color-secondary)]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                  <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">How You Can Help</p>
                </div>
                <h2 className="heading-font text-xl md:text-2xl font-semibold text-[var(--color-primary)] mb-2">
                  Every Contribution Counts
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[520px]">
                  From sponsoring a student's full education to funding a single week of meals — each project below offers a meaningful way to make a direct, lasting impact on a student's life.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
                {[
                  { label: "Sponsor a student",    value: "from USD 420/yr"  },
                  { label: "Sponsor meals",         value: "USD 2,800/week"   },
                  { label: "Sponsor a room",        value: "USD 12,500"       },
                  { label: "Give opportunities",    value: "Projects for students" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm w-full md:w-[220px]">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-sm font-bold text-[var(--color-primary)]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-[var(--color-primary)]/15 transition-all duration-500"
            >
              {/* IMAGE SIDE */}
              <div className={`relative overflow-hidden ${project.imgRight ? "md:order-2" : "md:order-1"}`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[300px] md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* PROJECT NUMBER */}
                <div className="absolute top-5 left-5">
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-4 py-1.5 rounded-full shadow-lg`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{project.tag}</span>
                  </div>
                </div>

                {/* LARGE NUMBER WATERMARK */}
                <div className="absolute bottom-4 right-5 heading-font text-[80px] font-black text-white/10 leading-none select-none">
                  {project.id}
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className={`p-8 md:p-10 flex flex-col justify-center bg-white ${project.imgRight ? "md:order-1" : "md:order-2"}`}>

                {/* ICON + TAG */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-md`}>
                    {project.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{project.tag}</span>
                </div>

                {/* TITLE */}
                <h2 className="heading-font text-xl md:text-2xl font-semibold text-[var(--color-primary)] mb-3 leading-snug">
                  {project.title}
                </h2>

                {/* DIVIDER */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-4 h-[2px] bg-gray-200" />
                </div>

                {/* BODY */}
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{project.body}</p>

                {/* HIGHLIGHTS */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <FaCheckCircle className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" size={13} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* NOTE */}
                {project.note && (
                  <p className="text-xs text-gray-400 italic mb-5">{project.note}</p>
                )}

                {/* CTA */}
                <a
                  href="/support"
                  className={`self-start inline-flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`}
                >
                  {project.cta} <FaArrowRight size={11} />
                </a>

              </div>
            </div>
          ))}

          {/* END CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl mt-8">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Make a Difference</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Be a Part of the <span className="text-[var(--color-secondary)]">Change</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Your support — big or small — directly transforms a student's life. Choose a project and make your contribution count today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a
                  href="/support"
                  className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FaDollarSign size={13} /> Support a Project
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
