import Image from 'next/image';
import { UpdateExpense, DeleteExpense } from '@/app/ui/dashboard/expenses/buttons';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchFilteredBeneficiaries, fetchFilteredExpenses } from '@/app/lib/data';
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline';
import { DeleteBeneficiary, UpdateBeneficiary } from './buttons';
import ExpenseType from "@/app/ui/dashboard/expenses/expense-type"

export default async function ExpensesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const beneficiaries = await fetchFilteredBeneficiaries(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {beneficiaries?.map((beneficiary) => (
              <div
                key={beneficiary.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{beneficiary.name}</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <UpdateBeneficiary id={beneficiary.id} />
                    <DeleteBeneficiary id={beneficiary.id} />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="w-full grid grid-rows-2 grid-cols-2 gap-1 justify-left">
                    <div className="font-medium text-sm text-center grid grid-cols-2 items-center">
                      <div className='flex items-left'>
                      <ExpenseType type='kharcha'/>
                      </div>
                      <div className='flex flex-row items-left'>
                      <CurrencyRupeeIcon className="w-4 ml-2" />
                      {beneficiary.total_kharcha}
                      </div>
                    </div>
                    <div className="font-medium text-sm text-center grid grid-cols-2 items-center">
                      <div className='flex items-left'>
                      <ExpenseType type='kamai'/>
                      </div>
                      <div className='flex flex-row items-left'>
                      <CurrencyRupeeIcon className="w-4 ml-2" />
                      {beneficiary.total_kamai}
                      </div>
                    </div>
                    <div className="font-medium text-sm text-center grid grid-cols-2 items-center">
                      <div className='flex items-left'>
                      <ExpenseType type='udhar'/>
                      </div>
                      <div className='flex flex-row items-left'>
                      <CurrencyRupeeIcon className="w-4 ml-2" />
                      {beneficiary.total_udhar}
                      </div>
                    </div>
                    <div className="font-medium text-sm text-center grid grid-cols-2 items-center">
                      <div className='flex items-left'>
                      <ExpenseType type='bakaya'/>
                      </div>
                      <div className='flex flex-row items-left'>
                      <CurrencyRupeeIcon className="w-4 ml-2" />
                      {beneficiary.total_bakaya}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Kharcha
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Kamai
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Udhar
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Bakaya
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {beneficiaries?.map((beneficiary) => (
                <tr
                  key={beneficiary.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{beneficiary.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <span className="font-medium text-sm text-center items-center flex flex-row">
                      <CurrencyRupeeIcon className="max-w-4" />
                      <p>{beneficiary.total_kharcha}</p>
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <span className="font-medium text-sm text-center items-center flex flex-row">
                      <CurrencyRupeeIcon className="max-w-4" />
                      <p>{beneficiary.total_kamai}</p>
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <span className="font-medium text-sm text-center items-center flex flex-row">
                      <CurrencyRupeeIcon className="max-w-4" />
                      <p>{beneficiary.total_udhar}</p>
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <span className="font-medium text-sm text-center items-center flex flex-row">
                      <CurrencyRupeeIcon className="max-w-4" />
                      <p>{beneficiary.total_bakaya}</p>
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateBeneficiary id={beneficiary.id} />
                      <DeleteBeneficiary id={beneficiary.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
