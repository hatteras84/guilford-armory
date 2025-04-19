// FFL Transfers Information Page
import React from 'react';

export default function FFLTransfersPage() {
  return (
    <main className="min-h-screen bg-[length:300px_300px] bg-center text-white p-10" style={{ backgroundImage: 'url(/images/camo/splittertarn.png)' }}>
      <h1 className="text-4xl font-bold mb-6">FFL Transfers</h1>

      <p className="mb-6 max-w-3xl">
        This page provides information about our FFL transfer services. There are no products available for purchase here.
        <strong className="block mt-4 text-red-300">Please do not visit the shop without contacting us first.</strong>
        All transfers and shipping arrangements must be coordinated in advance.
      </p>

      <section className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2">Shipping Instructions</h2>
        <p className="mb-2">
          Whether your firearm is coming from a private individual or another FFL, all shipments <strong>must</strong> be sent to our <strong>mailing address</strong>, <em>not</em> our business address.
        </p>
        <p>
          Please contact us beforehand at <a href="mailto:sales@guilfordarmory.com" className="underline text-blue-300">sales@guilfordarmory.com</a> to make arrangements.
        </p>
      </section>

      <section className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
        <ul className="list-disc ml-6">
          <li>Standard firearm transfers: <strong>$25</strong></li>
          <li>NFA item transfers: <strong>$50</strong></li>
        </ul>
      </section>

      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2">Outgoing Transfers</h2>
        <p>
          Need to ship a firearm? We’re happy to help. We offer outbound shipping of firearms for <strong>$25</strong> plus actual shipping costs.
        </p>
      </section>
    </main>
  );
}
