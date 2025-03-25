import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [size, setSize] = useState(20);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth > 768 ? 30 : 20);
    };

    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="fixed inset-0 z-30 h-[135px] md:h-[165px] flex justify-between p-4 md:p-8 ">
      <div className="flex gap-6 md:gap-10 items-center">
        <Image
          src="/white-logo-spiderman.png"
          height={size}
          width={size}
          alt="spiderman-logo"
          className="cursor-pointer"
        />
        <HamburgerIcon />
      </div>
      <div className="flex gap-6 md:gap-10 items-center">
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
