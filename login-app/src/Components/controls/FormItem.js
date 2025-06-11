import React from "react";

function FormItem({
  label,
  type,
  value,
  onChange,
  placeholder,
  className = "",
}) {
  return (
    <div className={`form-item ${className}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormItem;
