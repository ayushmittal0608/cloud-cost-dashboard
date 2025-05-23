import { AppSidebar } from "../components/app-sidebar"
import { DataTable } from "../components/data-table"
import { AnomalyCards } from "../components/anomaly-cards"
import { SiteHeader } from "../components/site-header"
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar"

import data from "./data.json"

export default function Dash() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <h1 className="text-base px-8 py-4 font-medium">Anomaly Detection</h1>
        <span className="px-8">Identify unexpected spending spikes or unusual patterns in AWS usage to help users control expenses efficiently.</span>
        <div className="flex flex-1 flex-col">
          <div className="..container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <AnomalyCards />
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
