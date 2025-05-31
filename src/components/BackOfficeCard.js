import { Link } from 'react-router-dom';

const BackofficeCard = ({ to, title, description }) => (
    <Link
        to={to}
        className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center hover:shadow-pink-400 transition-shadow duration-300"
    >
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">{title}</h2>
        <p className="text-pink-600/90 text-center">{description}</p>
    </Link>
);

export default BackofficeCard;
