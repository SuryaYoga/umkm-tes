"use client";

import { useState } from "react";
import Image from "next/image";
import {
  navLinks,
  stats,
  whyDharana,
  collections,
  craftsmanshipItems,
  orderSteps,
  contactLinks,
} from "@/data/landing";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0f0d0b] text-white">
      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-yellow-500/15 bg-[#0f0d0b]/85 backdrop-blur-xl">
        <div className="flex w-full items-center justify-between px-5 py-4 md:px-10 md:py-5 xl:px-16">
          <a href="#home" className="group">
            <h1 className="text-lg font-semibold tracking-[0.28em] text-yellow-400 transition group-hover:text-yellow-300 md:text-2xl">
              DHARANA
            </h1>
            <p className="mt-1 hidden text-[10px] uppercase tracking-[0.35em] text-stone-500 sm:block">
              Bali Silver Artisans
            </p>
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-8 text-sm text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative transition hover:text-yellow-400 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="rounded-full border border-yellow-500/50 px-5 py-2 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Pesan Sekarang
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/30 bg-[#17120e] text-yellow-400 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-yellow-400 transition ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-yellow-400 transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-6 bg-yellow-400 transition ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-yellow-500/20 bg-[#0f0d0b]/95 transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-stone-300 transition hover:bg-yellow-500/10 hover:text-yellow-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-2xl bg-yellow-500 px-4 py-3 text-center font-semibold text-black transition hover:bg-yellow-400"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 pb-16 pt-32 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(180,83,9,0.18),transparent_35%)]" />

        <div className="pointer-events-none absolute left-4 top-28 h-16 w-16 border-l border-t border-yellow-500/35 sm:left-8 sm:h-20 sm:w-20 md:left-12 md:h-28 md:w-28 lg:left-16 lg:h-32 lg:w-32" />
        <div className="pointer-events-none absolute bottom-10 right-4 h-16 w-16 border-b border-r border-yellow-500/35 sm:right-8 sm:h-20 sm:w-20 md:right-12 md:h-28 md:w-28 lg:right-16 lg:h-32 lg:w-32" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-up max-w-2xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-yellow-400 sm:text-xs md:text-sm md:tracking-[0.4em]">
              Handmade Bali Silver • Est. 2009
            </p>

            <h2 className="text-4xl font-semibold leading-[1.15] text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Dharana:
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text pb-2 text-transparent">
                Elegansi Perak Bali
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-stone-300 md:text-lg">
              Perhiasan eksklusif hasil karya tangan perajin Bali. Dibuat
              dengan sepenuh hati sejak 2009 untuk Anda yang menghargai detail,
              makna, dan keindahan dalam setiap karya.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-full bg-yellow-500 px-7 py-3 text-center font-semibold text-black transition hover:bg-yellow-400"
              >
                Lihat Galeri Koleksi
              </a>

              <a
                href="#contact"
                className="rounded-full border border-yellow-500 px-7 py-3 text-center font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="relative animate-float-slow">
            <div className="rounded-t-full border border-yellow-500/50 bg-gradient-to-b from-yellow-500/20 to-transparent p-4 shadow-2xl shadow-yellow-500/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-[#1a1612]">
                <Image
                  src="/images/hero-jewelry.jpg"
                  alt="Perhiasan perak Bali Dharana"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6">
                  <p className="text-2xl font-semibold text-yellow-300 md:text-3xl">
                    Handcrafted Silver Jewelry
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-200">
                    Karya perhiasan perak Bali yang dibuat dengan detail, makna,
                    dan ketulusan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative scroll-mt-24 px-6 py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-[#17120e] p-7 shadow-2xl shadow-yellow-500/10 md:p-8">
            <div className="absolute right-0 top-0 h-24 w-24 border-r border-t border-yellow-500/50" />
            <div className="absolute bottom-0 left-0 h-24 w-24 border-b border-l border-yellow-500/50" />

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              The Legacy
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Seberkas Cahaya dari Perak Mulia Abadi
            </h2>

            <p className="mt-6 leading-8 text-stone-300">
              Sejak 29 Mei 2009, Perak Mulia Abadi telah mendedikasikan diri
              untuk melestarikan seni kriya perak Bali. Dharana lahir sebagai
              simbol fokus, ketulusan, dan penghormatan terhadap detail.
            </p>

            <p className="mt-4 leading-8 text-stone-300">
              Setiap potongan perhiasan bukan sekadar aksesori, melainkan
              perwujudan dari bakat lokal yang telah menjangkau pasar lokal
              hingga internasional melalui kualitas karya dan keindahan
              desainnya.
            </p>
          </div>

          <div className="grid gap-5">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-yellow-500/30 bg-[#17120e] p-6 transition hover:-translate-y-1 hover:border-yellow-400"
              >
                <p className="text-5xl font-semibold text-yellow-400">
                  {item.title}
                </p>
                <p className="mt-2 text-stone-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dharana */}
      <section className="relative bg-[#17120e] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              Why Dharana
            </p>

            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Nilai di Balik Setiap Karya
            </h2>

            <p className="mt-5 leading-8 text-stone-300">
              Dharana menghadirkan perhiasan perak Bali yang menonjolkan
              keahlian tangan, eksklusivitas pesanan, dan kualitas yang siap
              bersaing di pasar global.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyDharana.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-yellow-500/30 bg-[#0f0d0b] p-6 transition hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-2xl text-yellow-300">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold text-yellow-300">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Gallery */}
      <section
        id="products"
        className="relative scroll-mt-24 px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              Feature Gallery
            </p>

            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Koleksi Pilihan Dharana
            </h2>

            <p className="mt-5 leading-8 text-stone-300">
              Jelajahi koleksi perhiasan perak Bali yang dibuat dengan detail
              halus, makna simbolis, dan sentuhan tangan perajin lokal.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {collections.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-yellow-500/30 bg-[#17120e] transition hover:-translate-y-2 hover:border-yellow-400"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0f0d0b]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-yellow-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-stone-400">{item.desc}</p>

                  <a
                    href="#contact"
                    className="mt-6 inline-block rounded-full border border-yellow-500/50 px-5 py-2 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                  >
                    Custom Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="relative bg-[#17120e] px-6 py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-yellow-500/50 md:h-32 md:w-32" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-yellow-500/50 md:h-32 md:w-32" />

            <div className="rounded-3xl border border-yellow-500/30 bg-[#0f0d0b] p-6 shadow-2xl shadow-yellow-500/10">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#0f0d0b]">
                <Image
                  src="/images/artisan.jpg"
                  alt="Proses pembuatan perhiasan perak Bali"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-2xl font-semibold text-yellow-300 md:text-3xl">
                    Crafted by Hand
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-200">
                    Detail karya dibuat dengan sentuhan perajin dan ketelitian
                    khas kriya perak Bali.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              Craftsmanship
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Dibuat dengan Tangan, Dihadirkan dengan Makna
            </h2>

            <p className="mt-6 leading-8 text-stone-300">
              Setiap perhiasan Dharana dirancang untuk membawa nilai seni,
              ketenangan, dan keindahan Bali dalam bentuk yang dapat dikenakan.
              Kami percaya bahwa perhiasan bukan hanya soal estetika, tetapi
              juga tentang cerita dan jiwa penciptanya.
            </p>

            <div className="mt-8 space-y-4">
              {craftsmanshipItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-500/20 bg-[#0f0d0b] p-5"
                >
                  <p className="text-2xl font-semibold text-yellow-300">
                    {item.title}
                  </p>
                  <p className="mt-2 text-stone-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Konsultasi Pesanan
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative scroll-mt-24 px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              How to Order
            </p>

            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Cara Memesan Karya Dharana
            </h2>

            <p className="mt-5 leading-8 text-stone-300">
              Karena setiap produksi dibuat berdasarkan pesanan, kami
              menghadirkan alur pemesanan yang jelas agar setiap karya terasa
              personal, eksklusif, dan penuh makna.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {orderSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-yellow-500/30 bg-[#17120e] p-7 transition hover:-translate-y-2 hover:border-yellow-400"
              >
                <p className="text-5xl font-semibold text-yellow-400">
                  {item.step}
                </p>

                <h3 className="mt-6 text-2xl font-semibold text-yellow-300">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden bg-[#17120e] px-6 py-20 md:py-24">
        <div className="absolute left-10 top-10 h-28 w-28 border-l border-t border-yellow-500/30 md:h-32 md:w-32" />
        <div className="absolute bottom-10 right-10 h-28 w-28 border-b border-r border-yellow-500/30 md:h-32 md:w-32" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-3xl font-medium leading-relaxed text-white md:text-5xl">
            “Perhiasan bukan hanya soal estetika, tapi soal bagaimana sebuah
            karya seni mampu membawa jiwa penciptanya kepada pemakainya.”
          </p>

          <p className="mt-8 text-sm uppercase tracking-[0.4em] text-yellow-400">
            Dharana Jewelry
          </p>
        </div>
      </section>

      {/* Contact / Order */}
      <section
        id="contact"
        className="relative scroll-mt-24 px-6 py-20 md:py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(234,179,8,0.15),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-5xl rounded-[2rem] border border-yellow-500/40 bg-[#17120e] p-8 text-center shadow-2xl shadow-yellow-500/10 md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
            Order Now
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Pesan Perhiasan Dharana Anda
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-stone-300">
            Tertarik memiliki perhiasan perak Bali yang dibuat khusus untuk
            Anda? Hubungi kami untuk konsultasi desain, estimasi pengerjaan, dan
            pemesanan melalui kontak atau marketplace resmi kami.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-yellow-500/30 bg-[#0f0d0b] px-6 py-4 font-semibold text-yellow-300 transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-[#0f0d0b] p-6 text-center">
            <p className="text-2xl font-semibold text-yellow-300">Address</p>
            <p className="mt-3 text-stone-400">Bali, Indonesia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 bg-[#0f0d0b] px-6 py-8 text-center">
        <p className="text-xl font-semibold tracking-[0.25em] text-yellow-400">
          DHARANA JEWELRY
        </p>

        <p className="mt-3 text-sm text-stone-500">
          Part of Perak Mulia Abadi Group • Est. 2009
        </p>

        <p className="mt-2 text-sm text-stone-600">
          © 2026 Dharana Jewelry. Crafted with heart in Bali, Indonesia.
        </p>
      </footer>
    </main>
  );
}