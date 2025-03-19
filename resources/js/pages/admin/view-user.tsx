import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ViewUser(props: { user: { id: number; name: string } }) {
    return (
        <AppLayout>
            <Head title="View User" />
            
            <div className='m-4 p-4'>
                <div className='text-4xl'>Viewing {props.user.name}</div>
                <hr className='my-4' />
                <Input placeholder='Username' value={props.user.name}></Input>
                <Button className='bg-blue-500 hover:bg-blue-700 hover:cursor-pointer transition duration-400 my-2'>Save</Button>
            </div>
        </AppLayout>
    )
}