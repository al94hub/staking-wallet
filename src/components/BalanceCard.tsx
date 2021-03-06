import React from 'react';
import { Button, Grid, Theme, Typography, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { CommonDivider } from './base/CommonDivider';
import { CommonActionButton } from './base/CommonActionButton';
import { useStringOrElement } from './hooks/commonHooks';

const StyledGrid = styled(Grid)(({ theme }) => ({
  // backgroundColor: 'rgba(33,33, 33, 0.55)',
  backgroundColor: 'rgba(47, 47, 47, 0.6)',
  paddingTop: '0.5em',
  paddingRight: '1.25em',
  paddingLeft: '1.25em',
  paddingBottom: '1.5em',
}));

interface IProps {
  title: string | React.ElementType;
  amount: number;
  actionButtonTitle: string;
  actionButtonActive: boolean;
  onActionButtonPressed: () => void;

  // Testing
  balanceCardTestId?: string;
}

export const BalanceCard: React.FC<IProps> = (props: IProps) => {
  const { title, amount, actionButtonTitle, actionButtonActive, onActionButtonPressed, balanceCardTestId } = props;

  const titleElement = useStringOrElement(title);

  return (
    <StyledGrid container direction={'column'} data-testid={balanceCardTestId}>
      <Grid item>
        <Typography variant={'caption'}>{titleElement}</Typography>
        <CommonDivider />
      </Grid>

      <Grid item>
        <Typography variant={'h4'} style={{ marginBottom: '0.7em', marginTop: '0.2em' }} data-testid={'balance_text'}>
          {amount.toLocaleString()}
        </Typography>
      </Grid>

      <Grid item>
        <CommonActionButton fullWidth={true} disabled={!actionButtonActive} onClick={onActionButtonPressed}>
          {actionButtonTitle}
        </CommonActionButton>
      </Grid>
    </StyledGrid>
  );
};
