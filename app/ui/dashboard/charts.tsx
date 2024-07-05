import { BarChart, Card } from "@tremor/react";
// import { Bar } from "react-chartjs-2";
import { fetchMonthlyExpenses } from "@/app/lib/data";
import type { MonthlyExpense } from "@/app/lib/definitions";
import { customTooltipTypeBar } from "@/app/lib/definitions";
import { QueryResultRow } from "@vercel/postgres";
import { ADLaM_Display } from "next/font/google";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";
import { lusitana } from "../fonts";


export async function PaymentsChart() {
  // const customTooltip = async (props: customTooltipTypeBar) => {
  //   "use server";
  //   const { payload, active } = props;
  //   if (!active || !payload) return null;
  //   return (
  //     <div className="w-56 rounded-md border border-gray-100 bg-gray-400 p-2 text-black">
  //       {payload.map((category: any, idx: number) => (
  //         <div key={idx} className="flex flex-1 space-x-2.5">
  //           <div
  //             className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
  //           />
  //           <div className="space-y-1">
  //             <p className="text-tremor-content">{category.dataKey}</p>
  //             <p className="font-medium text-tremor-content-emphasis">
  //               <CurrencyRupeeIcon />
  //               {category.value}
  //             </p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  const data: MonthlyExpense[] = await fetchMonthlyExpenses();
  // console.log(data);

  return (
    <div className="col-span-1 min-h-64 gap-1 lg:col-span-4 md:col-span-4 bg-gray-100 rounded-xl p-2">
      <h3 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Monthly Expenses Chart</h3>
      <BarChart
        className="w-full bg-white p-2 rounded-xl"
        data={data}
        index="month"
        categories={["expenses"]}
        colors={['blue']}
        yAxisLabel="Months"
        showTooltip={false}
      />
    </div>

  );
}
