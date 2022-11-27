import { format } from 'date-fns';

export const formatDateEn = date => {
  return format(Date.parse(date), 'MMMM dd, yyyy');
};
