import { AppSidebar } from '../components/app-sidebar';
import { SidebarInset, SidebarProvider } from '../components/ui/sidebar';

export default function Front() {
  return (
    <SidebarProvider>
      <AppSidebar variant='inset' />
      <SidebarInset></SidebarInset>
    </SidebarProvider>
  );
}
