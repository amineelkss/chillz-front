import React from 'react';
import ToggleSwitch from './utils/ToggleSwitch.js';

const BackOfficeTable = ({ data, columns, onEdit, onDelete, onToggle }) => {
    return (
        <table className="w-full text-left border-collapse">
            <thead>
            <tr>
                {columns.map(col => (
                    <th key={col.key} className="border-b p-2">{col.label}</th>
                ))}
                <th className="border-b p-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.length === 0 ? (
                <tr>
                    <td colSpan={columns.length + 1} className="p-4 text-center">
                        Aucun résultat
                    </td>
                </tr>
            ) : (
                data.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50">
                        {columns.map(col => (
                            <td key={col.key} className="border-b p-2">
                                {col.render ? col.render(item[col.key], item) : item[col.key]}
                            </td>
                        ))}
                        <td className="border-b p-2 space-x-4">
                            {onEdit && (
                                <button
                                    onClick={() => onEdit(item)}
                                    className="text-blue-600 hover:underline"
                                    title="Modifier"
                                >
                                    ✏️
                                </button>
                            )}
                            {onDelete && (
                                <button
                                    onClick={() => onDelete(item.id)}
                                    className="text-red-600 hover:underline"
                                    title="Supprimer"
                                >
                                    🗑️
                                </button>
                            )}
                            {onToggle && (
                                <ToggleSwitch
                                    isOn={item.isActive}
                                    handleToggle={() => onToggle(item.id)}
                                />
                            )}
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    );
};

export default BackOfficeTable;
