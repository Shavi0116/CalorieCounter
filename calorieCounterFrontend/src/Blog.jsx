import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Superfoods You Need in Your Diet",
      image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      description:
        "Discover the top 10 superfoods that can boost your health and energy levels. Learn how to incorporate them into your daily meals.",
      link: "https://www.health.harvard.edu/blog/10-superfoods-to-boost-a-healthy-diet-2018082914463",
    },
    {
      id: 2,
      title: "Easy and Healthy Meal Prep Ideas",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      description:
        "Save time and eat healthy with these meal prep ideas that are both delicious and easy to make.",
        link: "https://www.3ho.org/category/vegetarian-recipes/?gad_source=1&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOJCjVCjkPTzLM74hdYgULXfPpnkEVCA2AVFfGKmA13fFvyYgFdDz4UaAgj5EALw_wcB",
    },
    {
      id: 3,
      title: "The Truth About Keto Diet",
      image:"https://plus.unsplash.com/premium_photo-1664648005718-91b617643af5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V0byUyMGRpZXR8ZW58MHx8MHx8fDA%3D",
      description:
        "Uncover the pros and cons of the keto diet and find out if it's the right choice for you.",
        link: "https://www.health.harvard.edu/staying-healthy/should-you-try-the-keto-diet",
    },
    {
      id: 4,
      title: "Hydration Myths: What's True?",
      image: "https://plus.unsplash.com/premium_photo-1674605363409-c40fc36aa304?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SHlkcmF0aW9ufGVufDB8fDB8fHww",
      description:
        "How much water should you really drink? Debunk common hydration myths and stay properly hydrated.",
        link: "https://www.ncoa.org/article/the-truth-about-hydration-7-myths-and-facts/",
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-heading">Welcome to Our Blog</h1>
      <p className="blog-description">
        Stay informed with the latest tips, trends, and insights on health, nutrition, and wellness.
      </p>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-snippet">{post.description}</p>
            {post.link ? (
              <a href={post.link} className="blog-button" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            ) : (
              <button className="blog-button">Read More</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
