import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Faq1 from "@/components/pages/faq/Faq1";
import Faq2 from "@/components/pages/faq/Faq2";

export const metadata = {
  title: "Faq  || Villam365",
};

const Faq = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Sık Sorulan Sorular</h2>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* FAQ Section Area */}
      <section className="our-faq pb90 pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="ui-content">
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq1 />
                </div>
              </div>
              {/* End ui-content */}

              <div className="ui-content">
           
              </div>
              {/* End ui-content */}
            </div>
            {/* End .col-lg-12 */}
          </div>
        </div>
      </section>
      {/* End FAQ Section Area */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Faq;
