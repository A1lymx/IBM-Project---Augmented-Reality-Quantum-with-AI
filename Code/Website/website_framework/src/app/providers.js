/**
 * @author Millicent Riordan; AtlantaEmrys2002
 * @module Providers
 * @requires module:@carbon/react
 * @external PageHeader
 * @description Used within layout to load different pages' content.
 */

'use client';

import { Content, Theme } from '@carbon/react';
import PageHeader from '@/components/PageHeader/PageHeader';

/**
 * @exports Providers
 * @function
 * @param children
 * @returns PageHeader within HTML layout with the correct content, i.e. a React Component.
 */
export function Providers({ children }) {
    return (
        <div>
            <Theme theme="g100">
                <PageHeader/>
            </Theme>
            <Content>{children}</Content>
        </div>
    );
}
