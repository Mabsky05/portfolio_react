import React from 'react'
import ReactDom from 'react-dom'

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


function Modal({ open, children, onClose}) {
    if (!open) return null
    
    return (
    <>
        <div style={OVERLAY_STYLES}/>
        <div style={MODAL1_STYLES}>
            <button onClick={onClose}>click here to close modal</button> 
        {children}
        </div>
    </>
    )
}

export default Modal