'use client';
// File Purpose: Shows the trusted clients/logo strip used as a marquee section.


import Image from 'next/image';

export default function Clients() {
  const clients = [
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029492/Motherson_wdn07x.png',
      alt: 'Client 1',
      fallback: 'Motherson'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029492/Farmart_ddklgl.png',
      alt: 'Client 2',
      fallback: 'Farmart'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029492/OlivCare-1_u2v77p.png',
      alt: 'Client 3',
      fallback: 'OlivCare'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029491/healthplix-2_mju4yz.png',
      alt: 'Client 4',
      fallback: 'healthplix'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029491/ShipRocket_jnkluy.png',
      alt: 'Client 5',
      fallback: 'ShipRocket'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029491/mulberri-2_ypew6g.png',
      alt: 'Client 6',
      fallback: 'mulberri'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029491/Vegrow-1_m2obm2.png',
      alt: 'Client 7',
      fallback: 'Vegrow'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029491/Unizon-2_izo802.png',
      alt: 'Client 8',
      fallback: 'Unizon'
    },
    {
      src: 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1774029491/JobBuzz_njyh08.png',
      alt: 'Client 9',
      fallback: 'JobBuzz'
    }
  ];

  const marqueeClients = [...clients, ...clients];

  const fallbackStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '17px',
    fontWeight: 800,
    color: 'rgba(255,255,255,.2)',
    display: 'none'
  };

  const onImgError = (e) => {
    const img = e.currentTarget;
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback) fallback.style.display = 'inline-block';
  };

  return (
    <section id="clients" className="relative">
      <div className="wrap mx-auto w-full">
        <p className="clients-lbl">Trusted by businesses worldwide</p>
        <div className="clients-marquee" aria-label="Brand logos marquee">
          <div className="clients-marquee-track">
            {marqueeClients.map((client, index) => (
              <div
                className="grayscale hover:grayscale-0 transition duration-300 clients-item clients-marquee-item flex shrink-0 items-center justify-center"
                key={`${client.alt}-${index}`}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={160}
                  height={60}
                  className=""
                  onError={onImgError}
                />
                <span style={fallbackStyle}>{client.fallback}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

