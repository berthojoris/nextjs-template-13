'use client';

import Link from 'next/link';
import ActiveLink from './ActiveLink';

export default function SidebarMenu() {
  return (
    <aside suppressHydrationWarning className="top-(--header-height) h-full transition-all duration-300 flex flex-col items-stretch flex-shrink-0 w-(--sidebar-width) in-data-[sidebar-open=false]:-start-full [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start top-0 bottom-0" id="sidebar">
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
        <div className="flex flex-col grow space-y-7.5">
          <div suppressHydrationWarning className="kt-accordion" data-kt-accordion="true" data-kt-accordion-expand-all="true">
            {/* General Section */}
            <div suppressHydrationWarning className="kt-accordion-item active" data-kt-accordion-item="true">
              <button suppressHydrationWarning aria-controls="accordion_content_0" className="kt-accordion-toggle" data-kt-accordion-toggle="true" id="accordion_toggle_0">
                <span className="kt-accordion-title">
                  <div className="px-2 pb-2 text-xs font-normal text-muted-foreground leading-none">General</div>
                </span>
              </button>
              <div suppressHydrationWarning aria-labelledby="accordion_toggle_0" className="kt-accordion-content" id="accordion_content_0">
                <div className="kt-accordion-wrapper">
                  <ul suppressHydrationWarning className="kt-accordion-menu gap-px" data-kt-accordion="true">
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <ActiveLink href="/dashboard" className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5">
                        <i className="ki-filled ki-chart text-base kt-accordion-selected:text-muted-foreground"></i>
                        Dashboards
                      </ActiveLink>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <ActiveLink href="/profiles" className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5">
                        <i className="ki-filled ki-users text-base kt-accordion-selected:text-muted-foreground"></i>
                        Public Profiles
                      </ActiveLink>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <ActiveLink href="/account-settings" className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5">
                        <i className="ki-filled ki-user-tick text-base kt-accordion-selected:text-muted-foreground"></i>
                        Account Settings
                      </ActiveLink>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <ActiveLink href="/network" className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5">
                        <i className="ki-filled ki-setting-3 text-base kt-accordion-selected:text-muted-foreground"></i>
                        Network
                        <span className="kt-badge kt-badge-xs kt-badge-light kt-badge-destructive">Beta</span>
                      </ActiveLink>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <ActiveLink href="/authentication" className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5">
                        <i className="ki-filled ki-lock text-base kt-accordion-selected:text-muted-foreground"></i>
                        Authentication
                      </ActiveLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Custom Feed Section */}
            <div suppressHydrationWarning className="kt-accordion-item active" data-kt-accordion-item="true">
              <button suppressHydrationWarning aria-controls="accordion_content_1" className="kt-accordion-toggle" data-kt-accordion-toggle="true" id="accordion_toggle_1">
                <span className="kt-accordion-title">
                  <div className="px-2 pb-2 text-xs font-normal text-muted-foreground leading-none">Custom Feed</div>
                </span>
                <span aria-hidden="true" className="kt-accordion-indicator">
                  <svg aria-hidden="true" className="lucide lucide-plus kt-accordion-indicator-on" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <svg aria-hidden="true" className="lucide lucide-minus kt-accordion-indicator-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14"></path>
                  </svg>
                </span>
              </button>
              <div suppressHydrationWarning aria-labelledby="accordion_toggle_1" className="kt-accordion-content" id="accordion_content_1">
                <div className="kt-accordion-wrapper">
                  <ul suppressHydrationWarning className="kt-accordion-menu gap-px" data-kt-accordion="true">
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-plus text-base kt-accordion-selected:text-muted-foreground"></i>
                        Create a custom feed
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <div className="flex items-center justify-center w-4">
                          <div className="size-1.5 rounded-full bg-green-500"></div>
                        </div>
                        New order received
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <div className="flex items-center justify-center w-4">
                          <div className="size-1.5 rounded-full bg-green-500"></div>
                        </div>
                        New customer registered
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Communities Section */}
            <div suppressHydrationWarning className="kt-accordion-item active" data-kt-accordion-item="true">
              <button suppressHydrationWarning aria-controls="accordion_content_2" className="kt-accordion-toggle" data-kt-accordion-toggle="true" id="accordion_toggle_2">
                <span className="kt-accordion-title">
                  <div className="px-2 pb-2 text-xs font-normal text-muted-foreground leading-none">Communities</div>
                </span>
                <span aria-hidden="true" className="kt-accordion-indicator">
                  <svg aria-hidden="true" className="lucide lucide-plus kt-accordion-indicator-on" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <svg aria-hidden="true" className="lucide lucide-minus kt-accordion-indicator-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14"></path>
                  </svg>
                </span>
              </button>
              <div suppressHydrationWarning aria-labelledby="accordion_toggle_2" className="kt-accordion-content" id="accordion_content_2">
                <div className="kt-accordion-wrapper">
                  <ul suppressHydrationWarning className="kt-accordion-menu gap-px" data-kt-accordion="true">
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-plus text-base kt-accordion-selected:text-muted-foreground"></i>
                        Create a community
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <img alt="Designers Hub" className="size-4 rounded-sm" src="/template/assets/media/brand-logos/invision.svg" />
                        Designers Hub
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <img alt="React Js" className="size-4 rounded-sm" src="/template/assets/media/brand-logos/react.svg" />
                        React Js
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:text-muted-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <img alt="Node Js" className="size-4 rounded-sm" src="/template/assets/media/brand-logos/nodejs.svg" />
                        Node Js
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Resources Section */}
            <div suppressHydrationWarning className="kt-accordion-item active" data-kt-accordion-item="true">
              <button suppressHydrationWarning aria-controls="accordion_content_3" className="kt-accordion-toggle" data-kt-accordion-toggle="true" id="accordion_toggle_3">
                <span className="kt-accordion-title">
                  <div className="px-2 pb-2 text-xs font-normal text-muted-foreground leading-none">Resources</div>
                </span>
                <span aria-hidden="true" className="kt-accordion-indicator">
                  <svg aria-hidden="true" className="lucide lucide-plus kt-accordion-indicator-on" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <svg aria-hidden="true" className="lucide lucide-minus kt-accordion-indicator-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14"></path>
                  </svg>
                </span>
              </button>
              <div suppressHydrationWarning aria-labelledby="accordion_toggle_3" className="kt-accordion-content" id="accordion_content_3">
                <div className="kt-accordion-wrapper">
                  <ul suppressHydrationWarning className="kt-accordion-menu gap-px" data-kt-accordion="true">
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:bg-primary kt-accordion-selected:text-primary-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-setting-4 text-base kt-accordion-selected:text-muted-foreground"></i>
                        About Metronic
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:bg-primary kt-accordion-selected:text-primary-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-notification text-base kt-accordion-selected:text-muted-foreground"></i>
                        Advertise
                        <span className="kt-badge kt-badge-xs kt-badge-light kt-badge-success">Pro</span>
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:bg-primary kt-accordion-selected:text-primary-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-message-question text-base kt-accordion-selected:text-muted-foreground"></i>
                        Help
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:bg-primary kt-accordion-selected:text-primary-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-file-sheet text-base kt-accordion-selected:text-muted-foreground"></i>
                        Blog
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:bg-primary kt-accordion-selected:text-primary-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-user text-base kt-accordion-selected:text-muted-foreground"></i>
                        Careers
                      </a>
                    </li>
                    <li suppressHydrationWarning className="kt-accordion-menu-item" data-kt-accordion-item="true">
                      <a className="kt-accordion-menu-link kt-accordion-selected:bg-primary kt-accordion-selected:text-primary-foreground text-sm font-normal h-8.5 px-2.5" href="#">
                        <i className="ki-filled ki-notification-status text-base kt-accordion-selected:text-muted-foreground"></i>
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Sidebar Menu */}
    </aside>
  );
}
