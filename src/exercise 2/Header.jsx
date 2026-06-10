const Header = () => {
  return <h1>My Blog</h1>;
};

const Post = () => {
  return (
    <div>
      <h2>React Components</h2>
      <p>This is a blog post about React Components.</p>
    </div>
  );
};

const Footer = () => {
  return <h3>© 2026 My Blog</h3>;
};

const Blog = () => {
  return (
    <div>
      <Header />
      <Post />
      <Footer />
    </div>
  );
};

export default Blog;