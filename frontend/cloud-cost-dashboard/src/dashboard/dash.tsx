import { useEffect, useState } from 'react';
import { AppSidebar } from '../components/app-sidebar';
import { ChartAreaInteractive } from '../components/chart-area-interactive';
import { SectionCards } from '../components/section-cards';
import { SiteHeader } from '../components/site-header';
import { SidebarInset, SidebarProvider } from '../components/ui/sidebar';

interface DataType {
  id: number;
  header: string;
  limit: string;
  reviewer: string;
  status: string;
  target: string;
  type: string;
}

export default function Dash() {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("/aws", {
    method: "GET",
    headers: { "Accept": "application/json"
     },
  })
    .then(async (response) => {
      const text = await response.text();
      console.log("Raw response:", text);
      setData(JSON.parse(text));
      setLoading(false);
      
      
    })
    .catch((error) => console.error("Fetch error:", error));
}, []);


  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="..container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div>
                {loading ? (
                  <span>Loading...</span>
                ) : data.length ? (
                  <ul>
                    {data.map((item) => (
                      <li key={item.id}>{item.header}</li>
                    ))}
                  </ul>
                ) : (
                  <span>No data available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
