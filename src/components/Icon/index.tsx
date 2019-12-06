import * as React from 'react';

export interface IconProps {
  type: string;
  margin?: string;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <i
      className={`fas fa-${props.type} fa-1x`}
      style={{ margin: `${props.margin}` }}
    />
  );
};

export default Icon;
