'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on navigation
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  console.log('Dropdown state:', isDropdownOpen);

  return (
    <header className="flex items-stretch fixed z-10 top-0 start-0 end-0 shrink-0 bg-background h-(--header-height-mobile) lg:h-(--header-height) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="@container grow px-3 flex items-stretch justify-between gap-2.5">
        <div className="flex items-stretch">
          <div className="flex items-center gap-2 lg:w-(--sidebar-width)">
            <button className="kt-btn kt-btn-icon kt-btn-ghost lg:hidden" data-kt-drawer-toggle="#sidebar">
              <i className="ki-filled ki-menu"></i>
            </button>
            <div className="flex items-center gap-1 w-full">
              <button className="kt-btn kt-btn-icon kt-btn-mono" type="button">
                <i className="ki-filled ki-setting"></i>
              </button>
              <button className="kt-btn kt-btn-icon kt-btn-success" type="button">
                <i className="ki-filled ki-message-text"></i>
              </button>
              <button className="kt-btn kt-btn-icon kt-btn-destructive" type="button">
                <i className="ki-filled ki-user-square"></i>
              </button>
              <button className="kt-btn kt-btn-icon kt-btn-outline" type="button">
                <i className="ki-filled ki-add-files"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block shrink-0 p-3.5 lg:p-0 w-full lg:w-[400px]">
            <div className="kt-input">
              <i className="ki-filled ki-magnifier"></i>
              <input className="kt-input" placeholder="Search" type="text" />
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <button className="kt-btn kt-btn-icon kt-btn-ghost" type="button">
              <i className="ki-filled ki-notification-bing"></i>
            </button>
            <button className="kt-btn kt-btn-icon kt-btn-ghost" type="button">
              <i className="ki-filled ki-setting-2"></i>
            </button>
          </div>
          <div className="flex items-center gap-5">
            <div ref={dropdownRef} className="relative" suppressHydrationWarning>
              <link as="image" href="/template/assets/media/avatars/300-2.png" rel="preload" />
              <div
                className="kt-avatar size-7 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="kt-avatar-image">
                  <img alt="avatar" src="/template/assets/media/avatars/300-2.png" />
                </div>
                <div className="absolute flex size-6 items-center justify-center -end-2 -top-2" data-slot="avatar-indicator">
                  <svg className="h-4 text-blue-500 fill-current" viewBox="0 0 15 16">
                    <path d="M14.5425 6.8973L13.5 5.8398C13.4273 5.76858 13.3699 5.68331 13.3312 5.58919C13.2925 5.49507 13.2734 5.39405 13.275 5.2923V3.7923C13.274 3.58681 13.2324 3.38353 13.1527 3.19414C13.0729 3.00476 12.9565 2.833 12.8101 2.68874C12.6638 2.54448 12.4904 2.43055 12.2998 2.35351C12.1093 2.27647 11.9055 2.23783 11.7 2.2398H10.2C10.0982 2.24141 9.99722 2.22228 9.9031 2.1836C9.80898 2.14492 9.72371 2.08749 9.65249 2.0148L8.60249 0.957304C8.30998 0.665106 7.91344 0.500977 7.49999 0.500977C7.08654 0.500977 6.68999 0.665106 6.39749 0.957304L5.33999 1.9998C5.26876 2.07249 5.1835 2.12992 5.08937 2.1686C4.99525 2.20728 4.89424 2.22641 4.79249 2.2248H3.29249C3.08699 2.22578 2.88371 2.26735 2.69432 2.34713C2.50494 2.4269 2.33318 2.54331 2.18892 2.68966C2.04466 2.83602 1.93073 3.00943 1.85369 3.19994C1.77665 3.39046 1.73801 3.59431 1.73999 3.7998V5.2998C1.74159 5.40155 1.72247 5.50256 1.68378 5.59669C1.6451 5.69081 1.58767 5.77608 1.51499 5.8473L0.457487 6.8973C0.165289 7.18981 0.00115967 7.58635 0.00115967 7.9998C0.00115967 8.41325 0.165289 8.80979 0.457487 9.1023L1.49999 10.1598C1.57267 10.231 1.6301 10.3163 1.66878 10.4104C1.70747 10.5045 1.72659 10.6056 1.72499 10.7073V12.2073C1.72597 12.4128 1.76754 12.6161 1.84731 12.8055C1.92709 12.9949 2.04349 13.1666 2.18985 13.3109C2.3362 13.4551 2.50961 13.5691 2.70013 13.6461C2.89064 13.7231 3.0945 13.7618 3.29999 13.7598H4.79999C4.90174 13.7582 5.00275 13.7773 5.09687 13.816C5.191 13.8547 5.27627 13.9121 5.34749 13.9848L6.40499 15.0423C6.69749 15.3345 7.09404 15.4986 7.50749 15.4986C7.92094 15.4986 8.31748 15.3345 8.60999 15.0423L9.65999 13.9998C9.73121 13.9271 9.81647 13.8697 9.9106 13.831C10.0047 13.7923 10.1057 13.7732 10.2075 13.7748H11.7075C12.1212 13.7748 12.518 13.6104 12.8106 13.3179C13.1031 13.0253 13.2675 12.6285 13.2675 12.2148V10.7148C13.2659 10.6131 13.285 10.512 13.3237 10.4179C13.3624 10.3238 13.4198 10.2385 13.4925 10.1673L14.55 9.1098C14.6953 8.96434 14.8104 8.79157 14.8887 8.60146C14.9671 8.41134 15.007 8.20761 15.0063 8.00199C15.0056 7.79638 14.9643 7.59293 14.8847 7.40334C14.8051 7.21376 14.6888 7.04178 14.5425 6.8973ZM10.635 6.6498L6.95249 10.2498C6.90055 10.3024 6.83864 10.3441 6.77038 10.3724C6.70212 10.4007 6.62889 10.4152 6.55499 10.4148C6.48062 10.4138 6.40719 10.398 6.33896 10.3684C6.27073 10.3388 6.20905 10.2959 6.15749 10.2423L4.37999 8.4423C4.32532 8.39026 4.28169 8.32775 4.25169 8.25849C4.22169 8.18923 4.20593 8.11464 4.20536 8.03916C4.20479 7.96369 4.21941 7.88887 4.24836 7.81916C4.27731 7.74946 4.31999 7.68629 4.37387 7.63342C4.42774 7.58056 4.4917 7.53908 4.56194 7.51145C4.63218 7.48382 4.70726 7.47061 4.78271 7.4726C4.85816 7.4746 4.93244 7.49176 5.00112 7.52306C5.0698 7.55436 5.13148 7.59917 5.18249 7.6548L6.56249 9.0573L9.84749 5.8473C9.95296 5.74197 10.0959 5.6828 10.245 5.6828C10.394 5.6828 10.537 5.74197 10.6425 5.8473C10.6953 5.90016 10.737 5.963 10.7653 6.03216C10.7935 6.10132 10.8077 6.17542 10.807 6.25013C10.8063 6.32483 10.7908 6.39865 10.7612 6.46728C10.7317 6.5359 10.6888 6.59795 10.635 6.6498Z"></path>
                  </svg>
                </div>
              </div>
              {isDropdownOpen && (
                <div className="kt-dropdown-menu w-[250px] absolute top-full right-0 mt-2 z-50 block bg-background border border-border rounded-lg shadow-lg" style={{ display: 'block' }}>
                <div className="flex items-center justify-between px-2.5 py-1.5 gap-1.5">
                  <div className="flex items-center gap-2">
                    <link as="image" href="/template/assets/media/avatars/300-2.png" rel="preload" />
                    <div className="kt-avatar">
                      <div className="kt-avatar-image">
                        <img alt="avatar" src="/template/assets/media/avatars/300-2.png" />
                      </div>
                      <div className="kt-avatar-indicator -end-1.5 -top-1.5">
                        <div className="kt-avatar-status kt-avatar-status-online size-2.5"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-sm text-foreground font-semibold leading-none">Sean</span>
                      <span className="text-xs text-secondary-foreground leading-none">Online</span>
                    </div>
                  </div>
                </div>
                <ul className="kt-dropdown-menu-sub">
                  <li>
                    <a className="kt-dropdown-menu-link py-1 rounded-md border border-border hover:bg-muted" href="#">
                      <i className="ki-filled ki-user-edit"></i>
                      Set status
                    </a>
                  </li>
                  <li>
                    <div className="kt-dropdown-menu-separator"></div>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-notification-status"></i>
                      Mute notifications
                    </a>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-user"></i>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-setting"></i>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-notification"></i>
                      Notification settings
                    </a>
                  </li>
                  <li>
                    <div className="kt-dropdown-menu-separator"></div>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-code"></i>
                      Keyboard shortcuts
                    </a>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-message-add"></i>
                      Referrals
                      <span className="kt-badge kt-badge-sm kt-badge-info kt-badge-light ms-auto">New</span>
                    </a>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-file-down"></i>
                      Download apps
                      <i className="ki-filled ki-right text-xs ms-auto"></i>
                    </a>
                  </li>
                  <li>
                    <a className="kt-dropdown-menu-link" href="#">
                      <i className="ki-filled ki-message-question"></i>
                      Help
                      <i className="ki-filled ki-right text-xs ms-auto"></i>
                    </a>
                  </li>
                  <li>
                    <div className="kt-dropdown-menu-separator"></div>
                  </li>
                </ul>
                <div className="px-2.5 pt-1.5 mb-2.5 flex flex-col gap-3.5">
                  <div className="flex items-center gap-2 justify-between">
                    <span className="flex items-center gap-2">
                      <i className="ki-filled ki-moon text-base text-muted-foreground"></i>
                      <span className="font-medium text-2sm">Dark Mode</span>
                    </span>
                    <input className="kt-switch" data-kt-theme-switch-state="dark" data-kt-theme-switch-toggle="true" name="check" type="checkbox" value="1" />
                  </div>
                  <a className="kt-btn kt-btn-outline justify-center w-full" href="#">Log out</a>
                </div>
              </div>
              )}
            </div>
            <button className="kt-btn kt-btn-outline" type="button">
              Create
              <i className="ki-filled ki-folder-down"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
