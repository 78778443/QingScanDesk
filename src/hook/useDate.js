import dayjs from 'dayjs';

function useDate() {
  const dateFormat = (date, format) => {
    if (!date) {
      return '';
    }
    if (!format) {
      format = 'YYYY-MM-DD HH:mm:ss';
    }
    return dayjs(date).format(format);
  };
  return Object.freeze({ dateFormat });
}

export { useDate };
