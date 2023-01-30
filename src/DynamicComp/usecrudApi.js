import React, { useState, useEffect } from "react";

const usepost = (url, data, method) => {
  const [responceData, setResponceData] = useState(null);

  useEffect(() => {
    async function func(url, data, method) {
      const res = await fetch(url, {
        method: method,
        body: data,
      });
      const reData = await res.json();
      setResponceData(reData);
    }
    func(url, data, method);
  }, [url]);

  return [responceData];
};
