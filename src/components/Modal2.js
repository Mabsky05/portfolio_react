import React from 'react'
import ReactDom from 'react-dom'

const MODAL2_STYLES = {
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
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 5
} 


function Modal2({ open, children, onClose}) {
    if (!open) return null
    
    return ReactDom.createPortal (
    <>
        <div style={OVERLAY_STYLES}/>
        <div style={MODAL2_STYLES}>
            <button onClick={onClose}>x</button> 
        {children}
        </div>
    </>,
    document.getElementById('portal2')
    )
}

export default Modal2