import { Link } from "react-router";

export const Navbar = () => {
  const menuItems = [
    { title: "Home", slug: "/" },
    { title: "About", slug: "/about" },
    { title: "Contact Us", slug: "/contact" },
  ];

  return (
    <div>
      {menuItems.map((menuItem) => (
        <Link to={menuItem.slug}>{menuItem.title}</Link>
      ))}
    </div>
  );
};
