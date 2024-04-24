"use client"
import { useRef } from "react";
import { IoMenu  ,IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";
import Link from "next/link";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {

		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	     

	return (
		<header className="bg-white border px-2 z-[100000000] text-black h-[10vh] fixed top-0 left-0 w-full flex justify-between" >
	<Link
			className="my-auto"
    href={"/"}
                >
			<img src="/logo2.png" className="my-auto  bg-transparent" style={{width:'2.5rem',height:"2.7rem"}} alt="" />
				
                </Link>

			<nav ref={navRef} className=" bg-white flex gap-5 px-3 sm:w-100  h-full z-50  ">
			<Link
			className="my-auto bg-transparent"
    href={"/product-lisiting"}
                >
				  Products
                </Link>


				
			
				<Link
				className="my-auto  bg-transparent"
            href={"/about"}
                >
				  About
                </Link>
			
				<Link
				className="my-auto  bg-transparent"
        	    href={"/story"}
                >
				  Story
                </Link>
				<Link
				className="my-auto  bg-transparent"
        	    href={"/contact-us"}
                >
				  Contact
                </Link>
				
				{/* <button
					className="nav-btn  nav-close-btn"
					onClick={showNavbar}>
			<IoCloseSharp  style={{width:"2.5rem",height:"3rem",color:"white"}}/>
				</button> */}
			</nav>
			<button
				className=" nav-btn w-fit h-full  z-0 sm:hidden"
				onClick={showNavbar}>
		<IoMenu style={{width:"2.3rem",height:"3rem"}}/>
			</button>
		</header>
	);
}

export default Navbar;