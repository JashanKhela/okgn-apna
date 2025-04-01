"use client";

export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-lg font-semibold text-[#ee3042]">Phone</h3>
          <p className="!text-[#7c7c7c] !mt-2">+1 (250) 123-4567</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#ee3042]">Email</h3>
          <p className="!text-[#7c7c7c] !mt-2">hello@okgnapna.com</p>
        </div>
        <div>
          <h3 className="!text-lg font-semibold text-[#ee3042]">Location</h3>
          <p className="!text-[#7c7c7c] !mt-2">Kelowna, BC</p>
        </div>
      </div>
    </section>
  );
}
