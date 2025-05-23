import { AppSidebar } from "../components/app-sidebar"
import { ChartBarInteractive } from "../components/chart-bar-interactive"
import { SiteHeader } from "../components/site-header"
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar"

export default function Account() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col"  style={{ width: "1150px", height: "500px" }}>
          <div className="..container/main flex flex-1 flex-col gap-2"  style={{ width: "100%", height: "500px" }}>
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <h1 className="text-base px-8 font-medium">Charge By Account</h1>
              <div className="px-4 lg:px-6"  style={{ width: "65%", height: "500px" }}>
                <ChartBarInteractive />
              </div>
              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    
  )
}
