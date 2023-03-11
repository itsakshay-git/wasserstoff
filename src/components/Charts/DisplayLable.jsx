import React, { useState, useEffect } from 'react';
import { CirclePacking } from '@ant-design/plots';

const DisplayLable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24m0nDoQYqH/basic-packing.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    autoFit: true,
    height: 600,
    padding: 50,
    data,
    sizeField: 'r',
    color: 'rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)',
    label: {
      formatter: ({ name }) => {
        return name !== 'root' ? name : '';
      },
      offsetY: 8,
      style: {
        fontSize: 12,
        textAlign: 'center',
        fill: 'rgba(0,0,0,0.65)',
      },
    },
    legend: false,
  };

  return <CirclePacking {...config} />;
};

export default DisplayLable;