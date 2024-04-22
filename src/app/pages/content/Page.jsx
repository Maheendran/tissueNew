'use client';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

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
]

export default function Page() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 5.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {


    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
  
    resize();

    // return () => {
    //   window.removeEventListener("resize", resize);
    // }
  }, [])

  return (
    <main className="main  overflow-hidden relative">
      {/* <div className="spacer">
        <h1>HELLO</h1>
      </div> */}
      <div ref={gallery} className="gallery bg-white w-[100vw] h-[100vh] ">
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
        {/* <Column images={[images[0], images[1], images[2]]} y={y}/> */}
   
      </div>
   
    </main>
  )
  
}

const Column = ({ images, y }) => {
  return (
    <motion.div 
      className="column " // Changed className to use CSS class name
      style={{ y }}
    >
      {
        images.map((src, i) => {
          return (
            <div key={i} className="imageContainer"> {/* Changed className to use CSS class name */}
              <Image 
                src={`/${src}`}
                alt='image'
                fill
              />
            </div>
          );
        })
      }
    </motion.div>
  );
}
