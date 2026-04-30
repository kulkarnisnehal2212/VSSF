import { FaHome, FaUtensils, FaBook, FaUserGraduate, FaHandshake, FaHeart } from "react-icons/fa";

import s1 from "../../assets/services/accomodation.png";
import s2 from "../../assets/services/food.png";
import s3 from "../../assets/services/study.png";
import s4 from "../../assets/services/personality.png";
import s5 from "../../assets/services/earn.png";
import s6 from "../../assets/services/values.png";

export default function Services() {
    const services = [
        {
            icon: <FaHome />,
            title: "Accommodation",
            desc: "Safe, clean and affordable hostel facilities.",
            img: s1,
        },
        {
            icon: <FaUtensils />,
            title: "Food Facilities",
            desc: "Nutritious and hygienic meals for students.",
            img: s2,
        },
        {
            icon: <FaBook />,
            title: "Study Environment",
            desc: "Peaceful atmosphere with dedicated study spaces.",
            img: s3,
        },
        {
            icon: <FaUserGraduate />,
            title: "Personality Development",
            desc: "Programs to build confidence and leadership skills.",
            img: s4,
        },
        {
            icon: <FaHandshake />,
            title: "Earn & Learn",
            desc: "Opportunities to support their own expenses.",
            img: s5,
        },
        {
            icon: <FaHeart />,
            title: "Sanskar & Values",
            desc: "Building discipline and a sense of responsibility.",
            img: s6,
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-[1200px] mx-auto">

                {/* TITLE */}
                <div className="text-center mb-14">
                    <p className="secondary-text text-xs tracking-widest uppercase mb-2">
                        What We Provide
                    </p>

                    <h2 className="heading-font text-2xl md:text-3xl font-semibold">
                        More Than Just a Hostel
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group"
                        >

                            {/* IMAGE */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-5">

                                {/* ICON + TITLE (INLINE PERFECT ALIGNMENT) */}
                                <div className="flex items-center gap-2 mb-2">

                                    <span className="text-[var(--color-primary)] text-sm flex-shrink-0">
                                        {item.icon}
                                    </span>

                                    <h3 className="heading-font text-base font-semibold text-gray-800 leading-none">
                                        {item.title}
                                    </h3>

                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}