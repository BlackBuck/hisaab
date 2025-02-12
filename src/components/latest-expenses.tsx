import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

const latestExpenses = [
  { id: 1, description: "Grocery shopping", amount: "₹1,200", date: "2023-04-01" },
  { id: 2, description: "Electricity bill", amount: "₹2,500", date: "2023-03-28" },
  { id: 3, description: "Movie tickets", amount: "₹500", date: "2023-03-25" },
  { id: 4, description: "Restaurant dinner", amount: "₹1,800", date: "2023-03-22" },
]

export function LatestExpenses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {latestExpenses.map((expense) => (
            <div key={expense.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{expense.description}</p>
                <p className="text-sm text-muted-foreground">{expense.date}</p>
              </div>
              <div className="ml-auto font-medium">{expense.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

