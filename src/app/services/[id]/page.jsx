import React from 'react';

const ServicesSingelPages = async ({params}) => {
    const { id } = params;
    console.log(id)

    return (
        <div>
            <h1>Single Service Page</h1>
            <p>Service ID: {params.id}</p>
        </div>
    );
};

export default ServicesSingelPages;