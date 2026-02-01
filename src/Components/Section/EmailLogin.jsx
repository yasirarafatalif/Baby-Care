"use client";
import React from 'react';
import { signIn } from "next-auth/react"

const EmailLogin = () => {
    return <button className='btn' onClick={() => signIn()}>Log IN</button>
};

export default EmailLogin;