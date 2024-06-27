import { LatestExpense, Expense, Beneficiary, ExpensesTable, ExpenseForm, BeneficiariesTableType, LatestExpenseRaw } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

export function fetchCardData() {
    return {
        totalKamai: 1,
        totalKharcha: 2,
        totalBakaya: 3,
        totalUdhari: 4,
    };
}

export function fetchFilteredExpenses(query: string, page: number) {
    const filteredExpenses : Expense[] = [
        {
            id: "1",
            name: "Chai",
            amount: 10,
            date: "12/4/24",
            type: "kharcha"
        }
    ]

    return filteredExpenses;
}

// export function fetchExpenseById(id: string) {
//     const expense : Expense= {
//         id: id,
//         name: "Chai",
//         amount: 10,
//         date: "12/3/24",
//         type: "kharcha"
//     }

//     return expense;
// }

// export async function fetchBeneficiaries() {
//     try {
//         const data = await sql<Beneficiary>`
//           SELECT
//             id,
//             name
//           FROM beneficiaries
//           ORDER BY name ASC
//         `;
    
//         const customers = data.rows;
//         return customers;
//       } catch (err) {
//         console.error('Database Error:', err);
//         throw new Error('Failed to fetch all customers.');
//       }
// }

export async function fetchLatestExpenses() {
    try {
      const data = await sql<LatestExpenseRaw>`
        SELECT expenses.amount, customers.name, expenses.id
        FROM expenses
        JOIN customers ON expenses.customer_id = customers.id
        ORDER BY expenses.date DESC
        LIMIT 5`;
  
      const latestExpenses = data.rows;
      return latestExpenses;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest expenses.');
    }
  }


export function fetchMonthlyExpenses() {
    return [
        {
            month: 'jan',
            expenses: 1000
        },
        {
            month: 'feb',
            expenses: 1000
        },
        {
            month: 'mar',
            expenses: 1500
        },
        {
            month: 'apr',
            expenses: 1300
        }
    ]
}

// export function fetchLatestExpenses() {
//     const latestExpenses : LatestExpense[] = [
//         {
//             id: "1",
//             name: "chay",
//             amount: 4,
//             date: "12/3/24"
//         }
//     ]

//     return latestExpenses;
// }

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const expenses = await sql<ExpensesTable>`
      SELECT
        expenses.id,
        expenses.amount,
        expenses.date,
        expenses.status,
        beneficiaries.name,
      FROM expenses
      JOIN customers ON expenses.beneficiary_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        expenses.amount::text ILIKE ${`%${query}%`} OR
        expenses.date::text ILIKE ${`%${query}%`} OR
        expenses.type ILIKE ${`%${query}%`}
      ORDER BY expenses.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return expenses.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch expenses.');
  }
}

export async function fetchExpenseById(id: string) {
    try {
      const data = await sql<ExpenseForm>`
        SELECT
          expenses.id,
          expenses.customer_id,
          expenses.amount,
          expenses.date,
          expenses.type
        FROM expenses
        WHERE expenses.id = ${id};
      `;
  
        const expense = data.rows;
  
      return expense[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch expense.');
    }
}

export async function fetchBeneficiaries() {
    try {
      const data = await sql<Beneficiary>`
        SELECT
          id,
          name
        FROM beneficiaries
        ORDER BY name ASC
      `;
  
      const beneficiaries = data.rows;
      return beneficiaries;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all customers.');
    }
}

export async function fetchFilteredCustomers(query: string) {
    try {
      const data = await sql<BeneficiariesTableType>`
          SELECT
            customers.id,
            customers.name,
            COUNT(expenses.id) AS total_transactions,
            SUM(CASE WHEN expenses.type = 'kharcha' THEN expenses.amount ELSE 0 END) AS total_kharcha,
            SUM(CASE WHEN expenses.type = 'kamai' THEN expenses.amount ELSE 0 END) AS total_kamai,
            SUM(CASE WHEN expenses.type = 'udhar' THEN expenses.amount ELSE 0 END) AS total_udhar,
            SUM(CASE WHEN expenses.type = 'bakaya' THEN expenses.amount ELSE 0 END) AS total_bakaya,
            
          FROM customers
          LEFT JOIN expenses ON customers.id = expenses.customer_id
          WHERE
            customers.name ILIKE ${`%${query}%`} OR
          customers.email ILIKE ${`%${query}%`}
          GROUP BY customers.id, customers.name
          ORDER BY customers.name ASC
        `;
  
      const beneficiaries = data.rows;
  
      return beneficiaries;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch beneficiaries table.');
    }
  }
  