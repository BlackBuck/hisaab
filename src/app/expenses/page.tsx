import { Suspense } from "react"
import ExpensesTable from "./expenses-table"
import ExpensesHeader from "./expenses-header"
import { Skeleton } from "~/components/ui/skeleton"

export default function ExpensesPage() {
  return (
    <div className="container mx-auto py-10">
      <ExpensesHeader />
      <Suspense fallback={<ExpensesTableSkeleton />}>
        <ExpensesTable />
      </Suspense>
    </div>
  )
}

function ExpensesTableSkeleton() {
  return (
    <div className="space-y-4 text-white justify-between">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
    </div>
  )
}

