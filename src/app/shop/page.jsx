import EmailLogin from '@/Components/Section/EmailLogin';
import UserContent from '@/Components/Section/UserContent';
import React from 'react';

const Page = () => {
    return (
        <div>
            this is shop page
            <div>
                <EmailLogin></EmailLogin>
                <UserContent></UserContent>
            </div>
            
        </div>
    );
};

export default Page;