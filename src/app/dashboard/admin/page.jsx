import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React from 'react';

const AdminDashboard = async () => {
    // const { data: sessionData } = await useSession();
     const session = await getServerSession();
    // console.log(session)
    return (
        <div>
            this is admin dashboard
            
        </div>
    );
};

export default AdminDashboard;