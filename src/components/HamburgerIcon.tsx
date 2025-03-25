import { useEffect, useState } from "react";

const HamburgerIcon = () => {
  const [size, setSize] = useState(20); // Default size for mobile

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth > 768 ? 30 : 20);
    };

    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0,0,256,256"
      className="cursor-pointer"
    >
      <g
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(6.4,6.4)">
          <path d="M1.5,18.5h37v3h-37z"></path>
          <path d="M38,19v2h-36v-2h36M39,18h-38v4h38v-4z"></path>
          <path d="M1.5,8.5h37v3h-37z"></path>
          <path d="M38,9v2h-36v-2h36M39,8h-38v4h38v-4z"></path>
          <g>
            <path d="M1.5,28.5h37v3h-37z"></path>
            <path d="M38,29v2h-36v-2h36M39,28h-38v4h38v-4z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default HamburgerIcon;
