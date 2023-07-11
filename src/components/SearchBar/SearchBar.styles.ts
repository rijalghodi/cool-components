import { createStyles, MantineNumberSize, MantineSize } from '@mantine/core';

// Styles params are optional
export interface SearchBarStylesParams {
  radius?: MantineNumberSize;
  placeholder?: string;
  size?: MantineSize;
}

export default createStyles((theme, { radius }: SearchBarStylesParams) => ({
  input: { borderRadius: theme.fn.radius(radius) },
  button: {
    borderBottomRightRadius: theme.fn.radius(radius),
    borderTopRightRadius: theme.fn.radius(radius),
  },
}));
