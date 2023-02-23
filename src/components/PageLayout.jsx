import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: duration },
  },
}

export default function PageLayout({ children }) {
    return (
        <AnimatePresence mode='wait'>
            <motion.main
                key={children.props.path}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.main>
        </AnimatePresence>
    )
}