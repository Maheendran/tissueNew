'use client';
import { useEffect, useRef, useState } from 'react';
// import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import {useTransform,useScroll} from 'framer-motion'

const images = [
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",
  "1.jpeg",

]

// export default function Home() {
  
// const gallery = useRef(null);

// const [dimension, setDimension] = useState({width:0, height:0});
// const { scrollYProgress } = useScroll({
//     target: gallery,
//     offset: ['start end', 'end start']
// })
// const { height } = dimension;
// const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
// const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
// const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
// const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

// useEffect( () => {
//     const resize = () => {

//       setDimension({width: window.innerWidth, height: window.innerHeight})

//     }

//     window.addEventListener("resize", resize)

//     // requestAnimationFrame(raf);

//     resize();
//     return () => {

//       window.removeEventListener("resize", resize);

//     }

//   }, [])
//   return (
// //     <div className='w-full h-screen bg-green-300  relative'>
      

// //         <div className='flex gap border'>
// //           {/* <Column  y={y} images={[images[0], images[1], images[2]]}/> */}
// //           {/* <Column y={y2} images={[images[3], images[4], images[5]]}/>
// //           <Column y={y3} images={[images[6], images[7], images[8]]}/>
// //           <Column y={y4} images={[images[9], images[10], images[11]]}/> */}
// //             <div 
// //    className='w-[25%] h-screen bg-blue-800 border z-50'
// //       >
// //       {/* {
// //         images.map( (src, i) => {
      
// //           return <div key={i} className='w-[20vw] h-[20vh] border bottom-2  '>
// //             <Image 
// //             className='w-full h-full'
// //               src={`/${src}`}
// //               alt='image'
// //               fill
// //             />
// //           </div>
// //         })
// //       } */}
// //     </div>
// //         </div>
    
    
// //     </div>

// <div
// className='w-full h-screen bg-red-200'>


// </div>
//   )
// }



// ==========
const Columns = () => {
    const gallery = useRef(null);

const [dimension, setDimension] = useState({width:0, height:0});
const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
})
const { height } = dimension;
const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

useEffect( () => {
    const resize = () => {

      setDimension({width: window.innerWidth, height: window.innerHeight})

    }

    window.addEventListener("resize", resize)

    // requestAnimationFrame(raf);

    resize();
    return () => {

      window.removeEventListener("resize", resize);

    }

  }, [])
    return (
  <>
  <h1 className='text-white bg-white'>hello column</h1>
<div className='w-full h-screen bg-white'>


<div className='w-[25%] h-[100vh] bg-red-300'></div>


</div>
  </>
    )
  }
  
  export default Columns
//   const Column = ({images}) => {
//       return (
//         <div 
//        className='w-[25%] h-screen border bg-blue-800 border z-50'
//           >
//           {/* {
//             images.map( (src, i) => {
          
//               return <div key={i} className='w-[20vw] h-[20vh] border bottom-2  '>
//                 <Image 
//                 className='w-full h-full'
//                   src={`/${src}`}
//                   alt='image'
//                   fill
//                 />
//               </div>
//             })
//           } */}
//         </div>
//       )
//     }
    