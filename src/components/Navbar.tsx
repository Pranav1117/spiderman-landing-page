import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";

const Navbar = () => {
  return (
    <div className="fixed inset-0 z-30 h-[165px] flex justify-between p-8 ">
      <div className="flex gap-10 items-center">
        <Image
          src="/white-logo-spiderman.png"
          height={80}
          width={80}
          alt="spiderman-logo"
          className="cursor-pointer"
        />
        <HamburgerIcon />
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-3">
          <Image src="/flag.png" height={30} width={30} alt="flag" />
          <p>ENG</p>
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
