import React from "react";
import Image from "next/image";
import { Calendar, Tag, User } from "lucide-react";

function BlogSection() {
  // Example data for blogs
  const blogs = [
    {
      id: 1,
      image: "/assets/blog/blog1.png",
      title: "How to Style Your Outfits",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero soluta et minus aspernatur commodi eos, fugiat incidunt!",
      date: "Dec 8, 2024",
      category: "Fashion",
      admin: "Admin",
    },
    {
      id: 2,
      image: "/assets/blog/blog2.png",
      title: "Top Fashion Trends of 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero soluta et minus aspernatur commodi eos, fugiat incidunt!",
      date: "Nov 20, 2024",
      category: "Trends",
      admin: "Admin",
    },
    {
      id: 3,
      image: "/assets/blog/blog3.png",
      title: "10 Tips for a Better Lifestyle",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero soluta et minus aspernatur commodi eos, fugiat incidunt!",
      date: "Oct 15, 2024",
      category: "Lifestyle",
      admin: "Admin",
    },
  ];

  const recentPosts = blogs.slice(0, 2); // Example recent posts

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <section className="lg:col-span-2">
          <h1 className="text-4xl font-semibold mb-8">Our Blog</h1>
          <div className="grid gap-8">
            {/* Blog Post */}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden"
              >
                <Image
                  src={blog.image}
                  width={800}
                  height={400}
                  alt={blog.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{blog.admin}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>{blog.category}</span>
                    </div>
                  </div>
                  <button className=" py-2 text-black underline hover:text-gray-900">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <aside className="space-y-8 ">
          {/* Search Bar */}
          <div className="mt-20">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Fashion", "Lifestyle", "Tips", "Sales"].map((category) => (
                <li
                  key={category}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-6">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex gap-4">
                  <Image
                    src={post.image}
                    width={100}
                    height={100}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{post.title}</h4>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogSection;
