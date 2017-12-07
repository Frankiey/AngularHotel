import { filter } from "rxjs/operators/filter";

export interface UserList {
  content: Worker[];
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

export class Worker {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  role: string;
  startDate: number;
}

export interface WorkerPut {
  id: number;
  firstName: string;
  lastName: string;
  roleId: number;
  email: string;
  startDate: number;
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
