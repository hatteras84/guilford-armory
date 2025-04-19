// Cerakote Page with Background Collage and Image Gallery
import React, { useState } from 'react';

export default function CerakotePage() {
  const [modalImage, setModalImage] = useState(null);

  const galleryImages = [
    '/uploads/906EAE1D-469C-4539-A49D-FE8427905A51.jpeg',
    '/uploads/CA756B23-170F-4F89-91F3-2F960A34DD61_1_201_a.heic',
    '/uploads/AA72BA2C-FD50-4CD9-A36B-103F056F56F1_1_201_a.heic',
    '/uploads/6EB17168-46EE-456C-A3F4-A9B42F9B96A0_1_201_a.heic',
    '/uploads/0A503A72-7791-4943-A2EB-20CA5261F6D1.heic',
    '/uploads/13C5FB6F-8708-4353-BF1D-7015D7FD816F_1_201_a.heic',
    '/uploads/FF05BB74-11D1-40AF-9E4D-4435DA1AAC0A_1_201_a.heic',
    '/uploads/CBC8E598-B912-4C6F-862A-82B177617875.jpeg',
    '/uploads/6BB55A59-30DB-4770-AF41-C3C2D48BCE73.heic',
    '/uploads/EEBCC7F2-BC52-4675-9D54-AD14322A43C1_1_201_a.heic'
  ];

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover text-white p-10"
      style={{ backgroundImage: 'url(/images/collage/cerakote-collage.jpg)' }}
    >
      <div className="bg-black/70 p-8 rounded-lg max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cerakote Services</h1>

        <p className="mb-4">
          Guilford Armory offers custom Cerakote work with a wide range of color options and camo
          patterns including M81, DCU, Multicam, Splittertarn, and more.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Pricing Overview</h2>
          <ul className="list-disc ml-6">
            <li>Single Color Handgun: <strong>Starts at $100</strong></li>
            <li>Single Color Rifle: <strong>Starts at $150</strong></li>
            <li>Multi-Cam / Pattern Work: <strong>Contact for Quote</strong></li>
            <li>Disassembly/Reassembly (if required): <strong>$35/hr</strong></li>
          </ul>
        </section>

        <section className="mb-8">
          <p>
            For all Cerakote inquiries and project quotes, please reach out to
            <a href="mailto:sales@guilfordarmory.com" className="underline text-blue-300"> sales@guilfordarmory.com</a>
            . We're happy to discuss ideas and help bring your project to life.
          </p>
        </section>
      </div>

      <section className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Cerakote work ${idx + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => setModalImage(src)}
            />
          ))}
        </div>

        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <img src={modalImage} alt="Zoomed Cerakote" className="max-h-[90vh] max-w-[90vw] rounded-lg" />
          </div>
        )}
      </section>
    </main>
  );
}
