import { BarChart } from "@tremor/react";
import { fetchMonthlyExpenses } from "@/app/lib/data";
import { monthlyExpense } from "@/app/lib/definitions";
import { customTooltipTypeBar } from "@/app/lib/definitions";

export function PaymentsChart() {
    
    const customTooltip = async (props: customTooltipTypeBar) => {
        'use server';
        const {payload, active} = props;
        if(!active || !payload) return null;
        return (
          <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
            {payload.map((category: any, idx: number) => (
              <div key={idx} className="flex flex-1 space-x-2.5">
                <div
                  className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                />
                <div className="space-y-1">
                  <p className="text-tremor-content">{category.dataKey}</p>
                  <p className="font-medium text-tremor-content-emphasis">
                    {category.value} bpm
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
    }

    const data: monthlyExpense[] = fetchMonthlyExpenses();
    return (
        <>
        <h3>Monthly Expenses Chart</h3>
        <BarChart
            className="mt-6"
            data={data}
            index="month"
            categories={['expenses']}
            colors={['blue']}
            yAxisWidth={48}
            customTooltip={customTooltip}
        />
        </>
    )
}