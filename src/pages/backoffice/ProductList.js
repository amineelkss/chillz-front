import React, { useEffect, useState } from 'react';
import BackOfficeTable from '../../components/BackOfficeTable';
import ProductForm from './ProductForm';

import BackofficeLayout from '../../components/layouts/BackOfficeLayout';
import { parseBackendErrors } from '../../components/utils/parseBackendErrors';

const columns = [
    { key: 'title', label: 'Nom du produit' },
];

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error('Erreur récupération produits', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleToggle = async (id) => {
        setProducts(prev =>
            prev.map(p =>
                p.id === id ? { ...p, isActive: !p.isActive } : p
            )
        );

        try {
            await fetch(`${process.env.REACT_APP_API_URL}/backoffice/product/toggle/${id}`,
                { method: 'PATCH',
                    credentials: "include"});
        } catch (error) {
            console.error('Erreur activation/désactivation', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Confirmer la suppression ?')) return;
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, { method: 'DELETE' });
            fetchProducts();
        } catch (error) {
            console.error('Erreur suppression produit', error);
        }
    };

    const handleSave = async (product) => {
        try {
            const method = product.id ? 'PUT' : 'POST';
            const url = product.id ? `${process.env.REACT_APP_API_URL}/backoffice/product/update/${product.id}` : `${process.env.REACT_APP_API_URL}/backoffice/product/new`;

            const res = await fetch(url, {
                method,
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });

            const data = await res.json();
            console.log('TEST',data.errors);
            if (!res.ok) {
                return parseBackendErrors(data);
            }

            setEditingProduct(null);
            fetchProducts();
        } catch (error) {
            console.error('Erreur sauvegarde produit', error);
        }
    };

    return (
        <BackofficeLayout>
            <div className="p-6 max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Gestion des produits</h1>
                    <button
                        onClick={() => setEditingProduct({})}
                        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                    >
                        + Créer un produit
                    </button>
                </div>

                {loading ? (
                    <p>Chargement...</p>
                ) : (
                    <BackOfficeTable
                        data={products}
                        columns={columns}
                        onEdit={setEditingProduct}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    />
                )}

                {(editingProduct !== null) && (
                    <ProductForm
                        product={editingProduct}
                        onClose={() => setEditingProduct(null)}
                        onSave={handleSave}
                    />
                )}
            </div>
        </BackofficeLayout>
    );
};

export default ProductList;
