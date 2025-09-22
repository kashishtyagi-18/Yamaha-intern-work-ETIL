import React from "react";

const blogs = [
  {
    id: 1,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque " ,
    date: "August 22, 2025",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ",
    date: "August 19, 2025",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ",
    date: "August 01, 2025",
    image: "/images/blog3.jpg",
  },
];

const NewsBlogSection = () => {
  return (
    <section className="py-20 bg-white" data-section="news-blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold mb-12 relative w-fit mx-auto
    after:content-[''] after:block after:w-0 after:h-[3px] after:bg-red-500
    after:transition-all after:duration-300 after:mx-auto
    hover:after:w-full"
        >
          News & Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm">on {blog.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsBlogSection;
