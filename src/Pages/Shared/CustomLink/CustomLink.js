import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{ color: match ? 'darkblue' : '', textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;