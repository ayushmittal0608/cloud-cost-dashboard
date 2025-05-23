import { AppSidebar } from "../components/app-sidebar"
import { LineChartInteractive } from "../components/LineChart-interactive"
import { SiteHeader } from "../components/site-header"
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar"
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover"
import { Calendar } from "../components/ui/calendar"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { type DateRange } from "react-day-picker"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"


export default function Dash() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-row gap-6 px-8 py-4"  style={{ width: "1100px", height: "500px"}}>
          {/* Graph Section */}
          <div className="w-3/4">
            <h1 className="text-base font-medium">Cost Usage and Report</h1>
            <div className="p-4 lg:px-6" style={{ width: "90%", height: "500px" }}>
              <LineChartInteractive />
            </div>
          </div>

          {/* Filter Section */}
          <div className="w-1/4 flex flex-col justify-start border p-4 rounded-md"  style={{ width: "40%", height: "550px" }}>
            <h2 className="text-sm font-medium mb-2">Parameters</h2>
             <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[300px] p-2 m-2">
                  {dateRange?.from && dateRange?.to
                    ? `Range: ${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`
                    : "Select Date Range"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-2">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                />
              </PopoverContent>
            </Popover>
            <Select>
              <SelectTrigger className="w-[300px] p-2 m-2">
                <SelectValue placeholder="Granularity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Hourly</SelectItem>
                <SelectItem value="dark">Daily</SelectItem>
                <SelectItem value="system">Monthly</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <h2 className="text-sm font-medium pt-2 mb-2">Group By</h2>
              <SelectTrigger className="w-[300px] p-2 m-2">
                <SelectValue placeholder="Dimension" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Hourly</SelectItem>
                <SelectItem value="dark">Daily</SelectItem>
                <SelectItem value="system">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
