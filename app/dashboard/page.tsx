'use client';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SidebarMenu from '../components/SidebarMenu';

export default function Dashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$42,350', change: '+12.5%', changeType: 'positive' as const, icon: 'dollar-sign' },
    { label: 'Active Users', value: '2,847', change: '+8.2%', changeType: 'positive' as const, icon: 'users' },
    { label: 'Conversion Rate', value: '4.35%', change: '-2.1%', changeType: 'negative' as const, icon: 'trending-up' },
    { label: 'Page Views', value: '48,932', change: '+18.7%', changeType: 'positive' as const, icon: 'eye' },
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'Created new project', time: '2 minutes ago', type: 'create' },
    { user: 'Sarah Wilson', action: 'Updated profile settings', time: '5 minutes ago', type: 'update' },
    { user: 'Mike Johnson', action: 'Completed onboarding', time: '12 minutes ago', type: 'complete' },
    { user: 'Emily Davis', action: 'Uploaded new document', time: '25 minutes ago', type: 'upload' },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      'dollar-sign': 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
      'users': 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M20 8a4 4 0 11-8 0 4 4 0 018 0zM12 11a4 4 0 100-8 4 4 0 000 8z',
      'trending-up': 'M22 7l-8.5 8.5-5-5L2 17M16 5h6v6',
      'eye': 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 11-6 0 3 3 0 016 0z',
    };
    return icons[iconName] || '';
  };

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
                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                          <div key={index} className="bg-background rounded-lg border border-border p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                                <div className="flex items-center mt-2">
                                  <span className={`text-xs font-medium ${
                                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                  }`}>
                                    {stat.change}
                                  </span>
                                  <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                                </div>
                              </div>
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIcon(stat.icon)} />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Charts Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <h3 className="text-lg font-semibold text-foreground mb-4">Revenue Overview</h3>
                          <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                            <p className="text-muted-foreground">Chart visualization would go here</p>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <h3 className="text-lg font-semibold text-foreground mb-4">User Growth</h3>
                          <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                            <p className="text-muted-foreground">Chart visualization would go here</p>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activities */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activities</h3>
                        <div className="space-y-4">
                          {recentActivities.map((activity, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  activity.type === 'create' ? 'bg-green-100 text-green-600' :
                                  activity.type === 'update' ? 'bg-blue-100 text-blue-600' :
                                  activity.type === 'complete' ? 'bg-purple-100 text-purple-600' :
                                  'bg-orange-100 text-orange-600'
                                }`}>
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                                  <p className="text-xs text-muted-foreground">{activity.user}</p>
                                </div>
                              </div>
                              <span className="text-xs text-muted-foreground">{activity.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {['Create Project', 'Invite User', 'Upload Files', 'View Reports'].map((action, index) => (
                            <button key={index} className="p-4 bg-primary/5 hover:bg-primary/10 rounded-lg border border-primary/20 transition-colors">
                              <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </div>
                              <p className="text-xs font-medium text-center text-foreground">{action}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
                <div className="hidden lg:flex flex-col items-stretch shrink-0 w-(--sidebar-right-width) border-s border-border bg-background p-5 gap-2 rounded-br-xl">
                  <div className="flex items-center justify-between gap-2.5 shrink-0">
                    <h3 className="text-sm font-medium">Dashboard Summary</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">Today's Highlights</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 47 new sign-ups</li>
                        <li>• 12 projects completed</li>
                        <li>• 89% server uptime</li>
                        <li>• 5 support tickets resolved</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">System Status</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">API</span>
                          <span className="text-xs text-green-600">Healthy</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Database</span>
                          <span className="text-xs text-green-600">Healthy</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Storage</span>
                          <span className="text-xs text-yellow-600">85% Full</span>
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
  );
}
