import Image from "next/image";
import Banner from "./pages/banner/Banner";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import MianFooter from '@/app/pages/Footer/Page'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between ">
    <Navbar/>
    <Banner/>
{/* <Footer/> */}
<MianFooter/>
    </main>
  );
}
