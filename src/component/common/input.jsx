import { kMaxLength } from 'joi-browser'
import React from 'react'

export default function Input(props) {
    const {name,label,errors,style1, ...rest} =  props
    return (
        <div className="mb-2">
            <label className="form-label" htmlFor={name}>{label}</label>
            <input name={name}
             id={name} className="form-control"
             autoComplete="off"
             style={{...style1, maxWidth:'300px'}} 
             {...rest}
             //type={type} 
             //value={value} 
             //onChange={OnChange}
             />
             {errors && <div className="mt-2" style={{backgroundColor:'rgba(200,100,0,0.3)' , maxWidth:'300px'}}>{errors[name]}</div>}
             </div>
    )
}
