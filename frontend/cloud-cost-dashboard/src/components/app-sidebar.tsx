import * as React from "react"
import {Link} from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
  
} from "../components/ui/select"
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
} from "lucide-react"


import { NavMain } from "../components/nav-main"
import { NavUser } from "../components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"

const data = {
  user: {
    name: "mittalayush2003@gmail.com",
    email: "mittalayush2003@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Cost by Account",
      url: "/account",
      icon: ListIcon,
    },
    {
      title: "Cost Explorer",
      url: "/cost",
      icon: BarChartIcon,
    },
    {
      title: "Cost Optimisation",
      url: "/cost-optimisation",
      icon: PieChartIcon,
    },
    {
      title: "Anomaly Detection",
      url: "/anomaly",
      icon: FolderIcon,
    },
    {
      title: "Recommendations",
      url: "/recommendations",
      icon: UsersIcon,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="#">
                <ServerIcon className="h-5 w-5" />
                <span className="text-base font-semibold">
                  <Select>
                    <SelectTrigger className="w-[300px] h-[50px] p-2 m-2">
                <SelectValue placeholder="AWS" />
              </SelectTrigger>
                    <SelectContent>
                <SelectItem value="AWS">AWS</SelectItem>
                <SelectItem value="Azure">Azure</SelectItem>
                <SelectItem value="Combine">Combine</SelectItem>
              </SelectContent>
                  </Select>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
