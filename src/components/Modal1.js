import React from 'react'
import ReactDom from 'react-dom'
import {motion} from 'framer-motion'

const MODAL1_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
} 

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
} 


function Modal1({ open, children, onClose}) {
    if (!open) return null
    
    return ReactDom.createPortal (
    <>
        <motion.div
                        initial={{x: 0, y: 0, opacity: .5}}
                        animate={{x: 0, y: 0, opacity: 1}}
                        transition={{duration: 1}}
                        exit={{x: 50, y: -50, opacity: 0}}
        
        >
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL1_STYLES}>
            <button onClick={onClose}>click here to close modal</button> 
            {children}
            </div>
        </motion.div>
    </>,
    document.getElementById('portal')
    )
}

export default Modal1