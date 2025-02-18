import { DashboardSummary } from "~/components/dashboard-summary"
import { LatestExpenses } from "~/components/latest-expenses"
import { ExpensesChart } from "~/components/expenses-chart"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth();
    if(!session.userId) {
        return redirect("/sign-in");
    }
    else {
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
}