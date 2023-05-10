import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const sidebarData = [
  {
    type: "Item",
    title: "Dashboard",
    to: "/A",
    icon: < HomeOutlinedIcon />,
  },
  {
    type: "Typography",
    title: "Data",
  },
  {
    type: "Item",
    title: "Manage Team",
    to: "/team",
    icon: < PeopleOutlinedIcon />,
  },
  {
    type: "Item",
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    type: "Item",
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
  {
    type: "Typography",
    title: "Pages",
  },
  {
    type: "Item",
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    type: "Item",
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    type: "Item",
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
  {
    type: "Typography",
    title: "Charts",
  },
  {
    type: "Item",
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    type: "Item",
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlineOutlinedIcon />,
  },
  {
    type: "Item",
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    type: "Item",
    title: "Poc",
    to: "/poc",
    icon: <MapOutlinedIcon />,
  },
];
