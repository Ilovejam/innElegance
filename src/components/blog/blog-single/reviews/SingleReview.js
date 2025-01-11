import Image from "next/image";
import React from "react";

const reviews = [
  {
    name: "Ali Candaş",
    date: "1.08.2024",
    rating: 5,
    text: "Rahat ve keyifli bir tatil geçirdik. Tatil boyunca hiçbir sorun yaşamadık, her şey organize ve eksiksizdi. Herkese gönül rahatlığıyla tavsiye ederim!",
    images: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
  {
    name: "Tuğba Yılmaz ",
    date: "12.08.2024",
    rating: 5,
    text: "Mükemmel bir tatil geçirdik. Özellikle hizmetin kalitesi ve müşteri memnuniyetine verdikleri önem çok etkileyiciydi. Her şey için teşekkürler!",
    images: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
];

const SingleReview = () => {
  return (
    <>
      {reviews.map((review, index) => (
        <div className="col-md-12" key={index}>
          <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
            <Image
              width={60}
              height={60}
              src="/images/blog/comments-2.png"
              className="mr-3"
              alt="comments-2.png"
            />
            <div className="ml20">
              <h6 className="mt-0 mb-0">{review.name}</h6>
              <div>
                <span className="fz14">{review.date}</span>
                <div className="blog-single-review">
                  <ul className="mb0 ps-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <li className="list-inline-item me-0" key={i}>
                        <a href="#">
                          <i className="fas fa-star review-color2 fz10" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End .d-flex */}

          <p className="text mt20 mb20">{review.text}</p>
          <ul className="mb20 ps-0">
            {review.images.map((image, i) => (
              <li className="list-inline-item mb5-xs" key={i}>
                <Image
                  width={110}
                  height={90}
                  className="bdrs6"
                  src={image}
                  alt="review-img"
                />
              </li>
            ))}
          </ul>

    
        </div>
      ))}

      <div className="col-md-12">
        <div className="position-relative bdrb1 pt30 pb20">
          <a href="#" className="ud-btn btn-white2">
            Tüm Yorumları Göster
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleReview;
