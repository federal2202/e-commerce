import React from "react";

export default function CustomHOC({ useFn, children }) {
  const { status, data, error } = useFn();

  return (
    <div className="custom">
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
