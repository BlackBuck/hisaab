import {inter} from "@/app/ui/fonts";
import Search from '@/app/ui/Search';
import { CreateExpense } from "@/app/ui/dashboard/expenses/buttons";
import { Suspense } from "react";
import Table from "@/app/ui/dashboard/expenses/table";
import { ExpensesTableSkeleton } from "@/app/ui/skeletons";

export default function Page() {
    return(
        <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search title="Expenses" placeholder="Search expenses..." />
        <CreateExpense />
      </div>
       <Suspense key={2} fallback={<ExpensesTableSkeleton />}>
        <Table query={"1"} currentPage={1} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
    )
}