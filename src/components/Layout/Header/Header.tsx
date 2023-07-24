import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <div className="h-18 bg-gray-800">
            <div className="flex items-center p-4 ml-10 w-l">
                <Link to="/" className="mr-2">
                    WEATHER-APP
                </Link>
            </div>
        </div>
    );
};
