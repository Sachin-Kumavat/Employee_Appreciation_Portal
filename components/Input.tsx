"use client";

import React from "react";
import "@/styles/input.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export function Input({ icon, error, className = "", ...props }: InputProps) {
  return (
    <div className="input-wrapper">
      {icon && <div className="input-icon">{icon}</div>}
      <input
        className={`input-field ${icon ? "with-icon" : ""} ${error ? "input-error" : ""} ${className}`}
        {...props}
      />
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
}
