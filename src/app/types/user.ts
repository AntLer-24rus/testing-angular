export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type TEditUser = Omit<TUser, 'id' | 'avatar'>;
