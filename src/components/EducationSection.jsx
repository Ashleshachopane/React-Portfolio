import React from "react";
import { ArrowUp } from "lucide-react";

export const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech. in Electronics and Telecommunication Engineering",
      year: "2021 – 2025",
      college: "MIT Academy of Engineering, Pune",
      details: "CGPA: 8.74 / 10",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      year: "2019 – 2021",
      college: "Tip Top College, Nagpur",
      details: "Percentage: 92.67%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      year: "2019",
      college: "Lions English Medium High School, Wani",
      details: "Percentage: 85.40%",
    },
  ];

  return (
    <section
      id="education"
      className="relative z-10 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Education <span className="text-purple-500">Background</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{edu.year}</p>
              <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                {edu.college}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
