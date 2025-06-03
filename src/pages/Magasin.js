import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

// Corriger les icônes Leaflet par défaut
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Magasin() {
  const [address, setAddress] = useState('40 rue du chemin vert');

  const markers = [
    {
      position: [33.511, -86.818],
      name: 'Carrefour',
      pmr: true,
      canettes: ['Disponible', 'Indisponible', 'Disponible'],
    },
    {
      position: [33.49, -86.82],
      name: 'Auchan',
      pmr: false,
      canettes: ['Disponible', 'Disponible', 'Disponible'],
    },
    {
      position: [33.54, -86.89],
      name: 'Leclerc',
      pmr: true,
      canettes: ['Indisponible', 'Indisponible', 'Disponible'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Trouver un <span className="border-b-4 border-teal-400">magasin</span>
      </h1>

      <label htmlFor="localisation" className="text-gray-600 font-medium mb-2 block">
        Localisation
      </label>
      <input
        id="localisation"
        className="w-full p-3 border border-gray-300 rounded-lg mb-6"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <MapContainer
        center={[33.52, -86.8]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[500px] w-full rounded-lg overflow-hidden"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((m, i) => (
          <Marker key={i} position={m.position}>
            <Popup>
              <div className="font-semibold text-base">{m.name}</div>
              <div className="text-sm mb-2">
                {m.pmr ? 'Accès PMR 🟢' : "Pas d'accès PMR 🔴"}
              </div>
              <ul className="text-sm">
                {m.canettes.map((c, index) => (
                  <li
                    key={index}
                    className={
                      c === 'Disponible' ? 'text-green-600' : 'text-red-500'
                    }
                  >
                    Canette ***** — {c}
                  </li>
                ))}
              </ul>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}