import * as React from 'react';
import * as Styles from './styles';

export interface SectionTitleProps {
  // children;
}

export class SectionTitle extends React.Component<SectionTitleProps> {
  render() {
    return (
      <Styles.SectionContainer>
        <Styles.Container>
          <Styles.SectionLabel>{this.props.children}</Styles.SectionLabel>
        </Styles.Container>
      </Styles.SectionContainer>
    );
  }
}

export default SectionTitle;
