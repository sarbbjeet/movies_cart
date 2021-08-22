import React from 'react'

export default function Input(props) {
    const {name,label,value, errors, handleInput,type} =  props
    return (
        <div className="mb-2">
            <label className="form-label" htmlFor={name}>{label}</label>
            <input name={name}
            autoComplete="off"
             onChange={handleInput} 
             value={value} style={{maxWidth:'300px'}} 
             id={name} className="form-control" type={type} 
             />
             {errors && <div className="mt-2" style={{backgroundColor:'rgba(200,100,0,0.3)' , maxWidth:'300px'}}>{errors[name]}</div>}
             </div>
    )
}