import {
  Button,
  Center,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  Selectors,
  TextInput,
  TextInputProps,
  useMantineTheme,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import useStyles, { SearchBarStylesParams } from "./SearchBar.styles";

export type SearchBarStylesNames = Selectors<typeof useStyles>;

export interface SearchBarProps
  extends DefaultProps<SearchBarStylesNames, SearchBarStylesParams>,
    Omit<Omit<TextInputProps, "classNames">, "styles"> {
  searchButtonLabel?: string;
  onSearch?: () => void;
  icon?: JSX.Element;
}

export function SearchBar(props: SearchBarProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles(
    // First argument of useStyles is styles params
    { radius: props.radius },
    // Second argument is responsible for styles api integration
    { name: "SearchBar", classNames: props.classNames, styles: props.styles, unstyled: props.unstyled }
  );
  return (
    <TextInput
      className={classes.input}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={(event) => {
        if (event.key === "Enter" && props.onSearch) {
          props.onSearch();
        }
      }}
      icon={<Center pl={props.size}>{props.icon ?? <IconSearch size={theme.fn.radius(props.size)} />}</Center>}
      rightSection={
        <Button
          className={classes.button}
          onClick={props.onSearch}
          sx={{
            position: "absolute",
            right: 0,
          }}
        >
          {props.searchButtonLabel ?? "Search"}
        </Button>
      }
    />
  );
}
