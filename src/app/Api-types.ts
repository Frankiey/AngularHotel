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
  totalElemens: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  sort: any;
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

export interface ScheduleEntry {
  userId: number;
  firstName: String;
  lastName: String;
  date: Number[];
  scheduleEntries: DayShifts;
  rolName: string;
}

export interface HoursEntry {
  firstName: string;
  lastName: string;
  hours: number;
}
