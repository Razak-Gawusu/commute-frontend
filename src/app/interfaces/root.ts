export interface IUserOptions {
  label: string;
  value: string;
  name: string;
  icon: string;
}

export type NavItem = {
  label: string;
  path: string;
  iconName: string;
};

export type UserEntities = 'drivers' | 'parents' | 'schools' | 'trips';

export type Analytic = {
  name: UserEntities;
  count: number;
};
