import React from 'react';
import './App.css';
import { motion } from "framer-motion"
import images from './images';
import { useEffect, useState, useRef } from 'react';

const App = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <>
      <h1 className='heading'>React Framer Motion</h1>
      <motion.div ref={carousel} className="motion__carousel" whileTap={{ cursor: 'grabbing' }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="motion__innercarousel">
          {
            images.map((image) => {
              return (
                <motion.div key={image} className='motion__items'>
                  <img src={image} />
                </motion.div>
              )
            })
          }
        </motion.div>
      </motion.div>
    </>
  )
}


export default App