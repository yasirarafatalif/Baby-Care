import AdminServicsTable from '@/Components/Items/AdminServicsTable';
import { dbConnect } from '@/lib/bdConnect';
import React from 'react';
import AdminServicesLoading from './loading';

const AllServices = async () => {
    const services = await dbConnect("services")
  .find({ status: { $in: ["Pending","approved"] } })
  .toArray();

  if (!services) {
    return <AdminServicesLoading />;
  }

    return (
        <div>
            <AdminServicsTable services={JSON.parse(JSON.stringify(services))} />
            
        </div>
    );
};

export default AllServices;