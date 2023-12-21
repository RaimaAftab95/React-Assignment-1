import React from "react";

function Input({ value, onChange, placeholder,onKeyDown }) {
  return <input value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />;
}

export default Input;
