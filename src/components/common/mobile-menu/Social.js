const Social = () => {
  const socialLinks = [
    {
      id: 1,
      iconClass: "fab fa-facebook-f",
      href: "https://www.facebook.com/Villam365com",
    },
    {
      id: 2,
      iconClass: "fab fa-twitter",
      href: "#",
    },
    {
      id: 3,
      iconClass: "fab fa-instagram",
      href: "https://www.instagram.com/Villam365com/",
    },
    {
      id: 4,
      iconClass: "fab fa-linkedin-in",
      href: "https://www.linkedin.com/company/Villam365",
    },
  ];

  return (
    <>
      {socialLinks.map((link) => (
        <a className="me-3" href={link.href} key={link.id}>
          <i className={link.iconClass}></i>
        </a>
      ))}
    </>
  );
};

export default Social;
