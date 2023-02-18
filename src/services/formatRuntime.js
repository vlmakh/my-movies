export const formatRuntimeEn = time => {
  if (time) {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    const result = `${hours}h ${min}m`;
    return result;
  }
};

export const formatRuntimeUa = time => {
  if (time) {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    const result = `${hours}г ${min}хв`;
    return result;
  }
};
