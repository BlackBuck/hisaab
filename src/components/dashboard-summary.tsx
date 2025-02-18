import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { PlusCircle, MinusCircle } from "lucide-react"

// TODO: retrieve this summary from database
const summaryItems = [
  { title: "Earning", icon: PlusCircle, amount: "₹2,500", color: "text-green-600" },
  { title: "Spending", icon: MinusCircle, amount: "₹2,500", color: "text-red-600" },
]

export function DashboardSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      {summaryItems.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className={`h-4 w-4 ${item.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.amount}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

