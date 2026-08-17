import React from 'react'

export default function Button({
    label,
    children,
    type = 'button',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-3xl transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {label || children}
        </button>
    )
}