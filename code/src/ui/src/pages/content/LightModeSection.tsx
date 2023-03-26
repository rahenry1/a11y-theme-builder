
import React from 'react';

interface Props {
    children?: React.ReactNode;
    title?: string;
    style?: any;
}

export const LightModeSection: React.FC<Props> = ({children, title, style}) => {

    return (
        <div className="lightdarkmode-container" style={style}>
            <h4 style={{marginTop: "10px", marginBottom: "10px"}}>{title || "Light Mode"}</h4>
            {children}
        </div>
    )
}