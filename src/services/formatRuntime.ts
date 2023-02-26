export const formatRuntimeEn = (time: number) => {
  if (time) {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    const result = hours > 0 ? `${hours}h ${min}m` : `${min}m`;
    return result;
  }
};

export const formatRuntimeUa = (time: number) => {
  if (time) {
    const hours = Math.floor(time / 60);
    const min = time % 60;
    const result = hours > 0 ? `${hours}г ${min}хв` : `${min}хв`;
    return result;
  }
};
