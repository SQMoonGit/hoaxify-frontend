import React from "react";

const Input = (props) => {
  let inputClassName = "form-control";
  if (props.hasError !== undefined) {
    inputClassName += props.hasError === false ? " is-valid" : " is-invalid";
  }

  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input
        className={inputClassName}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></input>
      {props.hasError && (
        <span className="invalid-feedback">{props.error}</span>
      )}
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
