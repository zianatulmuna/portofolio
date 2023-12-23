import React from 'react';
import FlipCard from './FlipCard';

const CertificationComponent = () => {
  const certificates = [
    {
      id: "L4PQ87Q82ZO1",
      name: "Belajar Membuat Aplikasi Web dengan React",
      issued: "Oct 2023 - Oct 2026"
    },
    {
      id: "0LZ019R2KP65",
      name: "Menjadi Front-End Web Developer Expert",
      issued: "May 2022 - May 2025"
    },
    {
      id: "KEXL35QM0PG2",
      name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      issued: "Mar 2022 - Mar 2025"
    },
    {
      id: "1RXYMNGE9XVM",
      name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
      issued: "Apr 2022 - Apr 2025"
    }
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 g-3">
      {certificates.map((certificate) => (
        <FlipCard key={certificate.id} {...certificate} />
      ))}
      </div>
    </div>
  )
}

export default CertificationComponent