import React, { useEffect } from 'react'
import LineChart from '../chart/LineChart'
import { useGlobalContext } from '../../context/GlobalContext'
import { MdBarChart, MdDashboard } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import Widget from './Widget'
import { dateFormat } from '../../utils/dateFormat';

const Dashboard = () => {

  const { income, expense, totalIncome, totalExpense, getIncome, getExpense } = useGlobalContext()

  useEffect(() => {
    getIncome()
    getExpense()
  }, [])

  const lineChartDataTotalSpent = [
    {
      name: "Income",
      data: [...income.map((income) => {
        const { amount } = income
        return amount
      })],
      color: "#4318FF",
    },
    {
      name: "Expenses",
      data: [...expense.map((expense) => {
        const { amount } = expense
        return amount
      })],
      color: "#6AD2FF",
    },
  ];

  const lineChartOptionsTotalSpent = {
    legend: {
      show: true,
    },
    theme: {
      mode: "light",
    },
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
      theme: 'dark',
      x: {
        format: "dd/MM/yy",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: [...income.map((income) => {
        const { createdAt } = income
        return dateFormat(createdAt)
      })],
    },
    markers: {
      size: 1
    },
    yaxis: {
      show: true,
      min: 500,
      max: 10000,
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
  };

  return (
    <>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={totalIncome()}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={totalExpense()}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={totalIncome() - totalExpense()}
        />
      </div>
      <div className="h-full w-full pt-2">
        <LineChart
          options={lineChartOptionsTotalSpent}
          series={lineChartDataTotalSpent}
        />
      </div>
    </>
  )
}

export default Dashboard