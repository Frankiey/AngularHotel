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

export interface RoleList {
  content: Role[];
  last: boolean;
  totalElemens: number;
  totalPages: number;
  size: number;
  first: boolean;
  sort: any;
  numberOfElements: number;
}

export interface Role {
  id: number;
  name: string;
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

export interface ScheduleEntry {
  userId: number;
  firstName: String;
  lastName: String;
  date: number[];
  scheduleEntries: DayShifts;
  rolName: string;
}
