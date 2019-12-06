import * as React from 'react';
import * as Styles from './styles';
import { PROFILE_PICTURE_PLACEHOLDER } from '../../common/constants';
import Icon from '../Icon';

export interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
  const weight = props.user.weight.toFixed(2);
  return (
    <Styles.Card href={`https://bio.torre.co/en/${props.user.username}`}>
      <Styles.CardHeader>
        {props.user.picture ? (
          <Styles.ProfilePicture src={props.user.picture} />
        ) : (
          <Styles.ProfilePicture src={PROFILE_PICTURE_PLACEHOLDER} />
        )}

        <Styles.CardHeaderInfo>
          <Styles.UserName>
            {props.user.name} <Icon type='weight-hanging' margin='0 5px' />
            {weight}
            {props.user.verified && (
              <Icon type='certificate' margin='0 0 0 5px' />
            )}
          </Styles.UserName>
          <Styles.UserHeadLine>
            {props.user.professionalHeadline}
          </Styles.UserHeadLine>
        </Styles.CardHeaderInfo>
      </Styles.CardHeader>
      <Styles.CardContent></Styles.CardContent>
    </Styles.Card>
  );
};

export default UserCard;
