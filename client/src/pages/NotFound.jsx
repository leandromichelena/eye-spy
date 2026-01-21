import React from "react";

const NotFound = () => {
  return (
    <main className="container text-center py-5" data-testid="not-found">
      <h1 className="fw-bold">404</h1>
      <p className="mb-0">The requested page does not exist.</p>
    </main>
  );
};

export default NotFound;
