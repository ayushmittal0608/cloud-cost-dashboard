import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  ServerIcon,
  BarChartIcon,
  CameraIcon,
  PieChartIcon,
  FileCodeIcon,
  FileTextIcon,
  FolderIcon,
  LayoutDashboardIcon,
  ListIcon,
  UsersIcon,
} from 'lucide-react';

import { NavUser } from '../components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../components/ui/sidebar';

const data = {
  user: {
    name: 'mittalayush2003@gmail.com',
    email: 'mittalayush2003@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Home',
      url: '/',
      icon: LayoutDashboardIcon,
    },
    {
      title: 'Cost by Account',
      url: '/account',
      icon: ListIcon,
    },
    {
      title: 'Cost Explorer',
      url: '/cost',
      icon: BarChartIcon,
    },
    {
      title: 'Cost Optimisation',
      url: '/cost-optimisation',
      icon: PieChartIcon,
    },
    {
      title: 'Anomaly Detection',
      url: '/anomaly',
      icon: FolderIcon,
    },
    {
      title: 'Recommendations',
      url: '/recommendations',
      icon: UsersIcon,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: CameraIcon,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: FileTextIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: FileCodeIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();
  const cloudOptions: Record<string, string> = {
    aws: 'AWS',
    azure: 'Azure',
    master: 'Master',
  };
  const currentProviderKey =
    Object.keys(cloudOptions).find((opt) => location.pathname.includes(opt)) || 'aws';
  const currentProvider = cloudOptions[currentProviderKey]; // Converts key to display name
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <Link to='#'>
                <ServerIcon className='h-5 w-5' />
                <span className='text-base font-semibold'>
                  <Select
                    value={currentProviderKey}
                    onValueChange={(value) => {
                      navigate(`/${value}`);
                    }}
                  >
                    <SelectTrigger className='w-[300px] h-[50px] p-2 m-2'>
                      <SelectValue placeholder={currentProvider} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='aws'>AWS</SelectItem>
                      <SelectItem value='azure'>Azure</SelectItem>
                      <SelectItem value='master'>Master</SelectItem>
                    </SelectContent>
                  </Select>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton onClick={() => navigate(`/${currentProviderKey}${item.url}`)}>
                {item.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
