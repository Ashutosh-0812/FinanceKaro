import React, { useState } from 'react';

interface EditableFieldProps {
  value: string | number;
  onSave: (value: string | number) => void;
  type?: 'text' | 'number';
  className?: string;
}

export function EditableField({ value, onSave, type = 'text', className = '' }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(inputValue);
    setIsEditing(false);
  };

  return isEditing ? (
    <div className="flex items-center gap-2">
      <input
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(type === 'number' ? parseFloat(e.target.value) : e.target.value)}
        className={`border rounded px-2 py-1 ${className}`}
        autoFocus
      />
      <button onClick={handleSave} className="text-green-500">
        ✓
      </button>
      <button onClick={() => setIsEditing(false)} className="text-red-500">
        ✕
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <span className={className}>{value}</span>
      <button onClick={() => setIsEditing(true)} className="text-gray-500 hover:text-gray-700">
        🖉
      </button>
    </div>
  );
}