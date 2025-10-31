'use client';

import ActiveLink from './ActiveLink';
import { useAccordion } from './hooks/useAccordion';
import { useEffect, useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionSection({ item, isOpen, onToggle, setContentRef }: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  setContentRef: (el: HTMLElement | null) => void;
}) {
  return (
    <div className="border-b border-border/50">
      <button
        onClick={onToggle}
        className="w-full text-left px-2 py-2 hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:bg-muted/50"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-toggle-${item.id}`}
      >
        <div className="flex items-center justify-between">
          <div className="text-xs font-normal text-muted-foreground leading-none">
            {item.title}
          </div>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className={`size-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      <div
        ref={setContentRef}
        id={`accordion-content-${item.id}`}
        role="region"
        aria-labelledby={`accordion-toggle-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-2">
          {item.children}
        </div>
      </div>
    </div>
  );
}

export default function SidebarMenu() {
  const [isClient, setIsClient] = useState(false);
  
  // Ensure client-side rendering matches server-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const accordionItems: AccordionItem[] = [
    {
      id: 'general',
      title: 'General',
      defaultOpen: true,
      children: (
        <ul className="space-y-1">
          <li>
            <ActiveLink href="/dashboard" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-chart text-base"></i>
              Dashboards
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/profiles" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-users text-base"></i>
              Public Profiles
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/account-settings" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-user-tick text-base"></i>
              Account Settings
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/network" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-setting-3 text-base"></i>
              Network
              <span className="ml-auto px-1.5 py-0.5 text-xs bg-destructive/10 text-destructive rounded-md">Beta</span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/authentication" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-lock text-base"></i>
              Authentication
            </ActiveLink>
          </li>
        </ul>
      )
    },
    {
      id: 'custom-feed',
      title: 'Custom Feed',
      children: (
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-plus text-base"></i>
              Create a custom feed
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              New order received
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              New customer registered
            </a>
          </li>
        </ul>
      )
    },
    {
      id: 'communities',
      title: 'Communities',
      children: (
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-plus text-base"></i>
              Create a community
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <img alt="Designers Hub" className="size-4 rounded-sm" src="/template/assets/media/brand-logos/invision.svg" />
              Designers Hub
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <img alt="React Js" className="size-4 rounded-sm" src="/template/assets/media/brand-logos/react.svg" />
              React Js
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <img alt="Node Js" className="size-4 rounded-sm" src="/template/assets/media/brand-logos/nodejs.svg" />
              Node Js
            </a>
          </li>
        </ul>
      )
    },
    {
      id: 'resources',
      title: 'Resources',
      children: (
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-setting-4 text-base"></i>
              About Metronic
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-notification text-base"></i>
              Advertise
              <span className="ml-auto px-1.5 py-0.5 text-xs bg-green-100 text-green-700 rounded-md">Pro</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-message-question text-base"></i>
              Help
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-file-sheet text-base"></i>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-user text-base"></i>
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-sm font-normal h-8.5 px-2.5 rounded-md hover:bg-muted/50 transition-colors">
              <i className="ki-filled ki-notification-status text-base"></i>
              Press
            </a>
          </li>
        </ul>
      )
    }
  ];

  const { isOpen, setContentRef, toggleItem } = useAccordion({
    allowMultiple: true,
    defaultOpen: accordionItems.filter(item => item.defaultOpen).map(item => item.id)
  });

  return (
    <aside className="top-(--header-height) h-full transition-all duration-300 flex flex-col items-stretch flex-shrink-0 w-(--sidebar-width) in-data-[sidebar-open=false]:-start-full [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start top-0 bottom-0" id="sidebar">
      <div className="flex items-center justify-between w-full px-5 h-(--sidebar-header-height) border-b border-border shrink-0">
        <a className="flex items-center gap-2" data-discover="true" href="#">
          <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0 hover:bg-primary/90 data-[state=open]:bg-primary/90 rounded-md gap-1.25 text-xs [&_svg:not([class*=size-])]:size-3.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shrink-0 shadow-xs shadow-black/5 w-7 h-7 p-0 [[&_svg:not([class*=size-])]:size-3.5 bg-teal-600 text-white" data-slot="button">
            <svg aria-hidden="true" className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
          </button>
          <span className="text-mono text-sm font-medium hidden lg:block">Thunder Team</span>
        </a>
        <button className="kt-btn kt-btn-icon kt-btn-ghost" type="button">
          <i className="ki-filled ki-arrow-up-down"></i>
        </button>
      </div>
      {/* Sidebar Menu */}
      <div className="overflow-y-auto grow flex my-2.5 px-2.5">
        <div className="flex flex-col grow space-y-1">
          {accordionItems.map((item) => (
            <AccordionSection
              key={item.id}
              item={item}
              isOpen={isOpen(item.id)}
              onToggle={() => toggleItem(item.id)}
              setContentRef={(el) => setContentRef(item.id, el)}
            />
          ))}
        </div>
      </div>
      {/* End of Sidebar Menu */}
    </aside>
  );
}
