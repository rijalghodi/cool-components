import { MantineSize } from '@mantine/core';

export const getNumberSize: (size?: MantineSize) => number = (size) => {
  switch (size) {
    case 'xs':
      return 14;
    case 'sm':
      return 16;
    case 'md':
      return 18;
    case 'lg':
      return 20;
    case 'xl':
      return 24;
    default:
      return 16;
  }
};
