import AdminServicsTable from '@/Components/Items/AdminServicsTable';
import { dbConnect } from '@/lib/bdConnect';
import React from 'react';

const AllServices = async () => {
    const services = await dbConnect("services")
  .find({ status: { $in: ["Pending","approved"] } })
  .toArray();

    return (
        <div>
            <AdminServicsTable services={JSON.parse(JSON.stringify(services))} />
            
        </div>
    );
};

export default AllServices;