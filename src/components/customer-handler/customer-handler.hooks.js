import { useState } from 'react';

const useCustomerHandler = () => {
  const [visible, setVisible] = useState(false);
  return {
    visible,
    setVisible,
  };
};
export default useCustomerHandler;
