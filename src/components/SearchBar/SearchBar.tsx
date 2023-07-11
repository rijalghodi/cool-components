import {
  Button,
  Center,
  DefaultProps,
  Selectors,
  TextInput,
  TextInputProps,
  useComponentDefaultProps,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

import useStyles, { SearchBarStylesParams } from './SearchBar.styles';
import { getNumberSize } from '../../utils';

export type SearchBarStylesNames = Selectors<typeof useStyles>;

export interface SearchBarProps
  extends DefaultProps<SearchBarStylesNames, SearchBarStylesParams>,
    Omit<Omit<TextInputProps, 'classNames'>, 'styles'> {
  searchButtonLabel?: string;
  onSearch?: () => void;
  icon?: JSX.Element;
}

export function SearchBar(props: SearchBarProps) {
  const defaultProps: Partial<SearchBarProps> = {
    radius: 'xl',
  };

  const {
    radius,
    classNames,
    styles,
    unstyled,
    onChange,
    onSearch,
    icon,
    searchButtonLabel,
    ...other
  } = useComponentDefaultProps('SearchBar', defaultProps, props);

  const { classes } = useStyles(
    // First argument of useStyles is styles params
    { radius: radius },
    // Second argument is responsible for styles api integration
    {
      name: 'SearchBar',
      classNames: classNames,
      styles: styles,
      unstyled: unstyled,
    },
  );
  return (
    <TextInput
      {...other}
      classNames={{
        input: classes.input,
      }}
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && onSearch) {
          onSearch();
        }
      }}
      icon={
        <Center pl={getNumberSize(other.size) / 3}>
          {icon ?? <IconSearch size={getNumberSize(other.size)} />}
        </Center>
      }
      rightSection={
        <Button
          className={classes.button}
          size={other.size}
          onClick={onSearch}
          sx={{
            position: 'absolute',
            right: 0,
          }}
        >
          {searchButtonLabel ?? 'Search'}
        </Button>
      }
    />
  );
}
