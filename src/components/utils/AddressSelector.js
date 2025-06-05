import React, { useEffect, useState } from 'react';

export default function AddressSelector({ addresses = [], onAddressChange }) {
    const [selectedAddressId, setSelectedAddressId] = useState(null);

  // Initialiser la sélection à la première adresse
    useEffect(() => {
        if (addresses.length > 0 && !selectedAddressId) {
            const defaultAddress = addresses[0];
            setSelectedAddressId(defaultAddress.id);
            onAddressChange?.({
                address_title: defaultAddress.title,
                address_content: defaultAddress.content,
            });
        }
    }, [addresses]);

    const handleSelect = (id) => {
        setSelectedAddressId(id);
        const addr = addresses.find(a => a.id === id);
        if (addr) {
            onAddressChange && onAddressChange({
                address_title: addr.title,
                address_content: addr.content,
            });
        }
    };

    return (
        <div className="border p-4 rounded">
            <label className="block text-sm font-medium mb-1">Sélectionnez une adresse</label>
            <select
                value={selectedAddressId || ''}
                onChange={(e) => handleSelect(e.target.value)}
                className="border rounded p-2 w-full"
            >
                {addresses.map(addr => (
                    <option key={addr.id} value={addr.id}>
                        {addr.title} - {addr.content}
                    </option>
                ))}
            </select>
        </div>
    );
}
