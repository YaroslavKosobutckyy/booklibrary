import { Modal } from 'antd';
import CustomerHandlerForm from '../customer-handler-form/customer-handler-form.component';

const CustomerModal = ({
  visible,
  setVisible,
  modalName,
  customer,
  buttonConfirmName,
  editButton,
}) => {
  return (
    <Modal
      title={modalName}
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      width={1000}
      footer={null}
    >
      <CustomerHandlerForm
        customer={customer}
        buttonConfirmName={buttonConfirmName}
        setVisible={setVisible}
        editButton={editButton}
      />
    </Modal>
  );
};

export default CustomerModal;
