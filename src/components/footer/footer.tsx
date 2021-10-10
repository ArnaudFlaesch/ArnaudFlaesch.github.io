import * as React from 'react';
import './footer.scss';

export default function Footer(): React.ReactElement {
  return (
    <footer>
      <div>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  );
}
