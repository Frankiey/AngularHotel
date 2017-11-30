export interface UserList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface SingleUser {
  data: User;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  startDate: Date;
}

export interface StandardSchedule {
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
