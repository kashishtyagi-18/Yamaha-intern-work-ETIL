import React from "react";

const News = () => {
  const newsItems = [
    ["Aug 2025", "One paper accepted at the IEEE CICT'25 !! Congratulations Uday San, Shruti San, Amit San, Rupesh San !!"],
    ["July 2025", "Prashant San Delivered the Project of Road Extraction of Mountainous Forest Areas using LiDAR to the RINTO Team (YMC JAPAN) !! Congratulations Prashant San!!"],
    ["June 2025", "Uday San Delivered the Ground Truth Correction Prject to the Forestry Team! Congratulations Uday San!!"],
    ["Apr 2025", "Paper Presented by Uday San, Amit San at the International Conference of Computer Vision & Robotics held at NIT, Goa"],
    ["Mar 2025", "2 papers accepted at International Conference of Computer Vision & Robotics' 25!! Congratulations Uday San, Amit San, Chetan San!!"],
    ["Feb 2025", "Prashant san Delivered the Splitting Problem (#A3) Project to the Forestry Team !! Congratulations Prashant San !!"],
    ["Dec 2024", "Amit San & Sruti San won Best paper award at the International Conference on Computer Vision & Image Processing !! Congratulations Amit San, Shruti San !!"],
    ["Dec 2024", "Paper Presented by Amit, Shruti & Rupesh San at the International Conference on Computer Vision & Image Processing held at IIITDM Kanchipuram, Chennai"],
    ["Dec 2024", "Amit San won Best paper award at the IEEE CICT'24 (AI/ML) !! Congratulations Amit San !!"],
    ["Dec 2024", "Paper Presented by Amit & Rupesh San at the IEEE CICT'24 at IIIT Allahabad"],
    ["Nov 2024", "One paper accepted at IEEE CICT'24 !! Congratulations Amit, Chetan, Rupesh San !!"],
    ["Oct 2024", "3 papers accepted in International Conference on Computer Vision & Image Processing !! Congratulations Amit, Shruti, Chetan, Rupesh San!"],
    ["Sept 2024", "Uday, Prashant & Yasmin Joined As Intern ! Welcome to all!"],
    ["July 2024", "Amit san Joined as Ass. Data Scientist !!"],
    ["May 2024", "Amit san Succesffuly Completed his JMT ! Congratulations Amit San!"],
    ["Apr 2024", "Shruti San joined team as Senior Researcher ! Welcome Shruti San!"],
    ["Jan 2024", "Point Cloud Completion using Diff paper accepted at WACVW'24 !! Congratulations Chetan San!"],
    ["Dec 2023", "Dr. Chetan Arora Joined as Consultant"],
    ["Oct 2023", "Amit San joined as JMT Fellow !! Welcome Amit San!"],
    ["Aug 2023", "Team establishment"],
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            Recent <span className="text-red-500">News</span>
          </h1>
          <div className="mt-2 w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Aligned grid layout */}
        <ul className="space-y-2 bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          {newsItems.map(([date, text], index) => {
            const lastSpace = date.lastIndexOf(" ");
            const month = lastSpace === -1 ? date : date.slice(0, lastSpace);
            const year = lastSpace === -1 ? "" : date.slice(lastSpace + 1);

            return (
              <li key={index}>
                <div
                  className="grid items-start gap-2 py-2"
                  style={{ gridTemplateColumns: "0.5rem 3.5rem 3rem 0.9rem 1fr" }}
                >
                  <div className="flex items-start justify-center">
                    <span className="mt-1 block w-2 h-2 rounded-full bg-red-500" />
                  </div>

                  <div className="text-right font-semibold text-gray-900 whitespace-nowrap">{month}</div>

                  <div className="text-left text-gray-900 whitespace-nowrap">{year}</div>

                  <div className="text-center text-gray-900">-</div>

                  <div className="text-gray-700 hover:text-red-600 transition-colors duration-200">{text}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default News;