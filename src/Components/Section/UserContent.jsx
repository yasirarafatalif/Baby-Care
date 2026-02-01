"use client";

import { useSession } from "next-auth/react";

const UserContent = () => {
    const session = useSession()
    console.log(session)
    return (
        <div>
            this is user content
            {session?.data?.user?.name && <h2>Welcome {session?.data?.user?.name}</h2>}
            
        </div>
    );
};

export default UserContent;