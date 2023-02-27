import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatDateEn = (date: string) => {
  if (date) {
    return format(Date.parse(date), 'MMMM dd, yyyy');
  }
};

export const formatDateUa = (date: string) => {
  if (date) {
    return format(Date.parse(date), 'dd MMMM yyyy', { locale: uk });
  }
};
