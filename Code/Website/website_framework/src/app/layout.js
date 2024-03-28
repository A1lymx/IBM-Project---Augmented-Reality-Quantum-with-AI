/**
 * @author Millicent Riordan; AtlantaEmrys2002
 * @module Layout
 * @external Providers
 * @external ../../styles/globals.css
 * @description Used to create layout of website with content for specific page
 */

import '../../styles/globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Quantum Simulation',
  description: 'AR Quantum Simulation',
};

/**
 * @exports RootLayout
 * @function
 * @param children
 * @returns HTML Layout with appropriate content.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Quantum Website</title>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
