"use client"

import { useState } from "react"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { PlusCircle } from "lucide-react"
import AddExpenseModal from "./add-expense-modal"

export default function ExpensesHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex justify-between items-center mb-6">
      <Input className="max-w-sm" type="search" placeholder="Search expenses..." />
      <Button onClick={() => setIsModalOpen(true)}>
        <PlusCircle className="mr-2 h-4 w-4" /> Add Expense
      </Button>
      <AddExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

