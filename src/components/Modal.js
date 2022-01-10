import React from 'react'

export const ModalInput = (props) => {
    return (
        <div className='modalInputWrapper' style={props.style}>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.name} value={props.value}/>
        </div>
    )
}

export default function Modal(props) {
    return (
        <div className='modalWrapper'>
            <div className="modal sectionStyling">
                <h2>{props.title}</h2>
                <div className="modalContent">
                    {props.children}
                </div>
                <div className="modalControls">
                    <button className="primaryButton">Wykonaj</button>
                    <button className="secondaryButton" onClick={props.handleClick}>Anuluj</button>
                </div>
            </div>
        </div>
    )
}
