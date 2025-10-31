import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SidebarMenu from '../components/SidebarMenu';

export default function Network() {
  const connections = [
    { id: 1, name: 'Sarah Johnson', role: 'Product Manager', company: 'Tech Innovations', avatar: '/template/assets/media/avatars/300-2.png', mutual: 12, status: 'connected' },
    { id: 2, name: 'Michael Chen', role: 'Senior Developer', company: 'CodeCraft Solutions', avatar: '/template/assets/media/avatars/300-1.png', mutual: 8, status: 'pending' },
    { id: 3, name: 'Emily Rodriguez', role: 'UX Designer', company: 'Design Studio Pro', avatar: '/template/assets/media/avatars/300-3.png', mutual: 5, status: 'connected' },
    { id: 4, name: 'David Kim', role: 'Data Scientist', company: 'AI Analytics Corp', avatar: '/template/assets/media/avatars/300-4.png', mutual: 15, status: 'suggested' },
    { id: 5, name: 'Lisa Wang', role: 'Marketing Director', company: 'Growth Hackers LLC', avatar: '/template/assets/media/avatars/300-5.png', mutual: 3, status: 'connected' },
  ];

  const suggestions = [
    { id: 6, name: 'Alex Thompson', role: 'Frontend Developer', company: 'WebDev Inc.', avatar: '/template/assets/media/avatars/300-6.png', mutual: 7 },
    { id: 7, name: 'Rachel Green', role: 'Backend Engineer', company: 'Server Solutions', avatar: '/template/assets/media/avatars/300-7.png', mutual: 4 },
    { id: 8, name: 'Kevin Martinez', role: 'Mobile Developer', company: 'AppCraft Studio', avatar: '/template/assets/media/avatars/300-8.png', mutual: 9 },
  ];

  const ConnectionCard = ({ connection }: { connection: any }) => (
    <div className="bg-background rounded-lg border border-border p-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <img
          src={connection.avatar}
          alt={connection.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground truncate">{connection.name}</h4>
          <p className="text-sm text-muted-foreground">{connection.role}</p>
          <p className="text-xs text-muted-foreground">{connection.company}</p>
          <p className="text-xs text-muted-foreground mt-1">{connection.mutual} mutual connections</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        {connection.status === 'connected' && (
          <>
            <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
              Message
            </button>
            <button className="flex-1 border border-border bg-background hover:bg-muted px-3 py-2 rounded-lg text-xs font-medium transition-colors">
              View Profile
            </button>
          </>
        )}
        {connection.status === 'pending' && (
          <>
            <button className="flex-1 bg-primary/10 text-primary px-3 py-2 rounded-lg text-xs font-medium">
              Requested
            </button>
            <button className="flex-1 border border-border bg-background hover:bg-muted px-3 py-2 rounded-lg text-xs font-medium transition-colors">
              Withdraw
            </button>
          </>
        )}
        {connection.status === 'suggested' && (
          <>
            <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
              Connect
            </button>
            <button className="flex-1 border border-border bg-background hover:bg-muted px-3 py-2 rounded-lg text-xs font-medium transition-colors">
              Ignore
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex grow" id="root">
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
              <SidebarMenu />
            </div>
            <div className="flex flex-col grow">
              <SubHeader />
              <div className="flex grow overflow-hidden">
                <div className="grow overflow-y-auto p-5 pe-3">
                  <main className="grow" role="content">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h1 className="text-2xl font-bold text-foreground">Network</h1>
                          <p className="text-muted-foreground mt-1">Manage your professional connections</p>
                        </div>
                        <div className="flex space-x-3">
                          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Invite to Network
                          </button>
                        </div>
                      </div>

                      {/* Network Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Total Connections</p>
                              <p className="text-2xl font-bold text-foreground">1,247</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Pending Requests</p>
                              <p className="text-2xl font-bold text-foreground">12</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Mutual Connections</p>
                              <p className="text-2xl font-bold text-foreground">234</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Profile Views</p>
                              <p className="text-2xl font-bold text-foreground">856</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tabs */}
                      <div className="bg-background rounded-lg border border-border shadow-sm">
                        <div className="border-b border-border">
                          <nav className="flex space-x-8 px-6">
                            {['Connections', 'Pending Requests', 'Suggestions'].map((tab, index) => (
                              <button
                                key={index}
                                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                                  index === 0
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                              >
                                {tab}
                                {index === 1 && (
                                  <span className="ml-2 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                                    3
                                  </span>
                                )}
                              </button>
                            ))}
                          </nav>
                        </div>

                        <div className="p-6">
                          {/* Search and Filter */}
                          <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="relative flex-1">
                              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                              <input
                                type="text"
                                placeholder="Search connections..."
                                className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                            <button className="border border-border bg-background hover:bg-muted px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                              </svg>
                              Filter
                            </button>
                          </div>

                          {/* Connections List */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {connections.map((connection) => (
                              <ConnectionCard key={connection.id} connection={connection} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Suggested Connections */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-foreground mb-4">People You May Know</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {suggestions.map((suggestion) => (
                            <div key={suggestion.id} className="bg-muted/50 rounded-lg p-4">
                              <div className="flex items-center space-x-3 mb-3">
                                <img
                                  src={suggestion.avatar}
                                  alt={suggestion.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground truncate">{suggestion.name}</h4>
                                  <p className="text-sm text-muted-foreground">{suggestion.role}</p>
                                  <p className="text-xs text-muted-foreground">{suggestion.company}</p>
                                  <p className="text-xs text-muted-foreground">{suggestion.mutual} mutual</p>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                  Connect
                                </button>
                                <button className="flex-1 border border-border bg-background hover:bg-muted px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                  Dismiss
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
                <div className="hidden lg:flex flex-col items-stretch shrink-0 w-(--sidebar-right-width) border-s border-border bg-background p-5 gap-2 rounded-br-xl">
                  <div className="flex items-center justify-between gap-2.5 shrink-0">
                    <h3 className="text-sm font-medium">Network Insights</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-3">Growth This Month</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">New Connections</span>
                            <span className="font-medium">+24</span>
                          </div>
                          <div className="w-full bg-background rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Profile Views</span>
                            <span className="font-medium">+156</span>
                          </div>
                          <div className="w-full bg-background rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-3">Industry Breakdown</h4>
                      <div className="space-y-2">
                        {[
                          { industry: 'Technology', count: 342 },
                          { industry: 'Design', count: 156 },
                          { industry: 'Marketing', count: 89 },
                          { industry: 'Product', count: 67 },
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">{item.industry}</span>
                            <span className="text-xs font-medium text-foreground">{item.count}</span>
                          </div>
                        ))}
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
  );
}
