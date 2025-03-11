"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProfitCalculator() {
  const [contractSum, setContractSum] = useState("1000")
  const [duration, setDuration] = useState("1-month")
  const [btcPrice, setBtcPrice] = useState(80845.51)

  const durations = ["1-month", "3-month", "6-month", "12-month"]

  // Calculate returns based on contract sum and duration
  const calculateReturns = () => {
    const sum = Number.parseFloat(contractSum) || 0
    const dailyReturn = sum * 0.035 // 3.5% daily return for example
    const weeklyReturn = dailyReturn * 7
    const monthlyReturn = dailyReturn * 30

    return {
      daily: dailyReturn.toFixed(2),
      weekly: weeklyReturn.toFixed(2),
      monthly: monthlyReturn.toFixed(2),
    }
  }

  const returns = calculateReturns()

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Profit calculator</h2>

          <div className="space-y-4">
            <div>
              <label className="text-gray-500 mb-2 block">Enter contract sum</label>
              <Input
                type="text"
                value={contractSum}
                onChange={(e) => setContractSum(e.target.value)}
                className="text-xl py-6"
                placeholder="$1000"
              />
            </div>

            <div>
              <label className="text-gray-500 mb-2 block">Choose duration</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {durations.map((d) => (
                  <Button
                    key={d}
                    variant={duration === d ? "default" : "outline"}
                    onClick={() => setDuration(d)}
                    className="h-12"
                  >
                    {d}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <Card className="p-6 space-y-6 shadow-none">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Current Bitcoin price: ${btcPrice.toLocaleString()}</h3>

            <div className="mt-4">
              <div className="relative w-full">
                <div className="h-2 w-full bg-gradient-to-r from-gray-400 via-yellow-400 to-green-500 rounded-full"></div>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="100"
                  value={btcPrice}
                  onChange={(e) => setBtcPrice(Number(e.target.value))}
                  className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
                />
                <div
                  className="absolute top-0 w-6 h-6 bg-gray-600 rounded-full -mt-2"
                  style={{ left: `${((btcPrice - 10000) / 90000) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500">$25000</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Scroll left and right to adjust reference currency price</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-sm">1</span>
              <p className="text-gray-700">Return on investments in 29 days</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-sm">2</span>
              <p className="text-gray-700">Contract active until 11.4.2025</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-sm">3</span>
              <p className="text-gray-700">Total returns: ${returns.monthly}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div>
              <p className="text-gray-500 text-sm">Daily:</p>
              <p className="text-lg font-semibold">${returns.daily}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Weekly:</p>
              <p className="text-lg font-semibold">${returns.weekly}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Monthly:</p>
              <p className="text-lg font-semibold">${returns.monthly}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic">
            * All numbers are estimates and can vary in reality. Revenue will change based on cloud mining difficulty
            and Bitcoin price.
          </p>
        </Card>
      </div>
    </div>
  )
}

