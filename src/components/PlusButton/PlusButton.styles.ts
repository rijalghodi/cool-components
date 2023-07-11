import { createStyles, MantineNumberSize, MantineSize } from '@mantine/core';

// Styles params are optional
export interface PlusButtonStylesParams {
  radius?: MantineNumberSize;
  size?: MantineSize;
}

export default createStyles(
  (theme, { radius, size }: PlusButtonStylesParams) => ({
    root: {
      size: size,
      radius: theme.fn.radius(radius),
    },
  }),
);
