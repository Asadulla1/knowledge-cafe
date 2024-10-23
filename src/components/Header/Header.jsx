import profile from "../../../images/profile.png";
const Header = () => {
  return (
    <header className="md:flex justify-between p-4 my-5 border-b border-gray-300">
      <h1 className="text-4xl font-extrabold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
