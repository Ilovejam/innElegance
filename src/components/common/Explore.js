import Image from "next/image";
import Link from "next/link";
import "@/styles/scss/main.scss";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/villa.png",
      title: "Özel Villa Tatili Deneyimi",
      text: "Ege ve Akdeniz’in en güzel bölgelerinde, tamamen size ait, huzurlu ve konforlu bir villa tatili yaşayın. Her biri özenle seçilmiş lüks villalarımızla, unutulmaz bir tatil için en doğru adrestesiniz.",
      linkText: "Keşfet",
    },
    {
      id: 2,
      icon: "/images/icon/man.png",
      title: "Size Özel Seçenekler",
      text: "Ailenizle, arkadaşlarınızla veya romantik bir kaçamak için aradığınız her türde villayı kolayca bulun. Geniş portföyümüz ve profesyonel ekibimizle tatilinizin her anında yanınızdayız.",
      linkText: "Keşfet",
    },
    {
      id: 3,
      icon: "/images/icon/trust.png",
      title: "Güvenilir Rezervasyon ve Hizmet",
      text: "Tatil planlarınızı stressiz hale getiren güvenilir rezervasyon sürecimiz ile hem tatil öncesinde hem de tatil süresince kesintisiz destek sağlıyoruz. Sadece keyfini çıkarın!",
      linkText: "Keşfet",
    },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style2 text-center">
            <div className="icon">
              <Image width={150} height={150} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <Link href="/grid-default" className="ud-btn btn-white2">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
