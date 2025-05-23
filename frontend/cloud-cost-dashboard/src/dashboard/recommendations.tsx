import { AppSidebar } from "../components/app-sidebar"
import { SiteHeader } from "../components/site-header"
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar"


export default function Recommendations() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <h1 className="text-base px-8 py-4 font-medium">Recommendations</h1>
        <span className="px-8">Provides actionable insights to optimize AWS costs by suggesting savings opportunities.</span>
        <div className="flex flex-1 flex-col"   style={{ width: "1150px", height: "500px" }}>
          <div className="..container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              
              <div className="px-4 lg:px-6">
                
              </div>
              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
