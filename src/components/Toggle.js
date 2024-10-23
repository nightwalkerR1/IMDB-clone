import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
// import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const [ theme, setTheme ] = React.useState('light')

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    
                    className="text-blue-500 dark:text-blue-400 text-2xl cursor-pointer"
                />
            ) : (
                    <FaMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-blue-500 dark:text-blue-400 text-2xl cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;