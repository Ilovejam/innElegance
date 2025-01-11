module.exports = [
  {
    label: "Anasayfa",
    subMenu: [
      
      { path: "/", label: "Home " },

    ],
  },
  {
    label: "Villalar",
    subMenu: [
      {
        label: "Antalya",
        subMenu: [
          { label: "Grid Default", path: "/grid-default" },
        
         
        ],
      },
      {
        label: "Muğla",
        subMenu: [
          { label: "Grid Default", path: "/grid-default" },
        
         
        ],
      },
     
      
    ],
  },
  {
    label: "Yönetim",
    subMenu: [
      { label: "Yönetici Paneli", path: "/dashboard-home" },
      { label: "Mesaj", path: "/dashboard-message" },
      { label: "Yeni Mülk Ekle ", path: "/dashboard-add-property" },
      { label: "Mülklerim", path: "/dashboard-my-properties" },
      { label: "Sepet", path: "/dashboard-my-favourites" },
      { label: "Yorumlar", path: "/dashboard-reviews" },
      { label: "Profilim", path: "/dashboard-my-profile" },
    ],
  },

  {
    label: "Blog",
    subMenu: [
      { path: "/blog-list-v1", label: "Blog List V1" },
 
    ],
  },

  {
    label: "Hakkımızda",
    subMenu: [
      { path: "/about", label: "Hakkımızda" },
      { path: "/faq", label: "SSS" },
      { path: "/login", label: "Giriş Yap" },
      { path: "/register", label: "Kayıt Ol" },
      { path: "/404", label: "404" },
    ],
  },
];
