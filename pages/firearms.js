import React from 'react';

export default function FirearmsPage() {
  return (
    <main className="min-h-screen bg-[length:300px_300px] bg-center text-white p-10" style={{ backgroundImage: 'url(/images/camo/splittertarn.png)' }}>
      <h1 className="text-4xl font-bold mb-6">Firearms</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Handguns</h2>
        <ul className="list-disc ml-6">
          <li>Semi-Auto</li>
          <li>Revolver</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Shotguns</h2>
        <ul className="list-disc ml-6">
          <li>Pump</li>
          <li>Single Barrel</li>
          <li>Double Barrel (Over/Under, Side-by-Side)</li>
          <li>Semi Auto</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Rifles</h2>
        <ul className="list-disc ml-6">
          <li>Bolt Action</li>
          <li>Pump</li>
          <li>Lever</li>
          <li>Single Shot</li>
          <li>Semi Auto</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">NFA</h2>
        <ul className="list-disc ml-6">
          <li>Short Barrel Rifles (SBR)</li>
          <li>Short Barrel Shotguns (SBS)</li>
          <li>Machine Guns</li>
          <li>Any Other Weapons (AOW)</li>
          <li>Destructive Devices (DD)</li>
        </ul>
      </section>
    </main>
  );
}
