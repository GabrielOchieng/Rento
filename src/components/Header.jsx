import backgroundImg from "../../public/assets/images/backgroundImg.jpg";

const Header = () => {
  return (
    <div
      className="header  bg-cover bg-no-repeat bg-center h-96 text-center flex flex-col justify-center gap-3"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <h1 className="text-white text-6xl font-bold ">DISCOVER YOUR NEW HOME</h1>
      <p className="text-white text-lg text-center font-bold">
        Helping Thousands of renters find their perfect home.
      </p>
      <div className="flex justify-center gap-3">
        <input
          type="text"
          placeholder="Nairobi"
          className="ml-3 outline-none p-3 h-12 rounded-sm border-green-400 border w-96"
        />
        <label
          htmlFor="search"
          className="bg-green-400 text-white font-bold text-xl p-2 h-12 rounded-sm hover:bg-green-900"
        >
          Search
        </label>
      </div>
    </div>
  );
};

export default Header;
