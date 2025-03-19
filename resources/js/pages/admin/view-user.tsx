import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react'

export default function ViewUser(props: { user: { id: number; name: string } }) {
    return (
        <AppLayout>
            <Head title="View User" />
            
            <div className='m-4 p-4'>
                <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div className='w-[100px]'>ID</div>
                    <div>{props.user.id}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-[100px]'>Name</div>
                    <div>{props.user.name}</div>
                </div>
                </div>
            </div>
        </AppLayout>
    )
}