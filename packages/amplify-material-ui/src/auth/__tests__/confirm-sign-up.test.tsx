import * as React from 'react';
import { render } from '@testing-library/react';

import { ConfirmSignUp } from '../confirm-sign-up';
import { withContext } from './helper';

describe('confirm-sign-up', () => {
    it('should be rendered correctly', () => {
        const { asFragment } = render(withContext(<ConfirmSignUp />)());
        expect(asFragment()).toMatchSnapshot();
    });
});
