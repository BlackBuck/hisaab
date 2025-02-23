import { Suspense } from "react"
import ExpensesTable from "./expenses-table"
import ExpensesHeader from "./expenses-header"
import { Skeleton } from "~/components/ui/skeleton"
import { Sidebar } from "~/components/sidebar"

export default function ExpensesPage() {
  return (
    <div className="flex h-screen gap-1 flex-col md:flex-row">
    <Sidebar />
    <main className="overflow-y-auto no-scrollbar p-8 w-full">
    <div className="container mx-auto">
      <ExpensesHeader />
      <Suspense fallback={<ExpensesTableSkeleton />}>
        <ExpensesTable />
      </Suspense>
    </div>
    </main>
    </div>
  )
}

function ExpensesTableSkeleton() {
  return (
    <div className="justify-between space-y-4 text-white">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
    </div>
  );
}

