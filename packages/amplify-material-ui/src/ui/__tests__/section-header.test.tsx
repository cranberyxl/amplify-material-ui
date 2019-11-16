import * as React from 'react';
import { render } from '@testing-library/react';
import { SectionHeader } from '../section-header';

describe('section-header', () => {
    it('should be rendered correctly', () => {
        const { asFragment } = render(
            <SectionHeader>
                <div />
            </SectionHeader>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
