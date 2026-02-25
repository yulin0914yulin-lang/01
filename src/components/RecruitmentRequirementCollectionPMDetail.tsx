import React from 'react';
import { 
  Search, User, Edit3, Grid, Layout, CheckCircle, AlertTriangle, 
  Bell, PlayCircle, Shirt, X, LayoutGrid, ChevronDown, ChevronRight,
  ArrowLeft, ChevronUp, ChevronsLeft, ChevronLeft, ChevronsRight
} from 'lucide-react';

export function RecruitmentRequirementCollectionPMDetail({ onNavigate }: { onNavigate?: (page: string) => void }) {
  // Mock data matching the screenshot
  const data = [
    { id: 1, actualDept: '实际部门1', fullPath: '一级部门/实际部门1', processNo: '', currentCount: 6, recentCount: 12, posCount: 5, totalCount: 23, nineStars: 3, campus: 20, intern: 0, status: '未开始', submitter: '测试01', approver: '姓名1', operation: '详情', isRed: true },
    { id: 2, actualDept: '实际部门2', fullPath: '一级部门/部门/实际部门2', processNo: '', currentCount: 6, recentCount: 12, posCount: 7, totalCount: 21, nineStars: 20, campus: 1, intern: 0, status: '审批中', submitter: '测试02', approver: '姓名2', operation: '详情', isRed: false },
    { id: 3, actualDept: '实际部门3', fullPath: '一级部门/实际部门3', processNo: '', currentCount: 6, recentCount: 12, posCount: 8, totalCount: 57, nineStars: 0, campus: 0, intern: 57, status: '已完成', submitter: '测试03', approver: '姓名3', operation: '详情', isRed: false },
    { id: 4, actualDept: '实际部门4', fullPath: '一级部门/实际部门4', processNo: '', currentCount: 7, recentCount: 3, posCount: 9, totalCount: 86, nineStars: 46, campus: 40, intern: 0, status: '待提交', submitter: '测试04', approver: '姓名4', operation: '详情', isRed: false },
    { id: 5, actualDept: '实际部门5', fullPath: '一级部门/实际部门5', processNo: '', currentCount: 7, recentCount: 21, posCount: 4, totalCount: 45, nineStars: 20, campus: 20, intern: 5, status: '审批中', submitter: '测试05', approver: '姓名5', operation: '详情', isRed: false },
    { id: 6, actualDept: '实际部门6', fullPath: '一级部门/实际部门6', processNo: '', currentCount: 8, recentCount: 1, posCount: 12, totalCount: 65, nineStars: 35, campus: 30, intern: 0, status: '已完成', submitter: '测试06', approver: '姓名6', operation: '详情', isRed: false },
    { id: 7, actualDept: '实际部门7', fullPath: '一级部门/实际部门7', processNo: '', currentCount: 9, recentCount: 8, posCount: 11, totalCount: 12, nineStars: 0, campus: 0, intern: 12, status: '审批中', submitter: '测试07', approver: '姓名7', operation: '详情', isRed: false },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#F5F7FA] font-sans">
      {/* Blue Header */}
      <div className="h-12 bg-[#1890FF] flex items-center justify-between px-4 shrink-0 text-white">
        <div className="flex items-center gap-8 h-full">
           <div className="flex items-center gap-2 font-bold text-base tracking-wide">
             <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">HR</span>
             </div>
             HR2.0开发环境
           </div>
           <div className="flex items-end self-end h-full">
              <div className="flex items-center gap-2 px-4 py-1.5 text-white/80 text-sm cursor-pointer hover:text-white mb-1">
                 <LayoutGrid size={14} />
                 工作台
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#F0F2F5] text-[#1890FF] text-sm rounded-t-lg cursor-pointer shadow-sm relative top-[1px]">
                 校招管理
                 <X size={12} className="text-gray-400 hover:text-gray-600 ml-2" />
              </div>
           </div>
        </div>
        <div className="flex items-center gap-5 text-sm">
           <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
             HR租户 <ChevronDown size={12} />
           </div>
           <Shirt size={16} className="cursor-pointer hover:opacity-80" />
           <Bell size={16} className="cursor-pointer hover:opacity-80" />
           <PlayCircle size={16} className="cursor-pointer hover:opacity-80" />
           <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
             简体中文 <ChevronDown size={12} />
           </div>
           <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
             <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
               <img src="https://picsum.photos/32/32" alt="avatar" referrerPolicy="no-referrer" />
             </div>
             hr租户管理员 <ChevronDown size={12} />
           </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Inner Sidebar */}
        <div className="w-40 bg-white border-r border-gray-200 flex flex-col shrink-0">
           <div className="p-3 border-b border-gray-100">
              <div className="relative">
                 <input 
                   type="text" 
                   placeholder="菜单搜索" 
                   className="w-full bg-[#F5F7FA] border-none rounded px-8 py-1.5 text-sm outline-none placeholder-gray-400"
                 />
                 <Search size={14} className="absolute left-2.5 top-2 text-gray-400" />
              </div>
           </div>
           <div className="flex-1 overflow-y-auto py-2">
              <SidebarItem icon={<User size={16} />} label="XXXXXX" />
              <SidebarItem icon={<Edit3 size={16} />} label="校招管理" active />
              <SidebarItem icon={<Grid size={16} />} label="系统管理" />
              <SidebarItem icon={<Layout size={16} />} label="开发管理" />
              <SidebarItem icon={<CheckCircle size={16} />} label="消息管理" />
              <SidebarItem icon={<AlertTriangle size={16} />} label="文件管理" />
              <SidebarItem icon={<User size={16} />} label="基础数据管理" />
           </div>
        </div>

        {/* Inner Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#F0F2F5]">
           {/* Breadcrumb/Title Bar */}
           <div className="h-14 bg-[#F5F7FA] flex items-center px-6 shrink-0">
              <ArrowLeft 
                size={18} 
                className="text-gray-500 mr-2 cursor-pointer hover:text-gray-700" 
                onClick={() => onNavigate && onNavigate("需求收集-校招PM")}
              />
              <span className="text-gray-700 text-lg font-medium">校招管理详情页</span>
           </div>

           {/* Content Card */}
           <div className="flex-1 px-6 pb-6 overflow-y-auto">
              <div className="bg-white min-h-full p-8 shadow-sm rounded-sm flex flex-col">
                 
                 {/* Stepper */}
                 <div className="flex items-center justify-center mb-12 shrink-0">
                    <Step number={1} title="参数设置" />
                    <StepLine />
                    <Step number={2} title="需求收集" active />
                    <StepLine />
                    <Step number={3} title="公司审核" />
                    <StepLine />
                    <Step number={4} title="岗位发布" />
                 </div>

                 {/* Section 1: Basic Info */}
                 <div className="mb-8 shrink-0">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                       <div className="flex items-center gap-2 border-l-4 border-[#1890FF] pl-2">
                          <span className="text-[#1890FF] font-medium text-lg">基本信息</span>
                       </div>
                       <div className="flex items-center gap-1 text-gray-500 cursor-pointer text-sm">
                          收起 <ChevronUp size={16} />
                       </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 text-xs text-gray-700 whitespace-nowrap px-4">
                       <div className="flex items-center gap-20">
                          <div className="flex items-center gap-2">
                             <span>项目编号 :</span>
                             <span>XZ2026010101</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <span>项目名称 :</span>
                             <span>2027界校招项目</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <span>已填写招聘人数 :</span>
                             <span>300</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-2">
                          <span>开始/结束时间 :</span>
                          <span>2026-08-01 ~ 2027-05-31</span>
                       </div>
                    </div>
                 </div>

                 {/* Section 2: Recruitment Requirements */}
                 <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2 shrink-0">
                       <div className="flex items-center gap-2 border-l-4 border-[#1890FF] pl-2">
                          <span className="text-[#1890FF] font-medium text-lg">校招需求</span>
                       </div>
                       <div className="flex items-center gap-1 text-gray-500 cursor-pointer text-sm">
                          收起 <ChevronUp size={16} />
                       </div>
                    </div>

                    {/* Toolbar */}
                    <div className="flex items-center justify-between mb-4 shrink-0 flex-wrap gap-4">
                       <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                             <span className="text-gray-600">部门</span>
                             <div className="relative">
                               <input type="text" className="border border-gray-300 rounded px-2 py-1 w-32 outline-none focus:border-blue-500" />
                               <Search size={14} className="absolute right-2 top-2 text-gray-400" />
                             </div>
                          </div>
                          <div className="flex items-center gap-2">
                             <span className="text-gray-600">提交人</span>
                             <input type="text" className="border border-gray-300 rounded px-2 py-1 w-32 outline-none focus:border-blue-500" />
                          </div>
                          <div className="flex items-center gap-2">
                             <span className="text-gray-600">审批状态</span>
                             <input type="text" className="border border-gray-300 rounded px-2 py-1 w-32 outline-none focus:border-blue-500" />
                          </div>
                       </div>
                       <div className="flex items-center gap-2">
                          <button className="px-4 py-1 border border-gray-400 text-gray-700 hover:bg-gray-50 text-sm">驳回</button>
                          <button className="px-4 py-1 border border-gray-400 text-gray-700 hover:bg-gray-50 text-sm">导出</button>
                       </div>
                    </div>

                    {/* Table Container with Horizontal Scroll */}
                    <div className="flex-1 overflow-auto border border-gray-200 relative">
                       <table className="w-max min-w-full text-xs text-center border-collapse">
                          <thead className="bg-[#FAFAFA] sticky top-0 z-10">
                             <tr>
                                <th className="border-r border-b border-gray-200 py-3 px-2 w-10">
                                   <input type="checkbox" />
                                </th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">序号</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">实际需求部门</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">部门全路径</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">校招流程单号<br/>一阶段</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">部门现有人数</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">近三年校招生数</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">岗位数</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">招聘总人数</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">九号星招聘人<br/>数</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">校招生招聘人<br/>数</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">暑期实习招聘<br/>人数</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">审批状态</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">提交人</th>
                                <th className="border-r border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">当前审批人</th>
                                <th className="border-b border-gray-200 py-3 px-2 font-normal text-gray-700 whitespace-nowrap">操作</th>
                             </tr>
                          </thead>
                          <tbody>
                             {data.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                   <td className="border-r border-b border-gray-200 py-3 px-2">
                                      <input type="checkbox" />
                                   </td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.id}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.actualDept}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.fullPath}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.processNo}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.currentCount}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.recentCount}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.posCount}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.totalCount}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.nineStars}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.campus}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.intern}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.status}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.submitter}</td>
                                   <td className="border-r border-b border-gray-200 py-3 px-2 text-gray-600 whitespace-nowrap">{row.approver}</td>
                                   <td className="border-b border-gray-200 py-3 px-2 whitespace-nowrap">
                                      <button 
                                        className={`${row.isRed ? 'text-[#D9001B]' : 'text-gray-800'} hover:underline`}
                                        onClick={() => {
                                          if (row.id === 1 && onNavigate) {
                                            onNavigate("校招审批单-需求部门");
                                          }
                                        }}
                                      >
                                        {row.operation}
                                      </button>
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end items-center gap-2 mt-4 text-xs text-gray-500 shrink-0">
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><ChevronsLeft size={14} /></button>
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><ChevronLeft size={14} /></button>
                       <button className="w-6 h-6 flex items-center justify-center border border-blue-500 rounded bg-[#1890FF] text-white">1</button>
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">2</button>
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">3</button>
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">4</button>
                       <span className="mx-1">...</span>
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">10</button>
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><ChevronRight size={14} /></button>
                       <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><ChevronsRight size={14} /></button>
                       <select className="border border-gray-200 rounded p-1 ml-2 bg-white outline-none">
                         <option>10条/页</option>
                       </select>
                    </div>
                 </div>

              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

const SidebarItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-3 cursor-pointer text-sm border-l-4 transition-colors ${active ? 'bg-[#E6F7FF] text-[#1890FF] border-[#1890FF]' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}>
     <span className={`${active ? 'text-[#1890FF]' : 'text-gray-500'}`}>{icon}</span>
     <span>{label}</span>
     <ChevronRight size={14} className="ml-auto text-gray-300" />
  </div>
);

const Step = ({ number, title, active = false }: { number: number, title: string, active?: boolean }) => (
  <div className="flex items-center gap-2">
     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${active ? 'bg-[#1890FF]' : 'bg-[#CCCCCC]'}`}>
        {number}
     </div>
     <span className={`font-bold ${active ? 'text-gray-800' : 'text-gray-500'}`}>{title}</span>
  </div>
);

const StepLine = () => (
  <div className="w-16 h-[2px] bg-gray-300 mx-4"></div>
);
