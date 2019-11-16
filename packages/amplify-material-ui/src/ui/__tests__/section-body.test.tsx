import * as React from 'react';
import { render } from '@testing-library/react';
import { SectionBody } from '../section-body';

describe('section-body', () => {
    it('should be rendered correctly', () => {
        const { asFragment } = render(
            <SectionBody>
                <div />
            </SectionBody>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
