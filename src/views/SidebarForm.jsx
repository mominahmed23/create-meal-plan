import { Button } from 'antd';
import React, { useState } from 'react';
import Cover from '../component/Cover/Cover';
import Description from '../component/Description';
import Title from './../component/Title/index';
import Plan from '../component/Plan';
const SidebarForm = () => {
  const [view, setView] = useState(null);

  const viewHelper = [];
  if (view === null) {
    viewHelper.push(
      <>
        <Title />
        <Cover />
        <p onClick={() => setView('description')}>Description</p>
        <p onClick={() => setView('plan')}>Plan</p>
      </>
    );
  }
  if (view === 'description') {
    viewHelper.push(
      <>
        <Button onClick={() => setView(null)}>back</Button>
        <Description />
      </>
    );
  }
  if (view === 'plan') {
    viewHelper.push(
      <>
        <Button onClick={() => setView(null)}>back</Button>
        <Plan />
      </>
    );
  }

  return (
    <div
      className="custom-sidebar pt-4 px-3 pb-2"
      style={{
        width: 275,
        flexShrink: 0,
        height: '100vh',
        backgroundColor: '#ffffff',
        position: 'fixed',
      }}
    >
      {viewHelper}
    </div>
  );
};

export default SidebarForm;
