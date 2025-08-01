
import BlogCard from "../Component/ReusableComps/BlogCard";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import { blogs } from "../Data/blogs";

const Blogs = () => {

  return (
    <div className=" px-4 py-12">
  
      <HeaderTitle
        titleColor="Blogs"
        titleStart="📝 My All"
        subTitle="  Here you'll find articles, tutorials, and thoughts on development,
        tools, and productivity."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
