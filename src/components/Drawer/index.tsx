import React from 'react';
import {
  Hidden,
  Theme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MobileDrawer from './MobileDrawer';
import TabletDrawer from './TabletDrawer';
import DesktopDrawer from './DesktopDrawer';
import { Mobile, Tablet, Desktop } from '~components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    minHeight: 56
  },
  content: {
    flexGrow: 1,
    background: theme.palette.background.default
    // padding: theme.spacing(3)
  }
}));

interface IDrawerProps {
  title: string;
  button?: React.ReactChild;
  children: React.ReactChild;
}

export default (props: IDrawerProps) => {
  const classes = useStyles();

  const { title, button, children } = props;

  return (
    <div className={classes.root}>
      <nav>
        <Mobile>
          <MobileDrawer title={title} button={button} />
        </Mobile>
        <Tablet>
          <TabletDrawer />
        </Tablet>
        <Desktop>
          <DesktopDrawer />
        </Desktop>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export const drawerWidth = 240;
