import React from 'react';

import { Header, Icon } from 'semantic-ui-react';

const None = () => {
  return (
    <div className='no-age'>
      <Header icon>
        <Icon name='search' />
        어느 시대의 역사를 찾으시나요?
      </Header>
    </div>
  );
};

export default None;
