import SidebarMenu from './components/SidebarMenu';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ThemeInitializer from './components/ThemeInitializer';

export default function Home() {
  return (
    <>
      <ThemeInitializer />
      {/* Page */}
      {/* Main */}
      <div className="flex grow" id="root">
        {/* Wrapper */}
        <div className="flex grow" style={{
          '--sidebar-width': '240px',
          '--header-height': '54px',
          '--sidebar-header-height': '60px',
          '--sidebar-right-width': '320px',
          '--sidebar-width-mobile': '240px',
          '--header-height-mobile': '54px'
        } as React.CSSProperties}>
          <Header />
          <div className="flex flex-col lg:flex-row grow pt-(--header-height)">
            <div className="flex grow rounded-xl bg-background border border-input m-2.5 mt-0">
              <div className="hidden lg:flex flex-col items-stretch shrink-0 w-(--sidebar-width) border-e border-border bg-muted/40">
                {/* Sidebar */}
                <SidebarMenu />
                {/* End of Sidebar */}
              </div>
              <div className="flex flex-col grow">
                <SubHeader />
                <div className="flex grow overflow-hidden">
                  <div className="grow overflow-y-auto p-5 pe-3">
                    <main className="grow" role="content">
                      <div className="animate-pulse bg-accent rounded-lg grow h-screen" data-slot="skeleton"></div>
                    </main>
                  </div>
                  <div className="hidden lg:flex flex-col items-stretch shrink-0 w-(--sidebar-right-width) border-s border-border bg-background p-5 gap-2 rounded-br-xl">
                    <div className="flex items-center justify-between gap-2.5 shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-md bg-indigo-500 text-white flex items-center justify-center">
                          <svg aria-hidden="true" className="lucide lucide-component size-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
                            <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path>
                            <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path>
                            <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
                          </svg>
                        </div>
                        <h3 className="text-sm font-medium">AI Summary by Thunder</h3>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button className="kt-btn kt-btn-icon kt-btn-ghost" type="button">
                          <i className="ki-filled ki-cross"></i>
                        </button>
                      </div>
                    </div>
                    <div className="relative overflow-hidden grow my-1.5 h-[calc(100vh-5rem)]" data-slot="scroll-area" dir="ltr" style={{ position: 'relative', '--radix-scroll-area-corner-width': '0px', '--radix-scroll-area-corner-height': '0px' } as React.CSSProperties}>
                      <style>{`
                        [data-radix-scroll-area-viewport] {
                          scrollbar-width: none;
                          -ms-overflow-style: none;
                          -webkit-overflow-scrolling: touch;
                        }
                        [data-radix-scroll-area-viewport]::-webkit-scrollbar {
                          display: none
                        }
                      `}</style>
                      <div className="h-full w-full rounded-[inherit]" data-radix-scroll-area-viewport="" style={{ overflow: 'hidden scroll' }}>
                        <div style={{ minWidth: '100%', display: 'table' }}>
                          <div className="text-sm space-y-6">
                            <p>Focus: Enhancing the Metronic dashboard with smart UI improvements</p>
                            <div>
                              <p>Suggested features:</p>
                              <ul className="list-disc list-outside ps-5 space-y-1">
                                <li>Auto-suggestion of layout components</li>
                                <li>Theme-aware widget generation</li>
                                <li>Smart layout alignment based on grid settings</li>
                                <li>AI-generated changelog summaries</li>
                              </ul>
                            </div>
                            <p>Next step: Explore feasibility of auto-applying new Metronic updates</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Main */}
      {/* End of Page */}
    </>
  );
}
