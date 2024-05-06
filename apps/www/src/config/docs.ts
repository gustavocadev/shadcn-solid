export type TNavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
};

export type TSidebarNavItem = TNavItem & {
  items: TSidebarNavItem[];
};

export type TNavItemWithChildren = TNavItem & {
  items: TNavItemWithChildren[];
};

export type TDocsConfig = {
  mainNav: TNavItem[];
  sidebarNav: TSidebarNavItem[];
};

export const docsConfig: TDocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs"
    },
    {
      title: "Components",
      href: "/docs/components/accordion"
    },
    {
      title: "Examples",
      href: "/examples/cards"
    }
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: []
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: []
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: []
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: []
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
          items: []
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: []
        },
        {
          title: "Typography",
          href: "/docs/typography",
          items: []
        },
        {
          title: "Figma",
          href: "/docs/figma",
          items: []
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: []
        },
        {
          title: "About",
          href: "/docs/about",
          items: []
        }
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: []
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: []
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: []
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: []
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: []
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: []
        },
        {
          title: "Carousel",
          href: "/docs/components/carousel",
          items: []
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: []
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
          items: []
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          items: []
        },
        {
          title: "Command",
          href: "/docs/components/command",
          items: [],
          label: "Updated"
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: []
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          items: [],
          label: "New"
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: []
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: []
        },
        {
          title: "Drawer",
          href: "/docs/components/drawer",
          items: [],
          label: "New"
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: []
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
          items: []
        },
        {
          title: "Image",
          href: "/docs/components/image",
          items: [],
          label: "Updated"
        },
        {
          title: "Pagination",
          href: "/docs/components/pagination",
          items: []
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: []
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          items: []
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: []
        },
        {
          title: "Resizable",
          href: "/docs/components/resizable",
          items: [],
          label: "Updated"
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: []
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          items: []
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
          items: []
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          items: []
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: []
        },
        {
          title: "Table",
          href: "/docs/components/table",
          items: []
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: []
        },
        {
          title: "Text Field",
          href: "/docs/components/textfield",
          items: [],
          label: "Updated"
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
          label: "Updated"
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          items: []
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          items: []
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: []
        }
      ]
    }
  ]
};
