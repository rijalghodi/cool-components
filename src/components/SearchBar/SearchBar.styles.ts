import { createStyles, MantineNumberSize } from '@mantine/core';

// Styles params are optional
export interface SearchBarStylesParams {
  radius?: MantineNumberSize;
}

export default createStyles((theme, { radius }: SearchBarStylesParams) => ({
  input: { borderRadius: theme.fn.radius(radius) },
  button: {
    borderRadius: 0,
    borderBottomRightRadius: theme.fn.radius(radius),
    borderTopRightRadius: theme.fn.radius(radius),
  },
}));
