import React from 'react';

const Page = ({ params }) => {
  const username = params.username;

  return (
    <div>
      username_{username}
    </div>
  );
};

export default Page;
