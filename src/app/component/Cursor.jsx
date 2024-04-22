"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const updateCursor = (e) => {
      gsap.to(cursor, {
        duration: 1,
        x: e.pageX * 2 - 50 + '%',
        y: e.pageY * 2 - 50 + '%',
        ease: 'power3.out',
      });
      cursorDot.style.top = e.pageY + 'px';
      cursorDot.style.left = e.pageX + 'px';
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('cursorBlock');
      cursor.classList.add('cursorNone');
      cursorDot.classList.remove('cursorBlock');
      cursorDot.classList.add('cursorNone');
    };

    const handleMouseOver = () => {
      cursor.classList.remove('cursorNone');
      cursor.classList.add('cursorBlock');
      cursorDot.classList.remove('cursorNone');
      cursorDot.classList.add('cursorBlock');
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursorDot" ref={cursorDotRef}></div>
    </>
  );
};

export default Cursor;
