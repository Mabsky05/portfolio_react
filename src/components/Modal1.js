import React from 'react'
import ReactDom from 'react-dom'
import {motion} from 'framer-motion'

const MODAL1_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 10
} 

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 5
} 


function Modal1({ open, children, onClose}) {
    if (!open) return null
    
    return ReactDom.createPortal (
    <>
        <motion.div className='hidden md:flex font-expletus text-3xl text-gray-300'
                        initial={{x: 0, y: 0, opacity: .5}}
                        animate={{x: 0, y: 0, opacity: 1}}
                        transition={{duration: 1}}
                        exit={{x:0, y:0, opacity: 0}}
        
        >
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL1_STYLES}>
            <button onClick={onClose}>x</button> 
            {children}
            </div>
        </motion.div>
    </>,
    document.getElementById('portal')
    )
}

export default Modal1