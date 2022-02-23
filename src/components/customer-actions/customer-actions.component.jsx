import CustomerHandler from '../customer-handler/customer-handler.component';

const CustomerActions = ({ customer }) => {
   return (
      <>
         <CustomerHandler
            customer={customer}
            buttonName="Edit"
            modalName="Edit Book"
            buttonConfirmName="Edit"
            editButton={true}
         />
         <CustomerHandler
            customer={customer}
            buttonName="Delete"
            modalName="Delete Book"
            buttonConfirmName="Delete"
            deleteButton={true}
         />
      </>
   );
};
export default CustomerActions; 