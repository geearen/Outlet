import * as FaIcons from 'react-icons/fa'

export const NavbarData = [
  {
    title: "Outlet",
    pathname: "",
    hash: "#about-outlet",
    className: "nav-item",
  },
  {
    title: "The Devs",
    pathname: "",
    hash: "#developers",
    className: "nav-item",
  },
  {
    title: "Draw",
    pathname: "/canvas",
    hash: "",
    icon: <FaIcons.FaPencilAlt />,
    className: "nav-item",
  },
];