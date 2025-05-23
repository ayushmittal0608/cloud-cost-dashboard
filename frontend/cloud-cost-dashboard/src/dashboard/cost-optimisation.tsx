import { AppSidebar } from '../components/app-sidebar';
import { PieChartInteractive } from '../components/PieChart-interactive';
import { SiteHeader } from '../components/site-header';
import { SidebarInset, SidebarProvider } from '../components/ui/sidebar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function CostOptimisation() {
  return (
    <SidebarProvider>
      <AppSidebar variant='inset' />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col' style={{ width: '1140px', height: '300px' }}>
          <div
            className='..container/main flex flex-1 flex-col gap-2'
            style={{ width: '100%', height: '300px' }}
          >
            <div className='flex flex-col gap-4 py-2 md:gap-6 md:py-2'>
              <h1 className='text-base px-6 pt-2 font-medium'>Cost Optimisation Hub</h1>
              <span className='px-6'>
                Filter cost optimization opportunities and aggregate estimated savings.
              </span>
              <div className='flex items-center ml-auto pr-4 '>
                <span className='font-bold px-6'>Aggregate estimated savings by:</span>
                <Select>
                  <SelectTrigger className='w-[300px] m-2'>
                    <SelectValue placeholder='Resource Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='light'>AWS account</SelectItem>
                    <SelectItem value='dark'>AWS region</SelectItem>
                    <SelectItem value='dark1'>Resource type</SelectItem>
                    <SelectItem value='system'>Recommended Action</SelectItem>
                    <SelectItem value='dark2'>Implementation effort</SelectItem>
                    <SelectItem value='dark3'>Is resource restart needed</SelectItem>
                    <SelectItem value='dark4'>Is rollback possible</SelectItem>
                    <SelectItem value='dark5'>Tag value</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='px-4 lg:px-6' style={{ width: '100%', height: '300px' }}>
                <PieChartInteractive />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
