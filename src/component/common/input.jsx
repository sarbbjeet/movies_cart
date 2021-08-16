import React from 'react'

export default function Input(props) {
    const {name,value, handleInput,type='text'} =  props
    return (
        <div className="mb-2">
            <label className="form-label" htmlFor={name}>{name}</label>
            <input name={name} 
             onChange={handleInput} 
             value={value} style={{maxWidth:'300px'}} 
             id={name} className="form-control" type={type} 
             /></div>
    )
}
