import "./styles.css";

const Header = ({ title = "" }) => {
  return <header className="header_container">{title}</header>;
};

export default Header;
