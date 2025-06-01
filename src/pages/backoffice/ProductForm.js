import React from 'react';
import BackOfficeForm from '../../components/BackOfficeForm';

const ProductForm = ({ product, onClose, onSave }) => {
    const fields = [
        { label: 'Titre', name: 'title', type: 'text'},
        { label: 'Description', name: 'description', type: 'textarea' },
        { label: 'Quantité', name: 'quantity', type: 'number', min: '1' },
        { label: 'Prix', name: 'price', type: 'number', step: '0.01', min: '0.01', max: '999.99'},
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
        { label: 'Stock', name: 'stock', type: 'number', step: '0.01', min: '0' },
        { label: 'Activation', name: 'isActivated', type: 'toggle' },
    ];

    return (
        <BackOfficeForm
            initialData={product || {}}
            fields={fields}
            onSave={onSave}
            onClose={onClose}
            title={product?.id ? 'Modifier le produit' : 'Créer un nouveau produit'}
        />
    );
};

export default ProductForm;
