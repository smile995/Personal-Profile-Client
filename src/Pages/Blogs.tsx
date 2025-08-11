
import BlogCard from "../Component/ReusableComps/BlogCard";
import Container from "../Component/ReusableComps/Container";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import { blogs } from "../Data/blogs";

const Blogs = () => {

  return (
    <Container>
  
      <HeaderTitle
        // titleColor="Blogs"
        // titleStart="📝 My All"
        title="My All Blogs"
        subTitle="  Here you'll find articles, tutorials, and thoughts on development,
        tools, and productivity."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogs?.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
