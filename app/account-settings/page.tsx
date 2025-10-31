'use client';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SidebarMenu from '../components/SidebarMenu';

export default function AccountSettings() {
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
                        <h1 className="text-2xl font-bold text-foreground">Account Settings</h1>
                        <p className="text-muted-foreground mt-1">Manage your account preferences and profile information</p>
                      </div>

                      {/* Settings Sections */}
                      <div className="space-y-8">
                        {/* Profile Information */}
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <h2 className="text-lg font-semibold text-foreground mb-6">Profile Information</h2>
                          <div className="space-y-6">
                            <div className="flex items-center space-x-6">
                              <div className="relative">
                                <img
                                  src="/template/assets/media/avatars/300-2.png"
                                  alt="Profile"
                                  className="w-20 h-20 rounded-full object-cover"
                                />
                                <button className="absolute bottom-0 right-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                </button>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-foreground">Profile Photo</h3>
                                <p className="text-sm text-muted-foreground">Upload a new profile photo</p>
                                <button className="text-sm text-primary hover:text-primary/80 mt-1">Remove Photo</button>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                                <input
                                  type="text"
                                  defaultValue="John"
                                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                                <input
                                  type="text"
                                  defaultValue="Doe"
                                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                                <input
                                  type="email"
                                  defaultValue="john.doe@example.com"
                                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                                <input
                                  type="tel"
                                  defaultValue="+1 (555) 123-4567"
                                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                              <textarea
                                rows={4}
                                defaultValue="Passionate developer with 5+ years of experience in building scalable web applications."
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Notification Preferences */}
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <h2 className="text-lg font-semibold text-foreground mb-6">Notification Preferences</h2>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-sm font-medium text-foreground mb-4">Email Notifications</h3>
                              <div className="space-y-4">
                                {[
                                  { label: 'Product updates and announcements', desc: 'Receive updates about new features' },
                                  { label: 'Security alerts', desc: 'Important security notifications' },
                                  { label: 'Weekly digest', desc: 'Summary of your activity' },
                                  { label: 'Marketing emails', desc: 'Tips, tutorials, and promotional content' },
                                ].map((item, index) => (
                                  <div key={index} className="flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                                      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-sm font-medium text-foreground mb-4">Push Notifications</h3>
                              <div className="space-y-4">
                                {[
                                  { label: 'Direct messages', desc: 'When someone sends you a message' },
                                  { label: 'Mentions', desc: 'When someone mentions you' },
                                  { label: 'Friend requests', desc: 'When someone sends you a connection request' },
                                ].map((item, index) => (
                                  <div key={index} className="flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" className="sr-only peer" defaultChecked={index === 0} />
                                      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Privacy Settings */}
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <h2 className="text-lg font-semibold text-foreground mb-6">Privacy Settings</h2>
                          <div className="space-y-6">
                            <div className="space-y-4">
                              {[
                                { label: 'Profile visibility', desc: 'Who can see your profile' },
                                { label: 'Search visibility', desc: 'Allow others to find you in search' },
                                { label: 'Activity status', desc: 'Show when you are active' },
                                { label: 'Profile analytics', desc: 'Allow us to track profile views' },
                              ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                  <div>
                                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                  </div>
                                  <select className="px-3 py-1 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Everyone</option>
                                    <option>Contacts only</option>
                                    <option>Private</option>
                                  </select>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Two-Factor Authentication */}
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <h2 className="text-lg font-semibold text-foreground mb-6">Security</h2>
                          <div className="space-y-6">
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <h3 className="text-sm font-medium text-foreground">Two-Factor Authentication</h3>
                                  <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                                </div>
                                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                  Enable
                                </button>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <h3 className="text-sm font-medium text-foreground">Login Sessions</h3>
                                  <p className="text-xs text-muted-foreground">Manage your active login sessions</p>
                                </div>
                                <button className="border border-border bg-background hover:bg-muted px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                  View All
                                </button>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                  <div>
                                    <p className="text-sm font-medium text-foreground">Current Session</p>
                                    <p className="text-xs text-muted-foreground">Chrome on Windows • San Francisco, CA</p>
                                  </div>
                                  <span className="text-xs text-green-600 font-medium">Active</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-background rounded-lg border border-destructive/20 p-6 shadow-sm">
                          <h2 className="text-lg font-semibold text-destructive mb-6">Danger Zone</h2>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-sm font-medium text-foreground">Deactivate Account</h3>
                                <p className="text-xs text-muted-foreground">Temporarily disable your account</p>
                              </div>
                              <button className="border border-destructive/20 text-destructive hover:bg-destructive/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Deactivate
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-sm font-medium text-foreground">Delete Account</h3>
                                <p className="text-xs text-muted-foreground">Permanently delete your account and data</p>
                              </div>
                              <button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end space-x-4">
                          <button className="border border-border bg-background hover:bg-muted px-6 py-2 rounded-lg font-medium transition-colors">
                            Cancel
                          </button>
                          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg font-medium transition-colors">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
                <div className="hidden lg:flex flex-col items-stretch shrink-0 w-(--sidebar-right-width) border-s border-border bg-background p-5 gap-2 rounded-br-xl">
                  <div className="flex items-center justify-between gap-2.5 shrink-0">
                    <h3 className="text-sm font-medium">Account Summary</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">Account Status</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Email Verified</span>
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">2FA Enabled</span>
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Profile Complete</span>
                          <span className="text-xs font-medium text-foreground">85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <p>Password changed 3 days ago</p>
                        <p>Email updated 1 week ago</p>
                        <p>Profile photo uploaded 2 weeks ago</p>
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
