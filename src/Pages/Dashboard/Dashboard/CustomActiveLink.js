import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomActiveLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
   
    return (

        <div>
            <Link
            className='w-60 my-2 block'
                style={{ color: match ? "#0052CC" : "" , borderRight: match ? '8px solid': ''}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>

    );
};

export default CustomActiveLink;