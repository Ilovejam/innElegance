const Faq1 = () => {
  const faqItems = [
    {
      id: "headingOne",
      question: "Giriş-Çıkış Saatleri nedir?",
      answer:
        "Giriş saati öğleden sonra 16.00, çıkış saati sabah 10.00’dır. Bu süre zarfında villamızın temizlik süreci gerçekleştirilmektedir.",
    },
    {
      id: "headingTwo",
      question: "Çocuklar kişi sayısına dahil mi?",
      answer:
        "2 yaş ve üzerindeki herkes, villada konaklayacak kişi sayısına dahildir ve villaların web sitemizde belirtilen kişi kapasitesinden fazla kişinin konaklamasına (kapasite aşımına) izin verilmez.",
    },
    {
      id: "headingThree",
      question: "Villalarda temizlik süreci nasıl işliyor ?",
      answer:
        "Fiyata dahil olan giriş temizliğidir. Müşteri eve giriş yapmadan önce detaylı bir temizlik yapılmakta olup, temiz nevresim takımı, yastık kılıfı ve havlular bırakılır.Ekstra temizlik isteyen müşterilerimiz için ücrete tabidir.Bir hafta üstü konaklamalar için, hafta bitiminde ücretsiz olarak temizlik hizmeti verilmekte olup, hafta olarak devam etme zorunluluğu bulunmaktadır.",
    },
    {
      id: "headingFour",
      question: "Fiyata Neler Dahil, Neler Dahil Değildir?",
      answer:
        "Fiyata dahil olanlar; su kullanım ücreti, elektrik, tüpgaz, giriş temizliği, bahçe ve havuz bakımları.Fiyata dahil olmayanlar; Yiyecek ve içecek, sabun ve şampuan, çamaşır ve bulaşık deterjanı, tuvalet ve havlu peçeteleri.",
    },
    {
      id: "headingFife",
      question: "Kiraladığımız Villamıza Ulaşımı Nasıl Sağlayacağız?",
      answer:
        "Ücretli taşıma araçları ile ulaşımı sağlayabilirsiniz.Villam 365 ile iletişime geçtiğiniz takdirde havalimanı transferi ve ulaşım hizmeti alabilirsiniz. Müşteri taleplerine göre, araç kiralama ve transfer hizmetleri konusunda yardımcı olabileceğimiz güvenilir iş ortaklarıyla çalışmaktayız.",
    },
    {
      id: "headingSix",
      question: "Hasar Depozito nedir ve nasıl işler?",
      answer:
        " Hasar Depozito, 500 TL ile 1000 TL arasında villaya göre değişmektedir.Giriş esnasında tahsil edilen ücret; villa da herhangi bir hasar, kayıp ve zarar görülmediği takdirde çıkış gününde geri iade edilir.",
    },
    {
      id: "headingSeven",
      question: "Teknik Arızalarda Ne Yapmalıyım?",
      answer:
        "Müdahalede bulunmadan bizlerle iletişime geçiniz.Ev sahiplerinin 24 saat içinde soruna müdahale etmesi gerekmektedir.",
    },
    {
      id: "headingEight",
      question: "Kış aylarında da villa da tatil yapabilir miyim?",
      answer:
        "Misafirlerimizin yazın olduğu gibi kışında rahatlıkla tatil yapabilmeleri için kış aylarına uygun konseptte birçok villamızla hizmet vermekteyiz.Isıtmalı iç veya dış havuzlu villalarımız, yerden ısıtma sistemi, sauna, hamam ve şömineli gibi özelliklere sahip villalarımız sayesinde misafirlerimiz kış aylarında da diledikleri tatili yapabilmektedir.",
    },
    {
      id: "headingNine",
      question: "Rezervasyon için ön ödemememi hangi yöntemlerle yapabilirim?",
      answer:
        "Rezervasyon ön ödeme tutarınızı havale veya kredi kartınız ile rahatlıkla ödeyebilirsiniz. Anlaşmalı banka kartlarına özel sağladığımız taksit imkanları sayesinde ödeme kolaylığından da faydalanabilirsiniz.Yurtdışından ödeme yapmak isteyen misafirlerimiz için Western Union, yurt dışı havale ve mail order yöntemlerimiz de bulunmaktadır.",
    },
    {
      id: "headingTen",
      question: "Rezervasyonumun kalan bakiye tutarını ne zaman ödemeliyim?",
      answer:
        "Misafirlerimiz, toplam rezervasyon tutarından kalan bakiyeyi villaya girişte villa sahibine/görevlisine nakit olarak ödeyebilirler.Villaya girişlerinde sizlere daha hızlı ve iyi bir şekilde hizmet verebilmek için misafirlerimizin hazırlıklı gelmelerini önemle rica ediyoruz.",
    },
    {
      id: "headingEleven",
      question: "Fatura kesiyor musunuz?",
      answer:
        "VİLLAM 365 olarak T.C devletinin belirlemiş olduğu yasa ve prosedürlere göre misafirlerimizin çıkış gününde komisyon miktarımız kadar fatura kesmekteyiz.Geri kalan tutarı ev sahipleri misafirlerimize faturalandırmaktadır.",
    },
    {
      id: "headingTwelwe",
      question: "Belirtilen fiyatlar kişi başı mıdır?",
      answer:
        "Web sitemizde yer alan günlük ve haftalık fiyatlar, villamızın toplam kiralama bedelidir. Belirtilen maksimum kişi kapasitesine uygun olarak misafirlerimiz bu tutar üzerinden ödeme yapar.Villalarda ekstra kişi ile konaklamak isteyen misafirlerimiz, mülk sahibinden onay almalıdır. Onay alınması halinde ekstra ücretle konaklama yapılabilmektedir.",
    },
    {
      id: "headingThirteen",
      question: "Tek kişinin kimlik bilgileri ile villa kiralanabilir mi?",
      answer:
        "Rezervasyonunuzun oluşabilmesi için tek kişinin kimlik bilgileri yeterli olmaktadır.Diğer konukların kimlik bilgileri ise rezervasyon onaylandıktan sonra son bir mail gelecektir kalacak kişileri bildir butonu mevcuttur oraya tıklıyarak diğer kişilerin bilgilerini girmeniz gerekmektedir villaya varışta villa sahibi veya görevlisi tarafından alınacaktır.",
    },
    {
      id: "headingFourteen",
      question: "Depozito Ücreti İade Ediliyor mu?",
      answer:
        "Hasar depozitosu, konukların villaya giriş yaparken villa sahiplerine nakit olarak ödemeleri gereken bir tutardır ve villada oluşabilecek herhangi bir hasar veya zarara karşı önlem amaçlı alınır.Konaklama sonunda villada herhangi bir hasar olmaması durumunda bu tutar konuklara iade edilir.",
    },
    {
      id: "headingFifeteen",
      question: "Minimum kiralama süresi ne kadardır?",
      answer:
        "Genel olarak sezonda ve bayram haftalarında bu süre 7 gece 7 gün olmak şartı ile villalar kiralanmaktadır.Ancak bazı villalarda bu süre değişiklik gösterebilir. Villalarımızda dolu tarihlerin arasında kalan kısa süreler için ekstra olarak kampanyalar düzenleyip müşterilerimizi sitemiz üzerinden haberdar etmekteyiz.Bunlar dışında minimum kiralama süresi her villa/apart ya da yazlık için 7 gün 7 gece olarak belirlenmiştir.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={item.id}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index + 1}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={item.id}
            data-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq1;
