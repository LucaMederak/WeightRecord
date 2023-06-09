export interface IDatePickerProps {
  name: string;
  label: string;
  fullWidth?: boolean;
  validDate?: (day: Date) => boolean;
}
