const Header = () => {
  return (
    <div>
      <div className="flex justify-between  px-16 border bg-gray-400 h-24 items-center shadow-md">
        <div>
          <h1 className="font-bold text-3xl">Rabin Pant</h1>
        </div>
        <div className="space-x-4">
          <a href="" className="hover:text-orange-500">
            Home
          </a>
          <a href="" className="hover:text-orange-500">
            About
          </a>
          <a href="" className="hover:text-orange-500">
            Skills
          </a>
          <a href="" className="hover:text-orange-500">
            Portfolio
          </a>
          <a href="" className="hover:text-orange-500">
            Contact
          </a>
        </div>
        <div>
          <button className="border-none bg-orange-500 rounded-full p-2 font-bold shadow-md">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
