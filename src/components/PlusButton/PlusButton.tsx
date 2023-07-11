import { Button, ButtonProps, DefaultProps, Selectors } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

import useStyles, { PlusButtonStylesParams } from './PlusButton.styles';

export type PlusButtonStylesNames = Selectors<typeof useStyles>;

export interface PlusButtonProps
  extends DefaultProps<PlusButtonStylesNames, PlusButtonStylesParams>,
    Omit<Omit<ButtonProps, 'classNames'>, 'styles'> {}

export const PlusButton = (props: ButtonProps) => {
  const { classes } = useStyles(
    // First argument of useStyles is styles params
    { radius: props.radius, size: props.size },
    // Second argument is responsible for styles api integration
    {
      name: 'SearchBar',
      classNames: props.classNames,
      styles: props.styles,
      unstyled: props.unstyled,
    },
  );
  return (
    <Button leftIcon={<IconPlus size={props.size} />} className={classes.root}>
      {props.children ?? 'Add'}
    </Button>
  );
};
