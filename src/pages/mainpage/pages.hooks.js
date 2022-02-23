import { useMemo } from 'react';
import CustomerActions from '../../components/customer-actions/customer-actions.component';
import { getCustomer } from '../../components/api/api';
import { useQuery } from 'react-query';

export const useMainPageData = () => {
  const { data: customers = [] } = useQuery('customers', getCustomer);
  const data = useMemo(
    () =>
      customers.map(({ _id: id, ...customer }) => ({
        id,
        key: id,
        ...customer,
      })),
    [customers]
  );
  console.log('data in hook =', data);

  const columns = [
    {
      title: 'Book title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author name',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'ISBN',
      dataIndex: 'ISBN',
      key: 'ISBN',
    },
    {
      title: 'Action',
      key: 'action',
      render: (customer) => <CustomerActions customer={customer} />,
    },
  ];
  return { data, columns }
}



