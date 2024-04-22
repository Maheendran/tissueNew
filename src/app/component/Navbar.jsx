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
		<header className="bg-white border z-[100000000] text-black h-[15vh] fixed top-0 left-0 w-full flex justify-between" >
	<Link
			className="my-auto"
    href={"/"}
                >
			<img src="/logo.png" className="my-auto mx-3" style={{width:'2.3rem',height:"2.5rem"}} alt="" />
				
                </Link>

			<nav ref={navRef} className="flex gap-5 px-3 sm:w-100  h-full z-50  ">
			<Link
			className="my-auto"
    href={"/product-lisiting"}
                >
				  Products
                </Link>


				
			
				<Link
				className="my-auto"
            href={"/about"}
                >
				  About
                </Link>
			
				<Link
				className="my-auto"
        	    href={"/about"}
                >
				  Sustainability
                </Link>
				<Link
				className="my-auto"
        	    href={"/about"}
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