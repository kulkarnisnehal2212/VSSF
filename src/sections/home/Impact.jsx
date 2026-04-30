import { FaUserGraduate, FaBuilding, FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function Impact() {
  const stats = [
    { icon: <FaUserGraduate />, number: "8000+", label: "Students Supported" },
    { icon: <FaBuilding />, number: "9", label: "Hostels" },
    { icon: <FaCalendarAlt />, number: "60+", label: "Years of Legacy" },
    { icon: <FaUsers />, number: "1300+", label: "Students Currently" },
  ];

  return (
    <section className="relative z-20 -mt-20 md:-mt-24 px-4">
      
      <div className="max-w-[1100px] mx-auto">
        
        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 px-4 py-5 md:px-6 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              
              {/* ICON */}
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-base mb-2">
                {item.icon}
              </div>

              {/* NUMBER */}
              <h3 className="text-lg md:text-xl font-semibold heading-font text-gray-900">
                {item.number}
              </h3>

              {/* LABEL */}
              <p className="text-[11px] md:text-xs text-gray-600 body-font mt-0.5">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}