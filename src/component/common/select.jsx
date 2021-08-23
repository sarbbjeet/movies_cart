import React from 'react'

export default function Select(props) {
    const {name,label, options, errors, style1, ...rest} = props
    return (
        <div className="form-group mb-2">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} 
             {...rest}   //pass value and other arugments 
            style={{...style1, maxWidth:'300px'}}
             className="form-control">
                <option value=""/>
                    { 
                    options.map(option => <option key ={option._id} 
                        value={option._id}>{option.name}</option>)      
                    } 
            </select>
            <div>
            {errors && <div className="mt-2" style={{backgroundColor:'rgba(200,100,0,0.3)' , maxWidth:'300px'}}>{errors[name]}</div>}
             </div>
        </div>
    )
}
