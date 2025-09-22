import React from "react";
import { Link } from "react-router-dom";
import { Book, ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";

const PublicationsPreview = () => {
  // only show first 3 publications
  const previewPublications = publications.slice(0, 3);

  return (
    <section className="py-20 bg-white" data-section="publications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="
    text-3xl font-bold mb-12 relative w-fit mx-auto
    after:content-[''] after:block after:w-0 after:h-[3px] after:bg-red-500
    after:transition-all after:duration-300 after:mx-auto
    hover:after:w-full
  "
        >
          Recent Publications
        </h2>

        {/* Grid of cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewPublications.map((paper, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl 
                         hover:-translate-y-2 transform transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{paper.authors}</p>
                  <p className="text-blue-600 font-medium text-sm mb-3">
                    {paper.venue} ({paper.year})
                  </p>
                  <Link
                    to={`/paper/${paper.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read Paper
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More button */}
        <div className="text-center mt-12">
          <Link
            to="/publications"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            View More Publications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;
