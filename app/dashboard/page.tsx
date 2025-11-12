export default function DashboardPage() {
  // Sample data for the dashboard
  const stats = [
    { label: "Total Revenue", value: "$45,231", change: "+20.1%", trend: "up" },
    { label: "Active Users", value: "2,345", change: "+15.3%", trend: "up" },
    { label: "Total Orders", value: "1,234", change: "-5.2%", trend: "down" },
    { label: "Conversion Rate", value: "3.24%", change: "+2.5%", trend: "up" },
  ];

  const salesData = [
    { month: "Jan", revenue: 45000, orders: 245, avgOrder: 183.67 },
    { month: "Feb", revenue: 52000, orders: 289, avgOrder: 179.93 },
    { month: "Mar", revenue: 48000, orders: 267, avgOrder: 179.78 },
    { month: "Apr", revenue: 61000, orders: 312, avgOrder: 195.51 },
    { month: "May", revenue: 55000, orders: 298, avgOrder: 184.56 },
    { month: "Jun", revenue: 67000, orders: 334, avgOrder: 200.60 },
  ];

  const topProducts = [
    { name: "Product A", sales: 1245, revenue: 24900, growth: "+12%" },
    { name: "Product B", sales: 1098, revenue: 21960, growth: "+8%" },
    { name: "Product C", sales: 987, revenue: 19740, growth: "+15%" },
    { name: "Product D", sales: 856, revenue: 17120, growth: "-3%" },
    { name: "Product E", sales: 734, revenue: 14680, growth: "+5%" },
  ];

  const categoryData = [
    { name: "Electronics", value: 35, color: "#3b82f6" },
    { name: "Clothing", value: 25, color: "#10b981" },
    { name: "Food", value: 20, color: "#f59e0b" },
    { name: "Books", value: 12, color: "#8b5cf6" },
    { name: "Others", value: 8, color: "#ef4444" },
  ];

  const trendData = [
    { month: "Jan", value: 4200 },
    { month: "Feb", value: 4800 },
    { month: "Mar", value: 4300 },
    { month: "Apr", value: 5200 },
    { month: "May", value: 4900 },
    { month: "Jun", value: 5600 },
  ];

  const maxRevenue = Math.max(...salesData.map(d => d.revenue));

  // Pie chart calculations
  const total = categoryData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  const pieSlices = categoryData.map(item => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    return { ...item, percentage, startAngle, angle };
  });

  // Line chart calculations
  const maxTrendValue = Math.max(...trendData.map(d => d.value));
  const minTrendValue = Math.min(...trendData.map(d => d.value));
  const chartHeight = 200;
  const chartWidth = 500;
  const padding = 20;
  const pointSpacing = (chartWidth - padding * 2) / (trendData.length - 1);

  const linePoints = trendData.map((data, index) => {
    const x = padding + index * pointSpacing;
    const y = chartHeight - padding -
      ((data.value - minTrendValue) / (maxTrendValue - minTrendValue)) *
      (chartHeight - padding * 2);
    return { x, y, value: data.value };
  });

  const pathData = linePoints.map((point, index) =>
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard x</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {stat.label}
              </div>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div
                className={`text-sm font-medium ${
                  stat.trend === "up"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Pie Chart and Line Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Sales by Category</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  {pieSlices.map((slice, index) => {
                    const startAngle = slice.startAngle - 90;
                    const endAngle = startAngle + slice.angle;
                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;
                    const x1 = 100 + 80 * Math.cos(startRad);
                    const y1 = 100 + 80 * Math.sin(startRad);
                    const x2 = 100 + 80 * Math.cos(endRad);
                    const y2 = 100 + 80 * Math.sin(endRad);
                    const largeArc = slice.angle > 180 ? 1 : 0;

                    return (
                      <path
                        key={index}
                        d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={slice.color}
                        className="transition-opacity hover:opacity-80 cursor-pointer"
                      />
                    );
                  })}
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 w-full">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm">
                      {category.name} ({category.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Traffic Trend</h2>
            <div className="flex justify-center">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full max-w-lg"
              >
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const y = padding + (i * (chartHeight - padding * 2)) / 4;
                  return (
                    <line
                      key={i}
                      x1={padding}
                      y1={y}
                      x2={chartWidth - padding}
                      y2={y}
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.1"
                    />
                  );
                })}

                {/* Area under the line */}
                <path
                  d={`${pathData} L ${linePoints[linePoints.length - 1].x} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`}
                  fill="#3b82f6"
                  opacity="0.1"
                />

                {/* Line */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {linePoints.map((point, index) => (
                  <g key={index}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="#3b82f6"
                      className="hover:r-7 transition-all cursor-pointer"
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="3"
                      fill="white"
                    />
                  </g>
                ))}

                {/* X-axis labels */}
                {trendData.map((data, index) => (
                  <text
                    key={index}
                    x={linePoints[index].x}
                    y={chartHeight - 5}
                    textAnchor="middle"
                    fontSize="12"
                    fill="currentColor"
                    opacity="0.6"
                  >
                    {data.month}
                  </text>
                ))}

                {/* Y-axis values */}
                {linePoints.map((point, index) => (
                  <text
                    key={index}
                    x={point.x}
                    y={point.y - 10}
                    textAnchor="middle"
                    fontSize="11"
                    fill="currentColor"
                    opacity="0.8"
                    fontWeight="600"
                  >
                    {point.value}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Bar Chart and Top Products Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Bar Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
            <div className="space-y-3">
              {salesData.map((data, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 text-sm text-gray-600 dark:text-gray-400">
                    {data.month}
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-8 relative overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                      style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                    >
                      <span className="text-xs font-medium text-white">
                        ${(data.revenue / 1000).toFixed(0)}k
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Top Products</h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div className="flex-1">
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {product.sales} sales
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      ${product.revenue.toLocaleString()}
                    </div>
                    <div
                      className={`text-sm ${
                        product.growth.startsWith("+")
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {product.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sales Report Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold">Sales Report</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Avg Order Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {salesData.map((data, index) => {
                  const prevRevenue = index > 0 ? salesData[index - 1].revenue : data.revenue;
                  const isGrowth = data.revenue >= prevRevenue;

                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        {data.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${data.revenue.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.orders}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${data.avgOrder.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            isGrowth
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          }`}
                        >
                          {isGrowth ? "Growing" : "Declining"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
