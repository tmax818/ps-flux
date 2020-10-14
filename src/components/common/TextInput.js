import React from 'react';

function TextInput(props) {
    let wrapperClass = "form-group";
    if (props.error && props.error.length) {
        wrapperClass += " has-error";
    }
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    onChange={props.onChange}
                    className="form-control"
                    value={props.value}
                />
            </div>
    {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    )
}

export default TextInput;