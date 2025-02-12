import { DashboardSummary } from "~/components/dashboard-summary"
import { LatestExpenses } from "~/components/latest-expenses"
import { ExpensesChart } from "~/components/expenses-chart"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardSummary />
      <div className="grid gap-8 md:grid-cols-2">
        <LatestExpenses />
        <ExpensesChart />
      </div>
    </div>
  )
}

