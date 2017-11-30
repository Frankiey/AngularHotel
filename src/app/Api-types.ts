export interface UserList {
  content: User[];
  last: boolean;
  totalElemens: number;
  totalPages: number;
  size: number;
  first: boolean;
  sort: any;
  numberOfElements: number;
}

export interface SingleUser {
  data: User;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  startDate: number[];
  role: string;
}

export interface StandardSchedule {
  id: number;
  monday: DayShifts;
  tuesday: DayShifts;
  wednesday: DayShifts;
  thursday: DayShifts;
  friday: DayShifts;
  saturday: DayShifts;
  sunday: DayShifts;
}

export interface DayShifts {
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
  night: boolean;
}
