export const parseUser = (users: UserAPIResult[]): User[] => {
  return users
    ? users.map((user: UserAPIResult) => ({
        locationName: user.locationName,
        username: user.username,
        name: user.name,
        picture: user.picture,
        professionalHeadline: user.professionalHeadline,
        remoter: user.remoter,
        skills: user.skills,
        weight: user.weight,
        verified: user.verified
      }))
    : [];
};
