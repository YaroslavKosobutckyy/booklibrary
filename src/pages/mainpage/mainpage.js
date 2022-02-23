import React from 'react';
import { useMainPageData } from './pages.hooks';
import { Table, Col, Space } from 'antd';
import { HeaderRow, HeaderText } from './customers.styles';
import CustomerHandler from '../../components/customer-handler/customer-handler.component';

const MainPage = () => {
  const { data, columns } = useMainPageData();
  console.log('data in component=', data)
  return (
    <>
      <HeaderText>
        <div>
          <p>BOOKS LIBRARY</p>
        </div>
      </HeaderText>

      <HeaderRow style={{ paddingBottom: '25px' }}>
        <Col>
          <Space>
            <CustomerHandler
              buttonName="Add Book"
              modalName="Add Book"
              buttonConfirmName="Add"
            />
          </Space>
        </Col>
      </HeaderRow>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ showSizeChanger: true, defaultPageSize: 20 }}
      />
    </>
  );
}

export default MainPage; 