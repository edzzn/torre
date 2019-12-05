import * as React from 'react';
import * as Styles from './styles';
import { PROFILE_PICTURE_PLACEHOLDER } from '../../common/constants';

export interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
  const weight = props.user.weight.toFixed(2);
  return (
    <Styles.Card href={`https://bio.torre.co/en/${props.user.publicId}`}>
      <Styles.CardHeader>
        {props.user.picture ? (
          <Styles.ProfilePicture src={props.user.picture} />
        ) : (
          <Styles.ProfilePicture src={PROFILE_PICTURE_PLACEHOLDER} />
        )}

        <Styles.CardHeaderInfo>
          <Styles.UserName>
            {props.user.name} {weight}
            {props.user.verified && <span>Verified</span>}
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
