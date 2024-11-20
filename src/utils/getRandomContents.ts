const getRandomContent = (array: string | string[]): string | number => {
  return array[Math.floor(Math.random() * array.length)];
};

export default getRandomContent;
