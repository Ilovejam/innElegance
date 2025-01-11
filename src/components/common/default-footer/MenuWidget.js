import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Kurumsal",
      links: [
        { label: "Anasayfa", href: "home" },
        { label: "Hakkımızda", href: "about" },
        { label: "Kiralık Villalar", href: "grid-default" },
        { label: "Blog", href: "blog-list-v1" },
        { label: "İletişim", href: "contact" },
      ],
    },
    {
      title: "Hızlı Linkler",
      links: [
        { label: "İptal Şartları", href: "#" },
        { label: "Gizlilik Sözleşmesi", href: "#" },
        { label: "Kiralama Sözleşmesi", href: "#" },
        { label: "Ev sahibi sözleşmesi", href: "#" },
        { label: "FAQs", href: "faq" },
      ],
    },
    {
      title: "Hesap",
      links: [
        { label: "Giriş Yap", href: "login" },
        { label: "Üye Ol", href: "register" },
        { label: "Sepet", href: "dashboard-my-favourites" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
