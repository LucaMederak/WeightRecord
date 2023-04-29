export interface ICalendarProps {
  name: string;
  label: string;
  fullWidth?: boolean;
  validDate?: (day: Date) => boolean;
}
