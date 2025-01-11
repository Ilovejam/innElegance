import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Mission from "@/components/pages/about/Mission";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hakkımızda || Villam365.com",
};

const About = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav */}
      <MobileMenu />
      {/* End Mobile Nav */}

      {/* Breadcrumb Section */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                {/* Breadcrumb başlık burada yer alabilir */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Section */}

      {/* About Section */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>
                Ege &amp; Akdeniz&#39;de eşsiz villalarda 365 gün tatil keyfini yaşa!
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                Villam365, 2018 yılından beri TÜRSAB A sınıfı bir acente olarak
                faaliyet göstermektedir. Tatil anlayışını en güvenilir şekilde
                yurt içi ve yurt dışındaki misafirleriyle buluşturmayı
                hedeflemektedir.
              </p>
              <p className="text mb55">
                Villa tatili denildiğinde ilk akla gelen adres olmayı başaran
                Villam365, her zaman güvenilir tatilin garantisi olmuştur.
                Hizmetlerimiz, 2 farklı ilde 15&#39;ten fazla bölgedeki villalarla
                geniş bir portföy sunmaktadır.
              </p>
              <p className="text mb55">
                Alanında uzman ekibimiz, rezervasyon süreciniz boyunca size en
                iyi tercihi yapmanızda yardımcı olur. Tatil sürecinizde ve
                sonrasında da hizmet vermeye devam ederek tatilinizi en iyi
                şekilde geçirmenizi sağlıyoruz.
              </p>
              <div className="row">
                <Mission />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* About Banner */}
      <section className="our-about pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-12">
              <div className="about-page-img">
                <Image
                  width={1206}
                  height={515}
                  priority
                  className="w-100 h-100 cover"
                  src="/images/about/villa-serengeti.jpeg"
                  alt="Villa Serengeti"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Banner */}

      {/* Fun Fact */}
      <section className="pt-0">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FunFact />
          </div>
        </div>
      </section>
      {/* End Fun Fact */}

      {/* About Intro */}
      <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                    Sizin için <br className="d-none d-md-block" />
                    en doğru tatil seçeneğini bulalım
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="grid-default" className="ud-btn btn-dark">
                  Daha Fazlası
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Intro */}

      {/* Call To Actions */}
      <CallToActions />
      {/* End Call To Actions */}

      {/* Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Footer */}
    </>
  );
};

export default About;
