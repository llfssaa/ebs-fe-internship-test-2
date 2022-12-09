// eslint-disable-next-line import/prefer-default-export
export const isSign = (value: string): boolean => {
  return value === '+' || value === '-' || value === '*' || value === '/' || value === '%';
};
