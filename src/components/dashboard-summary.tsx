import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { DollarSign, ShoppingCart, Utensils, Home } from "lucide-react"

const summaryItems = [
  { title: "Food", icon: Utensils, amount: "₹2,500", color: "text-green-600" },
  { title: "Shopping", icon: ShoppingCart, amount: "₹1,800", color: "text-blue-600" },
  { title: "Rent", icon: Home, amount: "₹15,000", color: "text-yellow-600" },
  { title: "Miscellaneous", icon: DollarSign, amount: "₹3,200", color: "text-purple-600" },
]

export function DashboardSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

