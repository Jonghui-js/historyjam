import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuBar = () => {
  return (
    <Menu fluid widths={3}>
      <Menu.Item name='buy' />
      <Menu.Item name='sell' />
      <Menu.Item name='rent' />
    </Menu>
  );
};

export default MenuBar;
