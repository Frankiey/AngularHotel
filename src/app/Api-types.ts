export interface UserList {
  content: User[];
  totalElemens: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  sort: any;
}

export interface SingleUser {
  data: User;
}

export interface WorkerPut {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  startDate: number[];
  role?: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  startDate: number[];
}

export interface StandardSchedule {
  userId: number;
  firstName: string;
  lastName: string;
  defaultEntries: {
      MONDAY: DayShifts;
      TUESDAY: DayShifts;
      WEDNESDAY: DayShifts;
      THURSDAY: DayShifts;
      FRIDAY: DayShifts;
      SATURDAY: DayShifts;
      SUNDAY: DayShifts;
  };
}

export interface DayShifts {
  MORNING: boolean;
  AFTERNOON: boolean;
  EVENING: boolean;
  NIGHT: boolean;
}
