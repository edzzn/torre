import * as React from 'react';
import * as Styles from './styles';
import { NAV_LINKS } from '../../common/constants';
import { APP_NAME } from '../../common/texts';

export class NavBarComponent extends React.Component {
  renderNavLinks = () => {
    return NAV_LINKS.map(link => {
      return <Styles.NavLinkItem>{link.label}</Styles.NavLinkItem>;
    });
  };

  render() {
    return (
      <Styles.Navbar>
        <Styles.Container>
          <Styles.Logo>{APP_NAME}</Styles.Logo>

          <Styles.NavLinkContainer>
            {this.renderNavLinks()}
          </Styles.NavLinkContainer>
        </Styles.Container>
      </Styles.Navbar>
    );
  }
}

export default NavBarComponent;
