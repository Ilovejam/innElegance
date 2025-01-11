import Pagination from "@/components/blog/Pagination";
import Blog from "@/components/blog/blog-list-v1/Blog";
import BlogSidebar from "@/components/blog/sidebar";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Blog  || Villam365",
};

const BlogV1 = () => {
  return (
    <div className="bgc-f7">
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Start */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Blog</h2>
            
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Start */}

      {/* Blog Section Area */}
      <section className="our-blog pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-8">
              <Blog />
              <div className="row">
                <div className="mbp_pagination text-center">
                  <Pagination />
                  <p className="mt10 pagination_page_count text-center">
  20 Blog&#39;tan İlk 2 Blog
</p>

                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Blog Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </div>
  );
};

export default BlogV1;
