"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ✅ SEO & Schema Markup */}
      <Head>
        <title>BerkahDua.Original | Heating Element & Elemen Pemanas</title>
        <meta
          name="description"
          content="Berkahdua Original adalah penyedia elemen pemanas (heating element) berkualitas untuk kebutuhan industri & rumah tangga. Produk terlengkap dengan harga bersaing."
        />
        <meta
          name="keywords"
          content="heating element, elemen pemanas, pemanas listrik, berkahdua original, sparepart pemanas, pemanas industri, pemanas rumah tangga"
        />
        <meta name="author" content="Berkahdua Original" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="BerkahDua.Original | Heating Element" />
        <meta
          property="og:description"
          content="Penyedia elemen pemanas (heating element) berkualitas tinggi untuk industri & rumah tangga."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://berkahdua.original" />
        <meta property="og:image" content="/images/hero-heating.jpg" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BerkahDua.Original",
              url: "https://berkahdua.original",
              logo: "https://berkahdua.original/images/logo.png",
              sameAs: [
                "https://shopee.co.id/berkahdua.original",
                "https://tokopedia.com/berkahdua.original"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+626281230528314",
                contactType: "Customer Service",
                areaServed: "ID",
                availableLanguage: ["Indonesian", "English"]
              }
            })
          }}
        />
      </Head>

      {/* ✅ Hero Section */}
      <section
      id="home"
      className="relative h-screen flex items-center justify-center text-black"
    >
      {/* Background Image */}
      <Image
      src="/images/bannerr.png"
      alt="Hero Background"
      fill
      quality={100}
      priority
      className="z-0 object-cover object-center"
    />


      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 text-black"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Solusi Heating Element Terpercaya
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Menyediakan elemen pemanas berkualitas untuk kebutuhan industri & rumah tangga
        </p>
        <a
          href="#produk"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Lihat Produk
        </a>
      </motion.div>
    </section>

          

      {/* ✅ Produk Section */}
      <section id="produk" className="py-20 bg-gray-50 text-center">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-6"
  >
    <h2 className="text-3xl font-bold mb-10">Produk Kami</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Band Heater", img: "/images/band heater.jpg" },
        { name: "Finned Heater", img: "/images/finned heater.jpg" },
        { name: "Strip Heater", img: "/images/strip heater.jpg" },
      ].map((product, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          {/* ✅ Gambar produk */}
          <img
            src={product.img}
            alt={product.name}
            className="w-full aspect-square object-cover rounded-xl mb-4"
          />
          {/* ✅ Nama produk */}
          <h3 className="text-xl font-semibold">{product.name}</h3>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      {/* ✅ Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-10">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Konsultasi Produk", desc: "Bantu pilih heating element sesuai kebutuhan." },
              { title: "Custom Order", desc: "Desain elemen pemanas sesuai permintaan." },
              { title: "Pengiriman Cepat", desc: "Layanan distribusi cepat & aman." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
          <p className="mb-6">
            Ada pertanyaan? Hubungi kami melalui WhatsApp atau Email
          </p>
          <a
            href="https://wa.me/6281230528314"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-full mr-4 hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:berkahdua.original@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Email
          </a>
        </motion.div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} Berkahdua.Original. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
