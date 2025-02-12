"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const dailyData = [
  { name: "Mon", amount: 1200 },
  { name: "Tue", amount: 800 },
  { name: "Wed", amount: 1500 },
  { name: "Thu", amount: 600 },
  { name: "Fri", amount: 2000 },
  { name: "Sat", amount: 1800 },
  { name: "Sun", amount: 1000 },
]

const weeklyData = [
  { name: "Week 1", amount: 5000 },
  { name: "Week 2", amount: 6200 },
  { name: "Week 3", amount: 4800 },
  { name: "Week 4", amount: 5500 },
]

const monthlyData = [
  { name: "Jan", amount: 22000 },
  { name: "Feb", amount: 20000 },
  { name: "Mar", amount: 25000 },
  { name: "Apr", amount: 23000 },
]

export function ExpensesChart() {
  const [period, setPeriod] = useState("daily")

  const data = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  }[period]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Expenses Chart</CardTitle>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

