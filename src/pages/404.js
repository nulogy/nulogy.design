import React from "react";

// Check 404 page in prod ssr build, preview in dev mode is not reliable.

const NotFoundPage = () => {
  return (
    <>
      <h1>Page not found</h1>
      <p>The page you're looking for is not here.</p>
    </>
  );
};

export default NotFoundPage;
