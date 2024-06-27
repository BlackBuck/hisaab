import Form from '@/app/ui/dashboard/expenses/edit-form';
import Breadcrumbs from '@/app/ui/dashboard/expenses/breadcrumbs'
import { fetchExpenseById, fetchBeneficiaries } from '@/app/lib/data'; 
import { notFound } from 'next/navigation';
import { custom } from 'zod';

export default async function Page({params}: {params: {id: string}}) {
    const id = params.id;

    const [expense, customers] = await Promise.all([
        fetchExpenseById(id),
        fetchBeneficiaries(),
    ]);

    if(!expense) notFound();
    
    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form expense={expense} customers={customers} />
    </main>
  );
}