"use client";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/Header";
import Link from "next/link";
import PropertyListing from "@/components/home/PropertyListing";
import Cta from "@/components/home/Cta";
import Head from "next/head";
import dynamic from "next/dynamic";
import "@/styles/scss/main.scss";

// Dinamik olarak yüklenen bileşenler
const Hero = dynamic(() => import("@/components/home/Hero"), { ssr: false });
const FeaturedListings = dynamic(() => import("@/components/home/FeatuerdListings"), { ssr: false });
const Explore = dynamic(() => import("@/components/common/Explore"), { ssr: false });
const Blog = dynamic(() => import("@/components/common/Blog"), { ssr: false });
const Testimonial = dynamic(() => import("@/components/home/Testimonial"), { ssr: false });
const ApartmentTypes = dynamic(() => import("@/components/home/ApartmentTypes"), { ssr: false });

const Home_V5 = () => {
  return (
    <>
      <Head>
        <title>Anasayfa || Villam365</title>
      </Head>

      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav */}
      <MobileMenu />
      {/* End Mobile Nav */}

      {/* Hero Slide */}
      <div className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      {/* End Hero Slide */}

      {/* Filter with properties
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FilterWithProperties />
            </div>
          </div>
        </div>
      </section> */}

      {/* Discover Our Featured Listings */}
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Sizin için seçtiklerimiz</h2>
                <p className="paragraph">
                  &quot;Lüks&#39;ün ve konforun buluştuğu ayrıcalıklı tatil deneyimi!&quot;
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-default">
                  Tümü
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Apartment Types cities */}
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Hayalinizdeki lüks tatil, burada gerçeğe dönüşüyor!</h2>
                <p className="paragraph">
                  Kusursuz hizmet ve eşsiz deneyimlerle dolu bir tatil sizi bekliyor.
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes />
          </div>
        </div>
      </section>

      {/* Explore Apartment */}
      <section className="pb90 pb30-md bgc-thm-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
              <div className="main-title text-center">
                <h2 className="title">
                  Rahatlık ve Lüks&#39;ün Buluştuğu Eşsiz Tatil Fırsatları
                </h2>
                <p className="paragraph">
                  Ege &amp; Akdeniz&#39;in en özel villalarında, konfor ve huzur dolu bir
                  tatil deneyimi sizi bekliyor.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <Explore />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta />

      {/* Our Testimonials */}
      <section className="pb50-md">
        <div className="container maxw1600">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-auto">
              <div className="main-title" data-aos="fade-up" data-aos-delay="300">
                <h2 className="title">Misafirlerimizin Memnuniyeti, Bizim Önceliğimiz!</h2>
                <p className="paragraph">
                  Villam365 ile tatil yapan misafirlerimizin unutulmaz deneyimlerine ve yüksek
                  memnuniyet oranımıza göz atın.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider" data-aos="fade-up" data-aos-delay="300">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Property */}
      <PropertyListing />

      {/* Explore Blog */}
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">Popüler Bloglar</h2>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home_V5;
