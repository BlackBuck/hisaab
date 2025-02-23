"use client"

import { useState } from "react"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { PlusCircle } from "lucide-react"
import AddExpenseModal from "./add-expense-modal"

export default function ExpensesHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex justify-between items-center mb-6 mt-1">
      <Input className="mx-2" type="search" placeholder="Search expenses..." />
      <Button className="justify-center items-center md:justify-start" onClick={() => setIsModalOpen(true)}>
        <PlusCircle className="h-4 w-4" />
        <span className="hidden md:inline">Add Expense</span>
      </Button>
      <AddExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

