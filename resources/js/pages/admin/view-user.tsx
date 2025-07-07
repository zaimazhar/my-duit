import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Errors, Inertia } from '@inertiajs/inertia';

export default function ViewUser(props: { user: { id: number; name: string } }) {
    const [userName, setUserName] = useState<string>(props.user.name);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const saveData = () => {
        console.log("Saving user name:", userName);

        router.put('/users/' + props.user.id, { name: userName }, {
            onSuccess: () => {
                console.log("Sent to server");
            },
            onError: (errors: Errors) => {
                console.error("Error updating user name:", errors);
            }
        });
    }

    return (
        <AppLayout>
            <Head title={"Viewing " + userName} />
            <Link href="/users"><Button className='mx-2 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer transition duration-400 my-2'>Back to List</Button></Link>
            <div className='m-4 p-4'>
                <div className='text-4xl'>Viewing {props.user.name}</div>
                <hr className='my-4' />
                <Input placeholder='Username' value={userName} onChange={handleChange}></Input>
                <Button className='bg-green-500 hover:bg-green-700 hover:cursor-pointer transition duration-400 my-2' onClick={saveData}>Save</Button>
            </div>
        </AppLayout>
    )
}