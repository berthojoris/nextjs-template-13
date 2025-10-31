import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SidebarMenu from '../components/SidebarMenu';

export default function Profiles() {
  const profiles = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      avatar: '/template/assets/media/avatars/300-2.png',
      skills: ['Product Strategy', 'Agile', 'User Research'],
      isOnline: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Developer',
      company: 'CodeCraft Solutions',
      location: 'New York, NY',
      avatar: '/template/assets/media/avatars/300-1.png',
      skills: ['React', 'Node.js', 'TypeScript'],
      isOnline: false,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Design Studio Pro',
      location: 'Austin, TX',
      avatar: '/template/assets/media/avatars/300-3.png',
      skills: ['UI/UX', 'Figma', 'Prototyping'],
      isOnline: true,
      rating: 4.7
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Data Scientist',
      company: 'AI Analytics Corp',
      location: 'Seattle, WA',
      avatar: '/template/assets/media/avatars/300-4.png',
      skills: ['Machine Learning', 'Python', 'Data Analysis'],
      isOnline: true,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'Growth Hackers LLC',
      location: 'Los Angeles, CA',
      avatar: '/template/assets/media/avatars/300-5.png',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy'],
      isOnline: false,
      rating: 4.8
    },
    {
      id: 6,
      name: 'James Taylor',
      role: 'DevOps Engineer',
      company: 'Cloud Systems Inc.',
      location: 'Denver, CO',
      avatar: '/template/assets/media/avatars/300-6.png',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      isOnline: true,
      rating: 4.9
    },
  ];

  const ProfileCard = ({ profile }: { profile: typeof profiles[0] }) => (
    <div className="bg-background rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-background ${
            profile.isOnline ? 'bg-green-500' : 'bg-gray-400'
          }`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground truncate">{profile.name}</h3>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-foreground">{profile.rating}</span>
            </div>
          </div>
          <p className="text-sm text-primary font-medium">{profile.role}</p>
          <p className="text-sm text-muted-foreground">{profile.company}</p>
          <div className="flex items-center mt-2 text-xs text-muted-foreground">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Connect
        </button>
        <button className="flex-1 border border-border bg-background hover:bg-muted px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Message
        </button>
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
                      {/* Header Section */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h1 className="text-2xl font-bold text-foreground">Public Profiles</h1>
                          <p className="text-muted-foreground mt-1">Discover and connect with professionals in your network</p>
                        </div>
                        <div className="flex space-x-3">
                          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Profile
                          </button>
                          <button className="border border-border bg-background hover:bg-muted px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                            </svg>
                            Filter
                          </button>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="bg-background rounded-lg border border-border p-4">
                        <div className="relative">
                          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input
                            type="text"
                            placeholder="Search by name, skill, or company..."
                            className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Total Profiles</p>
                              <p className="text-2xl font-bold text-foreground">2,847</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Online Now</p>
                              <p className="text-2xl font-bold text-foreground">342</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Messages Sent</p>
                              <p className="text-2xl font-bold text-foreground">1,239</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Profiles Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {profiles.map((profile) => (
                          <ProfileCard key={profile.id} profile={profile} />
                        ))}
                      </div>

                      {/* Load More */}
                      <div className="text-center">
                        <button className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-3 rounded-lg font-medium transition-colors">
                          Load More Profiles
                        </button>
                      </div>
                    </div>
                  </main>
                </div>
                <div className="hidden lg:flex flex-col items-stretch shrink-0 w-(--sidebar-right-width) border-s border-border bg-background p-5 gap-2 rounded-br-xl">
                  <div className="flex items-center justify-between gap-2.5 shrink-0">
                    <h3 className="text-sm font-medium">Profile Insights</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-3">Popular Skills</h4>
                      <div className="space-y-2">
                        {['React', 'Python', 'UI/UX Design', 'Node.js', 'Machine Learning'].map((skill, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">{skill}</span>
                            <span className="text-xs font-medium text-foreground">{Math.floor(Math.random() * 50 + 20)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="text-sm font-medium mb-3">Recent Activity</h4>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <p>5 new profiles joined today</p>
                        <p>12 connection requests sent</p>
                        <p>8 profiles viewed this week</p>
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
