import React from 'react'

export default function Input({
    type = 'text',
    placeholder,
    label,
    className = '',
    value,
    onChange,
    checked,
    ...props
}) {
    // Extracted shared classes to avoid duplication
    const baseClasses = `bg-[#F5F5FF] border border-[#bbbbbd] rounded-3xl p-3 px-4 font-["lato"] w-full outline-none focus:ring-2 focus:ring-gray-400 ${className}`;

    // 1. Textarea Element
    if (type === 'textarea') {
        return (
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${baseClasses} resize-none`}
                {...props}
            />
        );
    }

    // 2. Checkbox & Radio Elements
    if (type === 'checkbox' || type === 'radio') {
        return (
            <label className={`flex items-center gap-2 font-["lato"] text-[#727272] cursor-pointer select-none ${className}`}>
                <input
                    type={type}
                    checked={checked}
                    value={value}
                    onChange={onChange}
                    className="w-4 h-4 accent-[#FF357D] cursor-pointer"
                    {...props}
                />
                {label && <span>{label}</span>}
            </label>
        );
    }

    // 3. Standard Text Input Elements
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={baseClasses}
            {...props}
        />
    );
}