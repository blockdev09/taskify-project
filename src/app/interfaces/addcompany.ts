export interface FormFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'date' | 'file' | 'select';

  placeholder?: string;

  options?: {
    label: string;
    value: string;
  }[];
}