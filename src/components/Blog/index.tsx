import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
const Blog = () => {
  
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-8"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {blogData.slice(0, 4).map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
