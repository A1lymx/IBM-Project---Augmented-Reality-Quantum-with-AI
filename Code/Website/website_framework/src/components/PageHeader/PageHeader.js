/**
 * @author Millicent Riordan; AtlantaEmrys2002
 * @module components/PageHeader/PageHeader
 * @requires module:@carbon/react
 * @requires module:@carbon/icons-react
 * @external Link
 * @description Creates the page header of the website - the navigation bar, etc. This appears on every page.
 */

import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
} from '@carbon/react';

import { Switcher } from '@carbon/icons-react';

import Link from 'next/link';

//import '../../app/globals.css'

const PageHeader = () => (
    <HeaderContainer 
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Quantum Simulation">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />

            <Link href="./" passHref legacyBehavior>
                <HeaderName>Quantum Simulation</HeaderName>
            </Link>

            <HeaderNavigation aria-label="Quantum Simulation">
                <Link href="./quantum_quiz" passHref legacyBehavior>
                    <HeaderMenuItem>Quantum Quiz</HeaderMenuItem>
                </Link>
            </HeaderNavigation>

            <HeaderNavigation aria-label="Quantum Simulation">
                <Link href="./references" passHref legacyBehavior>
                    <HeaderMenuItem>References</HeaderMenuItem>
                </Link>
            </HeaderNavigation>

            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
                <SideNavItems>
                    <HeaderSideNavItems>

                        <Link href="https://unexpecteddonuts.github.io/index.html#home" passHref legacyBehavior>
                            <HeaderMenuItem>Quantum Quiz</HeaderMenuItem>
                        </Link>

                        <Link href="./references" passHref legacyBehavior>
                            <HeaderMenuItem>References</HeaderMenuItem>
                        </Link>


                           </HeaderSideNavItems>
                </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
                    <Switcher side={20} />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    )}
/>
);

/**@exports PageHeader*/
export default PageHeader;