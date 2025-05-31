import React from 'react';

const ToggleSwitch = ({ isOn = false, handleToggle }) => {
    return (
        <label className="relative inline-block w-12 h-6 cursor-pointer">
            <input
                type="checkbox"
                checked={isOn}
                onChange={handleToggle}
                className="opacity-0 w-0 h-0"
            />
            <span
                className={`absolute top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-300
          ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
            ></span>
            <span
                className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300
          ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
            ></span>
        </label>
    );
};

export default ToggleSwitch;
