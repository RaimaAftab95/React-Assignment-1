import React from "react";

function Input({ value, onChange, placeholder,onKeyDown }) {
  return <input  className="input-box-todo" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />;
}

export default Input;
