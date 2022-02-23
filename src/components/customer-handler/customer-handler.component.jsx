import { Button } from 'antd';
import useCustomerHandler from './customer-handler.hooks';
import CustomerModal from '../customer-modal/customer-modal-component';

const CustomerHandler = ({
  customer,
  buttonName,
  modalName,
  buttonConfirmName,
  editButton,
  deleteButton,
}) => {

  const { visible, setVisible } = useCustomerHandler({ customer });

  const buttonFilter = () => {
    if (buttonName === 'Delete') setVisible(false)
    else setVisible(true)
  }
  return (
    <>
      <Button style={{ margin: '2px' }} type="primary" onClick={buttonFilter}>
        {buttonName}
      </Button>
      <CustomerModal
        visible={visible}
        setVisible={setVisible}
        modalName={modalName}
        customer={customer}
        buttonConfirmName={buttonConfirmName}
        editButton={editButton}
        deleteButton={deleteButton}
      />
    </>
  );
};
export default CustomerHandler; 
