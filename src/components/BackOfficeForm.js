import React, { useState, useEffect } from 'react';
import ToggleSwitch from './utils/ToggleSwitch';

const MAX_FILE_SIZE = 10 * 1024 * 1024

const BackOfficeForm = ({ initialData = {}, fields, onClose, onSave, title }) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const initial = { ...initialData }; // Inclut id et autres champs

        // Ajout d'une valeur par défaut pour les toggles manquants
        fields.forEach(({ name, type }) => {
            if (initial[name] === undefined && type === 'toggle') {
                initial[name] = false;
            }
        });

        setFormData(initial);
    }, [initialData, fields]);

    const handleChange = (e, name) => {
        if (e.target.type === 'file') {
            const file = e.target.files[0];
            if (file) {
                if (file.size > MAX_FILE_SIZE) {
                    alert('Le fichier est trop volumineux (max 10 Mo)');
                    return;
                }
                setFormData(prev => ({
                    ...prev,
                    [name]: file,
                }));
            }
        } else {
            let value = e.target.value;

            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const result = await onSave(formData);
        if (result) {
            setErrors(result);
        } else {
            setErrors({});
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 min-h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-auto"
            >
                <h2 className="text-xl font-semibold mb-4">{title}</h2>

                {fields.map(({ name, label, type, step, options, min, max, required/* required */ }) => (
                    <label key={name} className="block mb-4">
                        {label}
                        {type === 'textarea' ? (
                            <textarea
                                value={formData[name] || ''}
                                onChange={e => handleChange(e, name)}
                                required={required}
                                className="mt-1 w-full border rounded px-3 py-2"
                            />
                        ) : type === 'toggle' ? (
                            <ToggleSwitch
                                isOn={formData[name] ?? false}
                                handleToggle={() => handleChange({ target: { value: !formData[name]  } }, name)}
                            />
                        ) : type === 'file' ? (
                            <input
                                type="file"
                                accept="image/png, image/jpeg, image/jpg"
                                required={required}
                                onChange={e => handleChange(e, name)}
                                className="mt-1 w-full border rounded px-3 py-2"
                            />

                        ) : type === 'select' ? (
                            <select
                                value={formData[name] || ''}
                                onChange={e => handleChange(e, name)}
                                required={required}
                                className="mt-1 w-full border rounded px-3 py-2"
                            >
                                <option value="">-- Choisir --</option>
                                {options.map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={type || 'text'}
                                value={formData[name] || ''}
                                onChange={e => handleChange(e, name)}
                                step={step}
                                min={min}
                                max={max}
                                /*required={required}*/
                                className="mt-1 w-full border rounded px-3 py-2"
                            />
                        )}
                        {errors[name] && (
                            <p className="text-red-500 text-sm mt-1">{errors[name].join(', ')}</p>
                        )}
                    </label>
                ))}

                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                    >
                        Annuler
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded bg-pink-600 text-white hover:bg-pink-700"
                    >
                        Enregistrer
                    </button>
                    {errors.general && (
                        <p className="text-red-500 text-sm mt-2 text-center">{errors.general}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default BackOfficeForm;
