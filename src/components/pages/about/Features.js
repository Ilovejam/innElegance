const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Rezervasyon Hizmetleri",
      description:
        "Villam365 ekibi, rezervasyon sürecinizde size en uygun villa seçeneklerini sunarak bütçenize, zevkinize ve ihtiyaçlarınıza göre alternatifler hazırlar. Sorularınızın tümüne eksiksiz cevap vererek güvenilir bir tatil deneyimi sağlıyoruz.",
    },
    {
      icon: "flaticon-keywording",
      title: "Misafir Hizmetleri",
      description:
        "Tatiliniz boyunca ve sonrasında Villam365 ekibi olarak her zaman yanınızdayız. Tatil sürecinizin en keyifli şekilde geçmesi için misafir memnuniyetini ön planda tutarak hizmet sunuyoruz.",
    },
    {
      icon: "flaticon-investment",
      title: "Portföy Genişliği",
      description:
        "Villam365, Ege ve Akdeniz'in en güzel ilçelerinde yer alan geniş bir villa portföyüne sahiptir. Tatil anlayışınızı güvenilir ve keyifli hale getirmek amacıyla portföyümüzü sürekli olarak genişletiyoruz.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
