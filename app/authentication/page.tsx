'use client';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SidebarMenu from '../components/SidebarMenu';

export default function Authentication() {
  const loginHistory = [
    { id: 1, device: 'Chrome on Windows', location: 'San Francisco, CA', ip: '192.168.1.100', time: '2 hours ago', status: 'current' },
    { id: 2, device: 'Safari on iPhone', location: 'San Francisco, CA', ip: '192.168.1.105', time: '1 day ago', status: 'success' },
    { id: 3, device: 'Firefox on MacOS', location: 'San Francisco, CA', ip: '192.168.1.102', time: '3 days ago', status: 'success' },
    { id: 4, device: 'Chrome on Android', location: 'New York, NY', ip: '10.0.0.50', time: '1 week ago', status: 'suspicious' },
    { id: 5, device: 'Unknown Browser', location: 'Moscow, Russia', ip: '203.0.113.1', time: '2 weeks ago', status: 'failed' },
  ];

  const apps = [
    { id: 1, name: 'Thunder Team App', description: 'Official desktop application', lastUsed: '1 hour ago', authorized: true },
    { id: 2, name: 'Third-party Integration', description: 'API access for analytics', lastUsed: '3 days ago', authorized: true },
    { id: 3, name: 'Mobile App', description: 'Official mobile application', lastUsed: '1 week ago', authorized: false },
  ];

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
                    <div className="max-w-4xl mx-auto space-y-8">
                      {/* Header */}
                      <div>
                        <h1 className="text-2xl font-bold text-foreground">Authentication & Security</h1>
                        <p className="text-muted-foreground mt-1">Manage your login credentials and security settings</p>
                      </div>

                      {/* Two-Factor Authentication */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-foreground mb-6">Two-Factor Authentication</h2>
                        <div className="space-y-6">
                          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                              <div>
                                <p className="text-sm font-medium text-red-800">Two-factor authentication is disabled</p>
                                <p className="text-xs text-red-600">Enable 2FA to add an extra layer of security to your account</p>
                              </div>
                            </div>
                            <button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Enable 2FA
                            </button>
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-foreground mb-3">Authentication Methods</h3>
                            <div className="space-y-3">
                              {[
                                { method: 'SMS Text Message', desc: 'Receive codes via text message', enabled: false },
                                { method: 'Authenticator App', desc: 'Use Google Authenticator or similar', enabled: false },
                                { method: 'Email', desc: 'Receive codes via email', enabled: true },
                              ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                  <div>
                                    <p className="text-sm font-medium text-foreground">{item.method}</p>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                  </div>
                                  <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked={item.enabled} />
                                    <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Change Password */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-foreground mb-6">Password</h2>
                        <div className="space-y-6">
                          <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              <div>
                                <p className="text-sm font-medium text-amber-800">Password last changed 45 days ago</p>
                                <p className="text-xs text-amber-600">For security reasons, we recommend changing your password every 3 months</p>
                              </div>
                            </div>
                          </div>

                          <form className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                              <input
                                type="password"
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                              <input
                                type="password"
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
                              <input
                                type="password"
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors">
                              Update Password
                            </button>
                          </form>
                        </div>
                      </div>

                      {/* Login History */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-foreground mb-6">Login History</h2>
                        <div className="space-y-4">
                          {loginHistory.map((session) => (
                            <div key={session.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  session.status === 'current' ? 'bg-green-500' :
                                  session.status === 'success' ? 'bg-blue-500' :
                                  session.status === 'suspicious' ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`} />
                                <div>
                                  <p className="text-sm font-medium text-foreground">{session.device}</p>
                                  <p className="text-xs text-muted-foreground">{session.location} • {session.ip}</p>
                                  <p className="text-xs text-muted-foreground">{session.time}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                  session.status === 'current' ? 'bg-green-100 text-green-800' :
                                  session.status === 'success' ? 'bg-blue-100 text-blue-800' :
                                  session.status === 'suspicious' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {session.status === 'current' ? 'Current' :
                                   session.status === 'success' ? 'Successful' :
                                   session.status === 'suspicious' ? 'Suspicious' : 'Failed'}
                                </span>
                                {session.status !== 'current' && (
                                  <button className="text-xs text-muted-foreground hover:text-foreground">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <button className="mt-4 text-sm text-primary hover:text-primary/80">
                          View All Login History
                        </button>
                      </div>

                      {/* Authorized Apps */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-foreground mb-6">Authorized Applications</h2>
                        <div className="space-y-4">
                          {apps.map((app) => (
                            <div key={app.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                              <div>
                                <div className="flex items-center">
                                  <p className="text-sm font-medium text-foreground">{app.name}</p>
                                  <span className={`ml-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                                    app.authorized ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                  }`}>
                                    {app.authorized ? 'Authorized' : 'Revoked'}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">{app.description}</p>
                                <p className="text-xs text-muted-foreground mt-1">Last used {app.lastUsed}</p>
                              </div>
                              <div className="flex space-x-2">
                                <button className="text-xs text-primary hover:text-primary/80">
                                  {app.authorized ? 'Revoke' : 'Authorize'}
                                </button>
                                <button className="text-xs text-muted-foreground hover:text-foreground">
                                  Details
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button className="mt-4 text-sm text-primary hover:text-primary/80">
                          Manage All Applications
                        </button>
                      </div>

                      {/* Security Questions */}
                      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-foreground mb-6">Security Questions</h2>
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Set up security questions to help recover your account if you forget your password.
                          </p>
                          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Set Up Security Questions
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
                <div className="hidden lg:flex flex-col items-stretch shrink-0 w-(--sidebar-right-width) border-s border-border bg-background p-5 gap-2 rounded-br-xl">
                  <div className="flex items-center justify-between gap-2.5 shrink-0">
                    <h3 className="text-sm font-medium">Security Status</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-3">Security Score</h4>
                      <div className="flex items-center justify-center mb-3">
                        <div className="relative w-20 h-20">
                          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="2"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#ef4444"
                              strokeWidth="2"
                              strokeDasharray="60, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold text-foreground">60%</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground">Improve your security score</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-3">Recent Activity</h4>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <p>Password changed 45 days ago</p>
                        <p>2FA disabled (not recommended)</p>
                        <p>1 suspicious login attempt blocked</p>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="text-sm font-medium mb-2 text-red-800">Action Required</h4>
                      <p className="text-xs text-red-600 mb-2">Enable two-factor authentication to secure your account</p>
                      <button className="w-full bg-red-600 text-white hover:bg-red-700 px-3 py-1.5 rounded text-xs font-medium transition-colors">
                        Enable Now
                      </button>
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
