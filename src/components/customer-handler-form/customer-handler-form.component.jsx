import { Form, Input, Space, Button } from 'antd';
import useCustomerHandlerForm from './customer-handler-form.hooks';

const CustomerHandlerForm = ({
  customer,
  setVisible,
  buttonConfirmName,
  editButton,
  deleteButton
}) => {
  const { form, isLoadingCreate, isLoadingUpdate, onFinish } =
    useCustomerHandlerForm({
      customer,
      setVisible,
    });
  const { TextArea } = Input;
  return (
    <>
      <Form
        form={form}
        name="customer-control"
        layout="vertical"
        onFinish={(valuesForm) => onFinish(valuesForm, editButton)}
      >
        <Form.Item
          name="title"
          label="Book title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Author name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Category"
          label="Category">
          <Input />
        </Form.Item>
        <Form.Item
          name="ISBN"
          label="ISBN">
          <Input />
        </Form.Item>
        <Form.Item>
          <Space
            style={{
              paddingTop: '20px',
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <Button onClick={() => setVisible(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={editButton ? isLoadingUpdate : isLoadingCreate}
            >
              {buttonConfirmName}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>

  );
};
export default CustomerHandlerForm;
