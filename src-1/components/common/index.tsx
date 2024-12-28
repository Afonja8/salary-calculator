// src/components/common/index.tsx

import React from 'react';

export const Button: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => {
    return <button onClick={onClick}>{label}</button>;
};

export const Input: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ value, onChange }) => {
    return <input type="text" value={value} onChange={onChange} />;
};

// Add more common components as needed