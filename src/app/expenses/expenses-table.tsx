"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"
import { Button } from "~/components/ui/button"
import { PencilIcon, TrashIcon } from "lucide-react";
import { useIsMobile } from "~/hooks/use-mobile";

// This would typically come from a database or API
const mockExpenses = [
  { id: 1, description: "Groceries", amount: 50.0, date: "2023-05-01" },
  { id: 2, description: "Gas", amount: 30.0, date: "2023-05-03" },
  { id: 3, description: "Restaurant", amount: 75.0, date: "2023-05-05" },
  { id: 4, description: "Movie tickets", amount: 25.0, date: "2023-05-07" },
  { id: 5, description: "Utilities", amount: 100.0, date: "2023-05-10" },
]

export default function ExpensesTable() {
  const isMobile = useIsMobile();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className={isMobile ? "hidden" : ""}>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.description}</TableCell>
              <TableCell>${expense.amount.toFixed(2)}</TableCell>
              <TableCell className={isMobile ? "hidden" : ""}>{expense.date}</TableCell>
              <TableCell className="grid grid-cols-2 gap-2">
              <Button className="hover:bg-green-500 hover:text-white">
                  <PencilIcon className="m-1"/>
                </Button>
                <Button className="hover:bg-red-600 hover:text-white">
                <TrashIcon className="dark m-1"/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

