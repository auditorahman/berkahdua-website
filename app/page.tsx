"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";


// Define types
interface Product {
  id: number;
  name: string;
  img: string;
  desc: string;
  category: string;
  specs: string[];
}

interface ProductsData {
  all: Product[];
  industrial: number[];
  precision: number[];
  liquid: number[];
  specialty: number[];
}


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data produk
  const products: ProductsData = {
    all: [
      { 
        id: 1, 
        name: "Band Heater", 
        img: "/images/band heater.jpg", 
        desc: "Pemanas untuk barrel mesin injection molding dan extruder dengan performa tinggi.",
        category: "industrial",
        specs: ["Tahan hingga 500°C", "Material: Stainless Steel", "Berbagai ukuran tersedia"]
      },
      { 
        id: 2, 
        name: "Finned Heater", 
        img: "/images/finned heater.jpg", 
        desc: "Elemen pemanas dengan sirip untuk efisiensi termal yang lebih baik pada sistem pemanas udara.",
        category: "industrial",
        specs: ["Desain sirip untuk efisiensi", "Cocok untuk pemanas udara", "Tahan lama"]
      },
      { 
        id: 3, 
        name: "Strip Heater", 
        img: "/images/strip heater.jpg", 
        desc: "Pemanas strip untuk aplikasi pemanasan permukaan datar dengan distribusi panas merata.",
        category: "industrial",
        specs: ["Pemanasan merata", "Untuk permukaan datar", "Installasi mudah"]
      },
      { 
        id: 4, 
        name: "Cartridge Heater", 
        img: "/images/catridge heater.jpg", 
        desc: "Pemanas cartridge silinder untuk aplikasi presisi seperti mold dan seal.",
        category: "precision",
        specs: ["Presisi tinggi", "Diameter kecil", "Response cepat"]
      },
      { 
        id: 5, 
        name: "Immersion Heater", 
        img: "/images/immersion heater.jpg", 
        desc: "Pemanas celup untuk memanaskan cairan dalam tangki atau wadah.",
        category: "liquid",
        specs: ["Tahan korosi", "Untuk cairan", "Thermostat opsional"]
      },
      { 
        id: 6, 
        name: "Spiral Heater", 
        img: "/images/spiral heater.jpg", 
        desc: "Solusi tepat untuk memanaskan air dengan cepat dan efektif.",
        category: "liquid",
        specs: ["Tahan Korosi", "Response Cepat", "Panas Merata"]
      }
    ],
    industrial: [1, 2, 3],
    precision: [4],
    liquid: [5,6],
    specialty: [0]
  };

  // Perbaikan: Fungsi filter yang benar
  const filteredProducts = activeTab === "all" 
    ? products.all 
    : products.all.filter(product => 
        (products[activeTab as keyof ProductsData] as number[]).includes(product.id)
      );

  const openModal = (product: Product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
    document.body.style.overflow = 'auto'; // Enable scrolling again
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setEmail("");
    setIsLoading(false);
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  
  return (
    <>
      {/* ✅ SEO & Schema Markup */}
      <Head>
        <title>Berkahdua Original | Heating Element & Elemen Pemanas</title>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content="Berkahdua Original | Heating Element" />
        <meta
          property="og:description"
          content="Penyedia elemen pemanas (heating element) berkualitas tinggi untuk industri & rumah tangga."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://berkahduaoriginal.com" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:locale" content="id_ID" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Berkahdua Original",
              url: "https://berkahduaoriginal.com",
              logo: "https://berkahduaoriginal.com/images/logo.png",
              sameAs: [
                "https://shopee.co.id/berkahdua.original",
                "https://tokopedia.com/berkahdua.original",
                "https://instagram.com/berkahdua.original"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+6281230528314",
                contactType: "Customer Service",
                areaServed: "ID",
                availableLanguage: ["Indonesian", "English"]
              }
            })
          }}
        />
      </Head>

      {/* ✅ Navbar Responsif */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <span className={`text-xl font-bold ${scrolled ? 'text-blue-700' : 'text-white'}`}>Berkahdua Original</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home','Tentang', 'Produk', 'Layanan', 'Kontak'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-fadeIn">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {['Home', 'Tentang', 'Produk', 'Layanan', 'Kontak'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-700 transition hover:text-blue-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Hero Section dengan Particle Background */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-black overflow-hidden"
      >
        {/* Background Image dengan overlay */}
        <div className="absolute inset-0 z-1">
          <Image
            src="/images/bannerr.png"
            alt="Hero Background"
            fill
            quality={100}
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 text-white max-w-4xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Solusi <span className="text-blue-600 ">Heating Element</span> Terpercaya
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Menyediakan elemen pemanas berkualitas untuk kebutuhan industri &amp; rumah tangga dengan garansi resmi dan harga terjangkau.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#produk"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg hover:shadow-xl"
            >
              Lihat Produk
            </a>
            <a
              href="#kontak"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ✅ Tentang Kami Section (Baru) */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Tentang Berkahdua Original</h2>
              <p className="text-gray-600 mb-4">
                Berkahdua Original telah menjadi penyedia terpercaya untuk heating element dan elemen pemanas sejak 2020. 
                Kami menyediakan produk berkualitas tinggi dengan standar nasional untuk berbagai kebutuhan industri dan rumah tangga.
              </p>
              <p className="text-gray-600">
                Dengan pengalaman 5 tahun, kami memahami betul kebutuhan pasar dan selalu berkomitmen 
                untuk memberikan solusi terbaik bagi pelanggan kami.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/logoberkah.jpg"
                alt="Tentang Kami"
                width={500}
                height={350}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Stats Section (Baru) */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Produk Tersedia" },
              { number: "2.000+", label: "Pelanggan" },
              { number: "5", label: "Tahun Pengalaman" },
              { number: "24/7", label: "Layanan Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Produk Section dengan Filter */}
      <section id="produk" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Produk Kami</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Kami menyediakan berbagai jenis heating element berkualitas tinggi untuk memenuhi kebutuhan industri dan rumah tangga Anda.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { id: "all", label: "Semua Produk" },
                { id: "industrial", label: "Industrial" },
                { id: "precision", label: "Presisi" },
                { id: "liquid", label: "Pemanas Cairan" },
                { id: "specialty", label: "Khusus" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full transition ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition group overflow-hidden"
                >
                  {/* GAMBAR PRODUK DENGAN ASPECT RATIO 1:1 */}
                  <div className="overflow-hidden rounded-xl mb-4 aspect-square relative">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover rounded-xl group-hover:scale-105 transition duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 rounded-xl"></div>
                  </div>
                  
                  {/* Nama produk */}
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.desc}</p>
                  
                  <button 
                    onClick={() => openModal(product)}
                    className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center"
                  >
                    Detail Produk
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="https://shopee.co.id/berkahdua.original"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              >
                Lihat Semua Produk
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal untuk Detail Produk */}
      {isModalOpen && currentProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{currentProduct.name}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* GAMBAR PRODUK DI MODAL JUGA 1:1 */}
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src={currentProduct.img}
                    alt={currentProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div>
                  <p className="text-gray-600 mb-4">{currentProduct.desc}</p>
                  
                  <h4 className="font-semibold mb-2">Spesifikasi:</h4>
                  <ul className="mb-6">
                    {currentProduct.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start mb-2">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/6281230528314"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition text-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                      </svg>
                      Tanya via WhatsApp
                    </a>
                    
                    <a
                      href="#contact"
                      onClick={closeModal}
                      className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Keunggulan Section (Baru) */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Kami?</h2>
            <p className="mb-12 max-w-2xl mx-auto">Keunggulan yang membuat kami menjadi pilihan terbaik untuk kebutuhan heating element Anda.</p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Kualitas Terjamin", desc: "Produk dengan material terbaik dan standar kualitas tinggi" },
                { title: "Harga Kompetitif", desc: "Harga terjangkau dengan kualitas terbaik" },
                { title: "Pengalaman", desc: "Pengalaman 5 tahun melayani kebutuhan heating element" },
                { title: "Garansi Resmi", desc: "Dukungan garansi untuk semua produk kami" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-blue-600 rounded-2xl"
                >
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold">{i+1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Kami menawarkan berbagai layanan profesional untuk memastikan Anda mendapatkan solusi terbaik untuk kebutuhan pemanas Anda.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Konsultasi Produk", 
                  desc: "Bantu pilih heating element sesuai kebutuhan dengan layanan konsultasi gratis dari ahli kami.",
                  icon: "💡"
                },
                { 
                  title: "Custom Order", 
                  desc: "Desain elemen pemanas sesuai permintaan dan spesifikasi teknis yang Anda butuhkan.",
                  icon: "🔧"
                },
                { 
                  title: "Pengiriman Cepat", 
                  desc: "Layanan distribusi cepat & aman ke seluruh Indonesia dengan berbagai pilihan ekspedisi.",
                  icon: "🚚"
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition group border border-gray-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Testimoni Section (Baru) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Apa Kata Pelanggan Kami?</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut beberapa testimoni dari pelanggan setia Berkahdua Original.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Budi Santoso", 
                  company: "PT. Industri Plastik Maju",
                  comment: "Band heater dari Berkahdua Original sangat awet dan performanya konsisten. Sudah bertahun-tahun menjadi supplier kami.",
                  rating: 5
                },
                { 
                  name: "Dewi Lestari", 
                  company: "UMKM Kerajinan Rotan",
                  comment: "Pelayanan sangat memuaskan dan produknya berkualitas. Pengiriman juga cepat sesuai janji.",
                  rating: 5
                },
                { 
                  name: "Ahmad Rizki", 
                  company: "Bengkel Las Modern",
                  comment: "Harga kompetitif dengan kualitas terjamin. Recommended untuk yang mencari heating element terpercaya.",
                  rating: 4
                }
              ].map((testimoni, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-white rounded-2xl shadow"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, starIdx) => (
                      <svg 
                        key={starIdx} 
                        className={`w-5 h-5 ${starIdx < testimoni.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  

                  <div>
                    <p className="font-semibold">{testimoni.name}</p>
                    <p className="text-sm text-gray-500">{testimoni.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Tertarik dengan produk kami? Jangan ragu untuk menghubungi tim sales kami untuk konsultasi dan penawaran terbaik.
            </p>
            
            <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-2xl shadow-md">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://wa.me/6281230528314"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:berkahdua.original@gmail.com"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
              
              <div className="text-center">
                <p className="font-semibold mb-2">Atau kunjungi toko online kami:</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://shopee.co.id/berkahdua.original" 
                    target="_blank"
                    className="text-orange-600 hover:text-orange-800 transition"
                  >
                    Shopee
                  </a>
                  <a 
                    href="https://tokopedia.com/berkahdua.original" 
                    target="_blank"
                    className="text-green-600 hover:text-green-800 transition"
                  >
                    Tokopedia
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Footer dengan Newsletter Signup */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Berkahdua Original</h3>
              <p className="text-gray-400 mb-4">Solusi Heating Element Terpercaya sejak 2020.</p>
              <div className="flex space-x-4">                
                <a href="https://www.instagram.com/berkahdua.original" target="_blank" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                {['Home', 'Produk', 'Layanan', 'Tentang', 'Kontak'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produk Kami</h4>
              <ul className="space-y-2">
                {['Band Heater', 'Finned Heater', 'Strip Heater', 'Cartridge Heater', 'Immersion Heater'].map((product) => (
                  <li key={product}>
                    <a href="#produk" className="text-gray-400 hover:text-white transition">{product}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Berlangganan Newsletter</h4>
              <p className="text-gray-400 mb-4">Dapatkan info promo dan produk terbaru kami.</p>
              
              {isSubscribed ? (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                  Terima kasih telah berlangganan!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Alamat email Anda"
                    required
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {isLoading ? 'Memproses...' : 'Berlangganan'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Berkahdua Original. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}