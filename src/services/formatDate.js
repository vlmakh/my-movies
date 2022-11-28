import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatDateEn = date => {
  if (date) {
    return format(Date.parse(date), 'MMMM dd, yyyy');
  }
};

export const formatDateUa = date => {
  if (date) {
    return format(Date.parse(date), 'dd MMMM yyyy', { locale: uk });
  }
};
