declare type User = {
  id?: string;
  locationName: string;
  username: string;
  name: string;
  picture: string;
  professionalHeadline: string;
  remoter: boolean;
  skills: Skill[];
  weight: number;
  verified: boolean;
};

declare type UserPeopleAPI = {
  professionalHeadline: string;
  completion: number;
  showPhone: boolean;
  verified: boolean;
  flags: {
    benefits: boolean;
    canary: boolean;
    enlauSource: boolean;
    fake: boolean;
    featureDiscovery: boolean;
    firstSignalSent: boolean;
    importingLinkedin: boolean;
    onBoarded: boolean;
    opportunitiesNotificationsSent: boolean;
    remoter: boolean;
    signalsFeatureDiscovery: boolean;
    signedInToOpportunities: boolean;
    importingLinkedinRecommendations: boolean;
  };
  weight: number;
  locale: string;
  subjectId: string;
  picture: string;
  hasEmail: boolean;
  name: string;
  links: [];
  id: string;
  claimant: true;
  publicId: string;
};

declare type UserSearchAPI = {
  aggregators?: any;
  offset: number;
  results: UserAPIResult[];
  size: number;
  total: number;
};

declare type UserAPIResult = {
  context: Context;
  compensation: Compensation[];
  locationName: string;
  name: string;
  openTo: string[];
  picture: string;
  professionalHeadline: string;
  remoter: boolean;
  skills: Skill[];
  subjectId: string;
  username: string;
  weight: number;
  verified: boolean;
};

declare type Context = {
  signaled: any;
};

declare type Compensation = {
  amount: number;
  currency: string;
  periodicity: string;
};

declare type Skill = {
  code: number;
  name: string;
  weight: number;
};
