import React from 'react';

function Home({ store }) {
  const goToPage = (page) => {
    store.dispatch({ type: 'page', data: page });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '0', margin: '0' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        {/* DIV 1 - Header Banner */}
        <div
          style={{
            width: '100%',
            height: '300px',
            backgroundColor: 'navy',
            color: 'white',
            padding: '40px 20px',
            textAlign: 'center',
            borderRadius: '0',
            margin: '0',
          }}
        >
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>
            Transform Your Home with Our Expert Services
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Experience top-notch home services tailored to your needs.<br />
            We are here to make your journey easier.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button
              onClick={() => goToPage('Signup')}
              style={{
                backgroundColor: 'white',
                color: 'navy',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
            >
              Get Started
            </button>

            <button
              onClick={() => goToPage('Signin')}
              style={{
                backgroundColor: 'white',
                color: 'navy',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
            >
              Welcome Back
            </button>
          </div>
        </div>

        {/* DIV 2 - Offer Banner */}
        <div
          style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#e0f7fa', // pale blue
            padding: '40px 20px',
            textAlign: 'center',
            borderRadius: '0',
            margin: '0',
          }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
            50% Off on All Carpenter Services!
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Don't miss this amazing offer! Get your carpenter services at half the price.
          </p>
          <button
            onClick={() => goToPage('Carpenter')}
            style={{
              backgroundColor: '#1976d2',
              color: 'white',
              padding: '12px 30px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1565c0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1976d2')}
          >
            Book Carpenter Service
          </button>
        </div>

        {/* DIV 3 - Service Blocks */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin: '0',
            padding: '20px 0',
            backgroundColor: '#f5f5f5',
          }}
        >
          {[ 
            { label: 'Plumbing', page: 'Plumbing' },
            { label: 'Cleaning', page: 'Cleaning' },
            { label: 'Carpenter', page: 'Carpenter' },
            { label: 'Appliance Repair', page: 'ApplianceRepair' },
            { label: 'Packers & Movers', page: 'PackersMovers' },
            { label: 'Pest Control', page: 'PestControl' },
          ].map((service) => (
            <div
              key={service.page}
              onClick={() => goToPage(service.page)}
              style={{
                width: '250px',
                height: '150px',
                backgroundColor: '#e3f2fd',
                border: '2px solid #1976d2',
                borderRadius: '12px',
                margin: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {service.label}
            </div>
          ))}
        </div>

        {/* DIV 4 - About Handy Trust */}
        <div
          style={{
            backgroundColor: 'beige',
            padding: '40px 20px',
            textAlign: 'center',
            borderRadius: '0',
            margin: '0',
          }}
        >
          <h1>Handy Trust</h1>
          <p style={{ fontSize: '18px', maxWidth: '900px', margin: '10px auto' }}>
            is a reliable and user-friendly home service platform designed to make booking professional help easy, fast, and secure. 
            Whether you need plumbing, electrical work, pest control, or cleaning services, Handy Trust connects you with verified and 
            certified experts in just a few clicks. The platform ensures transparency with upfront pricing, real-time GPS tracking, and 
            in-app payments—eliminating the need for cash transactions. With a focus on quality and trust, only fully reviewed professionals 
            are featured, making Handy Trust a dependable solution for all your home service needs.
          </p>
        </div>

        {/* DIV 5 - Review Section */}
        <div
          style={{
            height: '300px',
            textAlign: 'center',
            backgroundColor: '#f0f4c3',
            padding: '30px',
            borderRadius: '0',
            margin: '0',
          }}
        >
          <h2>Customer Review - They Love Us ❤️</h2>
          <p style={{ fontSize: '18px', marginTop: '10px' }}>
            ⭐ 50+ Ratings &nbsp;&nbsp;&nbsp;👥 100+ Customers &nbsp;&nbsp;&nbsp;✅ 100 Verified Professionals
          </p>

          <p>Join us and make your life easy </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
