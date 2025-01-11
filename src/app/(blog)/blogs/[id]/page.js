import Details from "@/components/blog/blog-single/Details";
import Features from "@/components/blog/blog-single/Features";
import Pagination from "@/components/blog/blog-single/Pagination";
import ReviewBoxForm from "@/components/blog/blog-single/ReviewBoxForm";
import Social from "@/components/blog/blog-single/Social";
import Tags from "@/components/blog/blog-single/Tags";
import TopComments from "@/components/blog/blog-single/TopComments";
import AllReviews from "@/components/blog/blog-single/reviews";
import Blog from "@/components/common/Blog";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Image from "next/image";

export const metadata = {
  title: "Blog || Villam365",
};

const BlogSingle = ({ params }) => {
  const blogId = params?.id || "";

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav */}
      <MobileMenu />
      {/* End Mobile Nav */}

      {/* Blog Section Area */}
      <section className="our-blog pt50">
        <Details id={blogId} />

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div className="ui-content mt40 mb60">
                <h4 className="mb10">Patara Plajı</h4>
                <p className="mb25 ff-heading">
                  Patara Plajı, Türkiye&#39;nin güney sahilinde, Antalya ile Kaş
                  arasında yer alan muhteşem bir doğa harikasıdır. Bu doğal
                  güzellik, sadece sahip olduğu muhteşem manzara ile değil,
                  aynı zamanda zengin tarihi ve çevresel önemiyle de dikkat
                  çekmektedir.
                </p>
              </div>

              <div className="col-12 ui-content">
                <h4 className="title">Doğal Güzellikler:</h4>
                <p>
                  Patara Plajı, 18 kilometrelik uzunluğuyla Türkiye&#39;nin en
                  uzun kumsallarından biridir. Uzun, altın rengi kumsalları ve
                  berrak turkuaz sularıyla çevrili, adeta bir doğa cennetidir.
                  Plaj, birçok deniz kaplumbağası türü için üreme sahası olarak
                  da önem taşımaktadır.
                </p>
              </div>

              <div className="col-lg-12 mt40">
                <Image
                  width={804}
                  height={470}
                  priority
                  src="/images/patara_plaj.jpg"
                  alt="Patara Plajı"
                  className="bdrs12 post-img-2 w-100 h-100 cover"
                />
              </div>

              <div className="ui-content mt40 mb30">
                <h4 className="mb10">Tarihi Zenginlik:</h4>
                <p>
                  Patara, Likya uygarlığının önemli bir merkezi olarak
                  bilinmektedir. Antik Patara Kenti, plajın hemen yanında yer
                  almaktadır ve ziyaretçilerine antik tiyatrosu, Roma hamamları,
                  tapınakları ve diğer tarihi kalıntıları keşfetme fırsatı
                  sunmaktadır.
                </p>
              </div>

              <div className="ui-content mt40 mb30">
                <h4 className="mb10">Huzur ve Rahatlama:</h4>
                <p>
                  Patara Plajı, sadece doğal güzellikleri ve tarihiyle değil,
                  aynı zamanda huzur veren atmosferiyle de bilinir. Gün batımı,
                  plajın en büyüleyici anlarından biridir.
                </p>
              </div>

              <div className="ui-content mt40 mb30">
                <h4 className="mb10">
                  Patara Plajı, doğanın güzelliklerini, tarihin izlerini ve huzur
                  veren bir atmosferi bir arada sunan eşsiz bir destinasyondur.
                </h4>
              </div>

              <Pagination />
              <AllReviews />

              <div className="bsp_reveiw_wrt">
                <h6 className="fz17">Yorumunu Bizimle Paylaş</h6>
                <ReviewBoxForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Post */}
      <section className="pb90 pb20-md pt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="main-title text-start text-md-center">
                <h2 className="title">Benzer Bloglar</h2>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
};

export default BlogSingle;
