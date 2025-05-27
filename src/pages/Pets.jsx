import React from 'react'

function Pets() {
  const pets = [
    { id: 1, img: 'n6.png', type: 'Cat', breed: 'British Shorthair', name: 'Miong' },
    { id: 2, img: 'f4.png', type: 'Hamster', breed: 'Dwarf', name: 'Owen' },
    { id: 3, img: 'f12.png', type: 'Dog', breed: 'Shih Tzu', name: 'Blake' },
    { id: 4, img: 'f9.png', type: 'Guinea Pig', breed: 'Guinea Pig', name: 'Lychee' },
    { id: 5, img: 'f3.png', type: 'Cat', breed: 'British Short Hair', name: 'Grey' },
    { id: 6, img: 'f2.png', type: 'Cat', breed: 'Tiger Cat', name: 'Taro' },
    { id: 7, img: 'f10.png', type: 'Cat', breed: 'Ragdoll', name: 'Rein' },
    { id: 8, img: 'f5.png', type: 'Cat', breed: 'Stray Cat', name: 'Zoro' },
    { id: 9, img: 'f6.png', type: 'Cat', breed: 'Orange Cat', name: 'Sanji' },
    { id: 10, img: 'f7.png', type: 'Dog', breed: 'Stray Dog', name: 'Dazai' },
    { id: 11, img: 'f8.png', type: 'Cat', breed: 'Persian Cat', name: 'Luna' },
    { id: 12, img: 'f11.png', type: 'Dog', breed: 'Golden Retriever', name: 'Max' }
  ]

  return (
    <>
      <section id="page-header">
        <h2>#PetAlert</h2>
        <p>Give a FURiend a forever home!</p>
      </section>

      <section id="product1" className="section-p1">
        <div className="pro-container">
          {pets.map(pet => (
            <div key={pet.id} className="pro">
              <img src={`/images/${pet.img}`} alt={pet.name} />
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

      <section id="pagination" className="section-p1">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn"><i className="fal fa-long-arrow-alt-right"></i></button>
      </section>
    </>
  )
}

export default Pets