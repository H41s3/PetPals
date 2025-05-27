import React from 'react'

function Home() {
  return (
    <>
      <section id="hero">
        <h4>Welcome to PetPals</h4>
        <h2>Find your pet friend today!</h2>
        <h1>Choose any pet you like to adopt</h1>
        <p>Animals deserves a loving home.</p>
        <button>Adopt Now</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="images/p1.png" alt="" />
          <h6>Save Pets</h6>
        </div>
        <div className="fe-box">
          <img src="images/p2.png" alt="" />
          <h6>Adopt</h6>
        </div>
        <div className="fe-box">
          <img src="images/p3.png" alt="" />
          <h6>Lost and found</h6>
        </div>
        <div className="fe-box">
          <img src="images/p4.png" alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Pets</h2>
        <p>Adorable Pets</p>
        <div className="pro-container">
          {[
            { id: 1, img: 'f1.png', type: 'Dog', breed: 'Corgi', name: 'Deku' },
            { id: 2, img: 'f2.png', type: 'Cat', breed: 'Tiger Cat', name: 'Taro' },
            { id: 3, img: 'f3.png', type: 'Cat', breed: 'British Short Hair', name: 'Grey' },
            { id: 4, img: 'f4.png', type: 'Hamster', breed: 'Dwarf', name: 'Owen' },
            { id: 5, img: 'f5.png', type: 'Cat', breed: 'Stray Cat', name: 'Zoro' },
            { id: 6, img: 'f6.png', type: 'Cat', breed: 'Orange Cat', name: 'Sanji' },
            { id: 7, img: 'f7.png', type: 'Dog', breed: 'Stray Dog', name: 'Dazai' },
            { id: 8, img: 'f8.png', type: 'Rabbit', breed: 'Rabbit', name: 'Cindy' }
          ].map(pet => (
            <div key={pet.id} className="pro">
              <img src={`images/${pet.img}`} alt={pet.name} />
              <div className="des">
                <span>{pet.type}</span>
                <h5>{pet.breed}</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i key={`${pet.id}-star-${i + 1}`} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>{pet.name}</h4>
              </div>
              <i className="fas fa-heart cart"></i>
            </div>
          ))}
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Pet Services</h4>
        <h2>Spread <span>Love</span> To All Pets</h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="product1" className="section-p1">
        <h2>New FURiends</h2>
        <p>Ready to bring joy and companionship into your life</p>
        <div className="pro-container">
          {[
            { id: 9, img: 'n1.png', type: 'Dog', breed: 'Pug', name: 'Pakkun' },
            { id: 10, img: 'n2.png', type: 'Dog', breed: 'Shih Tzu', name: 'Chip' },
            { id: 11, img: 'n3.png', type: 'Cat', breed: 'British Shorthair', name: 'Chubbs' },
            { id: 12, img: 'n4.png', type: 'Rabbit', breed: 'Rabbits', name: 'Romeo & Juliet' },
            { id: 13, img: 'n5.png', type: 'Hamster', breed: 'Teddy Bear Type', name: 'Picasso' },
            { id: 14, img: 'n6.png', type: 'Cat', breed: 'British Shorthair', name: 'Miong' },
            { id: 15, img: 'n7.png', type: 'Cat', breed: 'Ragdoll', name: 'Yuna' },
            { id: 16, img: 'n8.png', type: 'Cat', breed: 'Tiger Cat', name: 'Ced' }
          ].map(pet => (
            <div key={pet.id} className="pro">
              <img src={`images/${pet.img}`} alt={pet.name} />
              <div className="des">
                <span>{pet.type}</span>
                <h5>{pet.breed}</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i key={`${pet.id}-star-${i + 1}`} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>{pet.name}</h4>
              </div>
              <i className="fas fa-heart cart"></i>
            </div>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>special adoption event:</h4>
          <h2>adopt 1</h2>
          <span>spread twice the joy!</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>A heartfelt act of kindness</h4>
          <h2>Saving Pets</h2>
          <span>Be a Hero!</span>
          <button className="white">Learn More</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>GIVING SHELTER</h2>
          <h3>Providing comfort and care</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>Healing Hearts</h2>
          <h3>Pets are therapists</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>Unconditional Love</h2>
          <h3>Treat pets as part of your Furmily</h3>
        </div>
      </section>
    </>
  )
}

export default Home