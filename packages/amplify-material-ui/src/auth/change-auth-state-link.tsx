import * as React from 'react';
import { Link } from '@material-ui/core';

import { useAuthContext } from './auth-context';

export interface ChangeAuthStateLinkProps {
    label: string;
    newState: string;
    authData?: any;
    [key: string]: any;
}

export const ChangeAuthStateLink: React.FC<ChangeAuthStateLinkProps> = props => {
    const { label, newState, authData, ...rest } = props;

    const { handleStateChange } = useAuthContext();

    return (
        <Link
            href="#"
            onClick={(): void => handleStateChange(newState, authData)}
            variant="body2"
            {...rest}
        >
            {label}
        </Link>
    );
};
