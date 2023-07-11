import { createStyles, MantineNumberSize, MantineSize, TextInputProps } from "@mantine/core";

// Styles params are optional
export interface SearchBarStylesParams {
  radius?: MantineNumberSize;
  placeholder?: string;
  size?: MantineSize;
}

export default createStyles((theme, { radius, placeholder, size }: SearchBarStylesParams) => ({
  title: { fontSize: theme.fontSizes.sm },
  description: { fontSize: theme.fontSizes.xs },
  input: { borderRadius: theme.fn.radius(radius) },
  button: { borderBottomRightRadius: theme.fn.radius(radius), borderTopRightRadius: theme.fn.radius(radius) },
}));
