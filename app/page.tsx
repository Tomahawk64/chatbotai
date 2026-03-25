import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-6">
          Scale Your Business with AI Automation 🚀
        </h1>
        <p className="text-lg mb-8">
          We help US businesses automate workflows, generate leads, and grow faster.
        </p>
        <Link href="/contact">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
            Book a Free Call
          </button>
        </Link>
      </section>

      {/* SERVICES */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-6 px-10">
          {[
            "AI Automation",
            "Website Development",
            "Lead Generation",
            "Cloud & DevOps"
          ].map((item, i) => (
            <div key={i} className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-sm mt-2 text-gray-600">
                Scalable solutions tailored for US businesses.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        <p className="text-lg italic">
          "Our revenue grew 3x after working with this team!"
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-6">
          Ready to grow your business?
        </h2>
        <Link href="/contact">
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Contact Us
          </button>
        </Link>
      </section>

    </main>
  );
}
