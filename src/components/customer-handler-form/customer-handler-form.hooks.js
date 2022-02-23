import { useEffect } from 'react';
import { Form, message } from 'antd';
import { useMutation, useQueryClient } from 'react-query';
import { createCustomer, updateCustomer, deleteCustomer } from '../../components/api/api';

const useCustomerHandlerForm = ({ customer, setVisible }) => {
  console.log('customer in customer-handler-form=', customer);
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const mutationOptions = {
    onSuccess: () => {
      queryClient.invalidateQueries('customers');
      setVisible();
      form.resetFields();
      setVisible(false);
      message.success('Successfully');
    },
    onError: () => {
      message.error('Something went wrong');
      setVisible(false);
    },
  };

  const { mutate: createCustomerMutation, isLoading: isLoadingCreate } =
    useMutation(createCustomer, mutationOptions);
  const { mutate: updateCustomerMutation, isLoading: isLoadingUpdate } =
    useMutation(updateCustomer, mutationOptions);
  const { mutate: deleteCustomerMutation, isLoading: isLoadingDelete } =
    useMutation(deleteCustomer, mutationOptions);

  useEffect(() => {
    form.setFieldsValue(customer);
  }, [form, customer]);

  const onFinish = (valuesForm, editButton, deleteButton) => {
    if (customer) {
      let isTheSameData = true;
      for (let key in valuesForm) {
        if (customer[key] !== valuesForm[key]) {
          isTheSameData = false;
          break;
        }
      }
      if (isTheSameData) {
        message.warning('Client fields not changed');
        return;
      }
    }
    if (editButton) {
      const { id } = customer;
      const data = valuesForm;
      data.customerId = id;
      updateCustomerMutation(data);
    } else {
      createCustomerMutation(valuesForm);
    }
  };
  if (deleteButton) {
    const { id } = customer;
    const data = valuesForm;
    data.customerId = id;
    deleteCustomerMutation(data);
  };

  return {
    form,
    isLoadingCreate,
    isLoadingUpdate,
    isLoadingDelete,
    onFinish,
  };
};

export default useCustomerHandlerForm;
