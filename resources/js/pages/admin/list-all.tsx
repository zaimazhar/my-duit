import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';

export default function ListAll(props: { users: { id: number; name: string }[] }) {
  return (
    <AppLayout>
      <Head title="Users List" />
      
      <div className='m-4 p-4'>
        <Table>
          <TableCaption>List All</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>ID</TableHead>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.users.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell><Button className='mx-1 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer transition duration-400'>Edit</Button><Button className='mx-1 bg-red-500 hover:bg-red-700 hover:cursor-pointer transition duration-400'>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppLayout>
  )
}