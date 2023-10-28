import React from "react";

const InputType = (props) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor="exampleInputEmail1" className="form-label">
          {props.labelText}
        </label>
        <input
          type={props.inputType}
          className="form-control"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};

export default InputType;
