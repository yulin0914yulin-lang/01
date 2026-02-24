import React from 'react';
import { 
  Search, User, Edit3, Grid, Layout, CheckCircle, AlertTriangle, 
  Bell, PlayCircle, Shirt, X, LayoutGrid, ChevronDown, ChevronRight,
  ArrowLeft, ChevronUp
} from 'lucide-react';

export function RecruitmentParameters() {
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
              <ArrowLeft size={18} className="text-gray-500 mr-2 cursor-pointer" />
              <span className="text-gray-700 text-lg font-medium">校招管理详情页</span>
           </div>

           {/* Content Card */}
           <div className="flex-1 px-6 pb-6 overflow-y-auto">
              <div className="bg-white min-h-full p-8 shadow-sm rounded-sm">
                 
                 {/* Stepper */}
                 <div className="flex items-center justify-center mb-12">
                    <Step number={1} title="参数设置" active />
                    <StepLine />
                    <Step number={2} title="需求收集" />
                    <StepLine />
                    <Step number={3} title="公司审核" />
                    <StepLine />
                    <Step number={4} title="岗位发布" />
                 </div>

                 {/* Section 1: Basic Info */}
                 <div className="mb-8">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                       <div className="flex items-center gap-2 border-l-4 border-[#1890FF] pl-2">
                          <span className="text-[#1890FF] font-medium text-lg">基本信息</span>
                       </div>
                       <div className="flex items-center gap-1 text-gray-500 cursor-pointer text-sm">
                          收起 <ChevronUp size={16} />
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-8 text-xs text-gray-700 whitespace-nowrap">
                       <div className="flex items-center gap-2">
                          <span>项目编号 :</span>
                          <span>XZ2026010101</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <span>项目名称 :</span>
                          <input type="text" defaultValue="2027界校招项目" className="border border-gray-300 px-2 py-1 w-48 text-xs" />
                       </div>
                       <div className="flex items-center gap-2">
                          <span>开始/结束时间 :</span>
                          <input type="text" defaultValue="2026-08-01 ~ 2027-05-31" className="border border-gray-300 px-2 py-1 w-56 text-xs" />
                       </div>
                       <button className="ml-auto px-6 py-1 border border-gray-400 text-gray-700 hover:bg-gray-50 text-xs">保存</button>
                    </div>
                 </div>

                 {/* Section 2: Recruitment Maintenance */}
                 <div>
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                       <div className="flex items-center gap-2 border-l-4 border-[#1890FF] pl-2">
                          <span className="text-[#1890FF] font-medium text-lg">校招维护</span>
                       </div>
                       <div className="flex items-center gap-1 text-gray-500 cursor-pointer text-sm">
                          收起 <ChevronUp size={16} />
                       </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <Edit3 size={16} />
                          <span>校招窗口期</span>
                       </div>
                       <button className="px-6 py-1 border border-gray-400 text-gray-700 hover:bg-gray-50 text-xs">保存</button>
                    </div>

                    <table className="w-full text-xs text-center border-collapse border border-gray-200 whitespace-nowrap">
                       <thead className="bg-[#F5F5F5]">
                          <tr>
                             <th className="border border-gray-200 py-3 font-normal text-gray-700">阶段类型</th>
                             <th className="border border-gray-200 py-3 font-normal text-gray-700">阶段开始日期</th>
                             <th className="border border-gray-200 py-3 font-normal text-gray-700">阶段结束日期</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                             <td className="border border-gray-200 py-3 text-gray-700">一阶段-实际需求部门</td>
                             <td className="border border-gray-200 py-3 text-gray-700">2025-07-08</td>
                             <td className="border border-gray-200 py-3 text-gray-700">2025-07-08</td>
                          </tr>
                          <tr>
                             <td className="border border-gray-200 py-3 text-gray-700">二阶段-一级部门</td>
                             <td className="border border-gray-200 py-3 text-gray-700">2025-07-08</td>
                             <td className="border border-gray-200 py-3 text-gray-700">2025-07-08</td>
                          </tr>
                          <tr>
                             <td className="border border-gray-200 py-3 text-gray-700">三阶段-公司</td>
                             <td className="border border-gray-200 py-3 text-gray-700">2025-07-08</td>
                             <td className="border border-gray-200 py-3 text-gray-700">2025-07-08</td>
                          </tr>
                       </tbody>
                    </table>
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
