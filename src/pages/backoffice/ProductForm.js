import React, { useState, useEffect } from 'react';
import BackOfficeForm from '../../components/BackOfficeForm';

const ProductForm = ({ product, onClose, onSave }) => {
    const [formats, setFormats] = useState(product.formats?.length ? product.formats : [{ title: '', quantity: 1, price: 0.01 }]);

    useEffect(() => {
        if (product?.formats?.length) {
            setFormats(product.formats);
        } else {
            setFormats([{ title: '', quantity: 1, price: 0.01 }]);
        }
    }, [product]);

    const addFormat = () => {
        setFormats([...formats, { title: '', quantity: 1, price: 0.01 }]);
    };

    const updateFormat = (index, field, value) => {
        const updated = [...formats];
        updated[index][field] = field === 'quantity' ? parseInt(value, 10) : field === 'price' ? parseFloat(value) : value;
        setFormats(updated);
    };

    const removeFormat = (index) => {
        const updated = formats.filter((_, i) => i !== index);
        setFormats(updated);
    };

    const handleSave = async (formData) => {
        formData.formats = formats;
        return onSave(formData);
    };

    const fields = [
        { label: 'Titre', name: 'title', type: 'text'},
        { label: 'Description', name: 'description', type: 'textarea' },
        { label: 'Quantité', name: 'quantity', type: 'number', min: '1' },
        { label: 'Ingrédients', name: 'ingredients', type: 'textarea'},
        { label: 'Catégorie', name: 'category', type: 'select', options: ['Afrique', 'Asie', 'Amérique du Sud', 'Australie','Europe']},
        { label: 'Image', name: 'picture', type: 'file', required: true },
        { label: 'Allergènes', name: 'allergens', type: 'textarea' },
        { label: 'Energie', name: 'energy', type: 'number', step: '0.01', min: '0' },
        { label: 'Glucides', name: 'carbohydrates', type: 'number', step: '0.01', min: '0' },
        { label: 'Glucides dont sucres', name: 'carbohydratesSugar', type: 'number', step: '0.01', min: '0' },
        { label: 'Graisses', name: 'fats', type: 'number', step: '0.01' , min: '0'},
        { label: 'Graisses dont sucres', name: 'fatsSaturated', type: 'number', step: '0.01', min: '0' },
        { label: 'Protéines', name: 'proteins', type: 'number', step: '0.01', min: '0' },
        { label: 'Sel', name: 'salt', type: 'number', step: '0.01', min: '0' },
        { label: 'Stooooock', name: 'stock', type: 'number', step: '0.01', min: '0' },
        { label: 'Activation', name: 'isActivated', type: 'toggle' },
    ];

    return (
        <BackOfficeForm
                initialData={product || {}}
                fields={fields}
                onSave={handleSave}
                onClose={onClose}
                title={product?.id ? 'Modifier le produit' : 'Créer un nouveau produit'}
                >
            <>
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto mt-4">
                <h3 className="text-lg font-bold mb-2">Formats</h3>
                {formats.map((format, idx) => (
                    <div key={idx} className="flex items-center gap-4 mb-2">
                        <input
                            type="text"
                            value={format.title}
                            onChange={e => updateFormat(idx, 'title', e.target.value)}
                            placeholder="Ex : Pack de 6"
                            className="border rounded px-2 py-1 w-1/3"
                        />
                        <input
                            type="number"
                            value={format.quantity}
                            min="1"
                            onChange={e => updateFormat(idx, 'quantity', e.target.value)}
                            className="border rounded px-2 py-1 w-1/4"
                            placeholder="Qté"
                        />
                        <input
                            type="number"
                            value={format.price}
                            min="0.01"
                            step="0.01"
                            onChange={e => updateFormat(idx, 'price', e.target.value)}
                            className="border rounded px-2 py-1 w-1/4"
                            placeholder="Prix"
                        />
                        <button
                            onClick={() => removeFormat(idx)}
                            className="text-red-500 text-xl"
                            title="Supprimer le format"
                        >
                            ×
                        </button>
                    </div>
                ))}
                <button
                    onClick={addFormat}
                    className="bg-green-600 text-white px-3 py-1 mt-2 rounded hover:bg-green-700"
                >
                    + Ajouter un format
                </button>
            </div>
        </>
        </BackOfficeForm>
    );
};

export default ProductForm;
