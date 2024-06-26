'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import styles from './style.module.scss';
import { OrbitControls} from '@react-three/drei';
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const progress = useTransform(scrollYProgress, [0, 0], [5, 5])
    const smoothProgress = useSpring(progress, {damping: 200});

    return (
        // <div ref={container} className='main bg-red-300'>
            <div className="cube border">
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false}/>
                    <ambientLight intensity={3}/>
                    <directionalLight position={[8, 1, 1]}/>
                    <Cube progress={smoothProgress}/>
                </Canvas>
            </div>
        // </div>
    )
}

function Cube({progress}) {

    const mesh = useRef(null);
   
    const options = {
        damping: 10
    }
    
    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options)
    }

    const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e; 
        const x = -0.5 + (clientX / innerWidth)
        const y = -0.5 + (clientY / innerHeight)
        mouse.x.set(x);
        mouse.y.set(y);
    }

    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove)

        return () => window.removeEventListener("mouse", manageMouseMove);
    }, [])

    const texture_1 = useLoader(TextureLoader, "/tissue1.png")
    const texture_2 = useLoader(TextureLoader, "/1.jpeg")
    const texture_3 = useLoader(TextureLoader, "/tissue1.png")
    const texture_4 = useLoader(TextureLoader, "/1.jpeg")
    const texture_5 = useLoader(TextureLoader, "/tissue1.png")
    const texture_6 = useLoader(TextureLoader, "/1.jpeg")

    return (
        <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
            <boxGeometry args={[4.5, 1.5, 2.5]}/>
            <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_4} attach="material-3"/>
            <meshStandardMaterial map={texture_5} attach="material-4"/>
            <meshStandardMaterial map={texture_6} attach="material-5"/>
        </motion.mesh>
    )
}