import { useState } from "react";
import { FaPlay, FaTimes, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { id: "XWYJYe7x3UQ", title: "Student Experience", name: "Rahul Sharma",  tag: "2nd Year, Engineering" },
    { id: "2K5ghfrbu6E", title: "Student Journey",     name: "Priya Patel",   tag: "3rd Year, Commerce"  },
    { id: "OerOXtVU-qc", title: "Student Growth",      name: "Amit Verma",   tag: "1st Year, Science"   },
    { id: "KgqsRRdiMg0", title: "Learning Experience", name: "Sneha Joshi",  tag: "Final Year, Arts"    },
    { id: "mpKyzWNeeZY", title: "Campus Life",          name: "Rohan Desai",  tag: "2nd Year, Medical"   },
    { id: "x22IutPVBkg", title: "Success Story",        name: "Kavya Nair",   tag: "Alumni, 2023"        },
    { id: "2K5ghfrbu6E", title: "Student Journey",     name: "Priya Patel",   tag: "3rd Year, Commerce"  },
    { id: "KgqsRRdiMg0", title: "Learning Experience", name: "Sneha Joshi",  tag: "Final Year, Arts"    },
  ];

  return (
    <section className="w-full py-16 section-bg overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="secondary-text text-xs uppercase tracking-[0.25em] mb-2 font-medium">
            Real Voices
          </p>
          <h2 className="heading-font text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-3">
            Voices of Our Students
          </h2>
          <p className="text-gray-500 text-sm max-w-[500px] mx-auto leading-relaxed">
            Real stories from students whose lives are being transformed through education and support.
          </p>
        </div>

        {/* HORIZONTAL SCROLL ROW */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer flex-shrink-0 snap-start flex flex-col"
              style={{ width: "clamp(140px, 22vw, 200px)" }}
              onClick={() => setActiveVideo(video)}
            >
              {/* 9:16 CARD */}
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-200 group-hover:ring-[var(--color-secondary)] group-hover:shadow-xl transition-all duration-300">

                {/* THUMBNAIL */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover scale-[1.12] group-hover:scale-125 transition-transform duration-700"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* QUOTE ICON */}
                <div className="absolute top-3 left-3 opacity-50">
                  <FaQuoteLeft className="text-white text-xs" />
                </div>

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] transition-all duration-300 shadow-lg">
                    <FaPlay className="text-white text-sm ml-0.5" />
                  </div>
                </div>

                {/* BOTTOM INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-semibold leading-tight truncate">{video.name}</p>
                  <p className="text-gray-300 text-[10px] mt-0.5 truncate">{video.tag}</p>
                </div>

              </div>

              {/* TITLE BELOW */}
              <p className="mt-2 text-xs text-gray-500 group-hover:text-[var(--color-primary)] transition text-center truncate px-1 font-medium">
                {video.title}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* VIDEO MODAL — 9:16 portrait */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[340px] sm:max-w-[380px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition text-xl"
              onClick={() => setActiveVideo(null)}
            >
              <FaTimes />
            </button>

            {/* LABEL */}
            <div className="mb-3 px-1">
              <p className="text-white font-semibold text-sm">{activeVideo.name}</p>
              <p className="text-gray-300 text-xs">{activeVideo.tag}</p>
            </div>

            {/* 9:16 IFRAME */}
            <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
