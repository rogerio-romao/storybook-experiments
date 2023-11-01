import React, { useState } from 'react';

import './checkbox.css';

interface CheckboxProps {
    label: string;
    labelPosition?: 'left' | 'right';
    defaultChecked: boolean;
}

export const Checkbox = ({
    label,
    labelPosition = 'left',
    defaultChecked = true,
    ...props
}: CheckboxProps) => {
    const [checked, setChecked] = useState(defaultChecked);
    return (
        <div className='checkbox'>
            {labelPosition === 'left' ? (
                <label htmlFor='check'>{label}</label>
            ) : undefined}
            <input
                type='checkbox'
                id='check'
                checked={checked}
                {...props}
                onChange={() => setChecked(!checked)}
            />
            {labelPosition === 'right' ? (
                <label htmlFor='check'>{label}</label>
            ) : undefined}
        </div>
    );
};
