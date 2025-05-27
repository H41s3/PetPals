import React from 'react'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: 'b2.jpg',
      title: 'The Ultimate Guide to Pet Adoption: Tips for Finding Your Perfect Companion',
      content: "Are you considering adding a furry friend to your family? Adopting a pet can be one of the most rewarding experiences of your life, but it's essential to find the right match for your lifestyle and needs. In this guide, we'll walk you through the process of pet adoption and provide valuable tips for finding your perfect companion.",
      date: '19/01'
    },
    {
      id: 2,
      image: 'b4.jpg',
      title: 'Volunteer Spotlight: Making a Difference in the Lives of Stray Animals',
      content: "Behind every successful animal rescue is a team of dedicated volunteers. In this spotlight feature, we'll shine a light on the incredible individuals who work tirelessly to rescue and care for stray animals in our community. Their compassion and dedication are truly inspiring.",
      date: '19/04'
    },
    {
      id: 3,
      image: 'b5.jpg',
      title: 'Understanding Animal Behavior: Tips for Building a Strong Bond with Your Pet',
      content: "Ever wonder what your pet is trying to tell you? In this post, we'll explore the fascinating world of animal behavior and offer tips for building a strong bond with your furry friend. Whether you're a new pet owner or a seasoned pro, you'll learn how to communicate effectively with your pet and deepen your connection.",
      date: '18/03'
    },
    {
      id: 4,
      image: 'b6.jpg',
      title: 'Emergency Preparedness for Pet Owners: How to Keep Your Pets Safe in a Crisis',
      content: "Disasters can strike at any moment, but with proper planning, you can ensure the safety and well-being of your pets. In this guide, we'll provide essential tips for emergency preparedness, including creating a pet emergency kit, developing a disaster plan, and knowing what to do in case of an evacuation.",
      date: '27/01'
    },
    {
      id: 5,
      image: 'b7.jpg',
      title: "Celebrating Pet Pals: Share Your Pet's Story and Win!",
      content: "Do you have a furry friend who deserves a moment in the spotlight? We want to hear from you! In this special feature, we're inviting our readers to share their pet's story for a chance to be featured on our website and win exciting prizes. Whether it's a heartwarming adoption tale or a funny pet anecdote, we can't wait to celebrate your pet's unique personality.",
      date: '20/03'
    }
  ]

  return (
    <>
      <section id="page-header" className="blog-header">
        <h2>#PetMore</h2>
        <p>Give your FURiends a good life</p>
      </section>

      <section id="blog">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-box">
            <div className="blog-img">
              <img src={`/images/${post.image}`} alt={post.title} />
            </div>
            <div className="blog-details">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <button className="continue-reading-btn">CONTINUE READING</button>
            </div>
            <h1>{post.date}</h1>
          </div>
        ))}
      </section>

      <section id="pagination" className="section-p1">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn"><i className="fal fa-long-arrow-alt-right"></i></button>
      </section>
    </>
  )
}

export default Blog