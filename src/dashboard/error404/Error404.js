import React, { useEffect, useState } from "react";

function Error404(props) {
  const [test, setTest] = useState('');
  useEffect(() => {
    setTest('Test');
  }, []);

  return (
    <div>
      <h1>ERROR 404 { test }</h1>
    </div>
  );
}

export default Error404;
