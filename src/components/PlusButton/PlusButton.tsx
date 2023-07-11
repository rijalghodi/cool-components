import { Button, ButtonProps } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

import { getNumberSize } from '../../utils';

export type PlusButtonProps = ButtonProps;

export const PlusButton = (props: PlusButtonProps) => {
  return (
    <Button leftIcon={<IconPlus size={getNumberSize(props.size)} />} {...props}>
      {props.children ?? 'Add'}
    </Button>
  );
};
