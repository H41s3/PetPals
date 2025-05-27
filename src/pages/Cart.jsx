import React, { useState } from 'react'

function Cart() {
  const [donation, setDonation] = useState('');

  const handleDonationChange = (e) => {
    const value = e.target.value;
    // Remove any non-digit characters
    const cleanValue = value.replace(/[^0-9.]/g, '');
    // Ensure only two decimal places
    const formattedValue = cleanValue.includes('.') 
      ? cleanValue.split('.')[0] + '.' + cleanValue.split('.')[1].slice(0, 2)
      : cleanValue;
    setDonation(formattedValue);
  };

  const handleDonate = () => {
    if (donation) {
      alert(`Thank you for your generous donation of $${parseFloat(donation).toFixed(2)}!`);
      setDonation('');
    }
  };

  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#AdoptionList</h2>
        <p>Meet your future furry family members!</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Pet</th>
              <th>Status</th>
              <th>Adoption Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button className="remove-btn"><i className="far fa-times-circle"></i></button></td>
              <td><img src="/images/n6.png" alt="Pet" /></td>
              <td>British Shorthair Cat</td>
              <td>Available</td>
              <td>Waived</td>
            </tr>
            <tr>
              <td><button className="remove-btn"><i className="far fa-times-circle"></i></button></td>
              <td><img src="/images/f4.png" alt="Pet" /></td>
              <td>Dwarf Hamster</td>
              <td>Available</td>
              <td>Waived</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Support Our Shelter</h3>
          <p style={{ fontSize: '14px', color: '#465b52', marginBottom: '10px' }}>
            Your donation helps us care for more animals in need
          </p>
          <div>
            <div style={{ position: 'relative', width: '150px', display: 'inline-block' }}>
              <span style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666'
              }}>$</span>
              <input 
                type="text"
                value={donation}
                onChange={handleDonationChange}
                placeholder="0.00"
                style={{ 
                  paddingLeft: '25px',
                  width: '100%',
                  fontSize: '16px'
                }}
              />
            </div>
            <button className="normal" onClick={handleDonate}>Donate</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Adoption Summary</h3>
          <table>
            <thead>
              <tr>
                <th>Details</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pets Selected</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Adoption Fee</td>
                <td>Waived</td>
              </tr>
              <tr>
                <td><strong>Optional Donation</strong></td>
                <td><strong>${donation ? parseFloat(donation).toFixed(2) : '0.00'}</strong></td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Begin Adoption Process</button>
        </div>
      </section>
    </>
  )
}

export default Cart