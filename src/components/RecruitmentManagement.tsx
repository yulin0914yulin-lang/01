import React, { useState } from 'react';
import { 
  Search, User, Edit3, Grid, Layout, MessageSquare, FileText, Database, 
  Bell, Globe, PlayCircle, Shirt, X, LayoutGrid, ChevronDown,
  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, AlertTriangle, CheckCircle, Calendar
} from 'lucide-react';

export function RecruitmentManagement({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data
  const data = [
    { id: 1, code: 'XZ2026010101', name: '2027界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: true },
    { id: 2, code: 'XZ2025010101', name: '2026界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: false },
    { id: 3, code: 'XZ2024010101', name: '2025界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: false },
    { id: 4, code: 'XZ2023010101', name: '2024界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: false },
    { id: 5, code: 'XZ2026010101', name: '2023界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: false },
    { id: 6, code: 'XZ2026010101', name: '2022界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: false },
    { id: 7, code: 'XZ2026010101', name: '2021界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: false },
    { id: 8, code: 'XZ2026010101', name: '2020界校招项目', start: '2026-08-01', end: '2027-05-31', user: '校招组', time: '2025-07-23 14:47:45', active: false },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#F5F7FA] font-sans relative">
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
            <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
               <span className="text-gray-700 text-lg font-medium">校招管理</span>
               <div className="flex gap-2">
                  <button 
                    className="px-5 py-1.5 bg-white border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsModalOpen(true)}
                  >
                    新建
                  </button>
                  <button className="px-5 py-1.5 bg-white border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition-colors">删除</button>
               </div>
            </div>
 
            {/* Content Card */}
            <div className="flex-1 p-4 overflow-hidden">
               <div className="bg-white h-full flex flex-col p-6 shadow-sm rounded-sm">
                  {/* Filters */}
                  <div className="flex gap-4 mb-6">
                     <input type="text" placeholder="活动编号" className="border border-gray-300 px-3 py-1.5 text-sm w-48 rounded-sm outline-none focus:border-blue-500" />
                     <input type="text" placeholder="活动名称" className="border border-gray-300 px-3 py-1.5 text-sm w-48 rounded-sm outline-none focus:border-blue-500" />
                  </div>
 
                  {/* Table */}
                  <div className="flex-1 overflow-auto border border-gray-200">
                     <table className="w-full text-sm text-center border-collapse">
                        <thead className="bg-[#FAFAFA]">
                           <tr>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700 w-10">
                                 <input type="checkbox" />
                              </th>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700 w-16">序号</th>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700">项目编号</th>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700">名称</th>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700">校招期间开始</th>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700">校招期间结束</th>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700">更新人</th>
                              <th className="border-r border-b border-gray-200 py-3 font-normal text-gray-700">更新时间</th>
                              <th className="border-b border-gray-200 py-3 font-normal text-gray-700">操作</th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.map((row) => (
                              <tr key={row.id} className="hover:bg-gray-50">
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">
                                    <input type="checkbox" />
                                 </td>
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">{row.id}</td>
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">{row.code}</td>
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">{row.name}</td>
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">{row.start}</td>
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">{row.end}</td>
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">{row.user}</td>
                                 <td className="border-r border-b border-gray-200 py-3 text-gray-600">{row.time}</td>
                                 <td className="border-b border-gray-200 py-3">
                                    <button 
                                      className={`${row.active ? 'text-[#D9001B]' : 'text-gray-800'} hover:underline`}
                                      onClick={() => {
                                        if (row.id === 1 && onNavigate) {
                                          onNavigate("参数设置");
                                        }
                                      }}
                                    >
                                      详情
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
 
                  {/* Pagination */}
                  <div className="flex justify-end items-center gap-2 mt-4 text-xs text-gray-500">
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
 
       {/* Modal Overlay */}
       {isModalOpen && (
         <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50">
           <div className="bg-white w-[450px] shadow-lg flex flex-col relative rounded-sm">
             {/* Modal Header */}
             <div className="p-4 border-b border-gray-100">
               <h2 className="text-base text-gray-800 font-medium">新建</h2>
             </div>
             
             {/* Modal Body */}
             <div className="px-8 py-8 flex flex-col gap-5">
               {/* Project Name */}
               <div className="flex items-center">
                 <label className="w-28 text-right text-gray-600 text-sm mr-3">
                   <span className="text-red-500 mr-1">*</span>项目名称:
                 </label>
                 <input 
                   type="text" 
                   className="flex-1 border border-gray-300 h-8 px-2 text-sm outline-none focus:border-blue-500 rounded-sm"
                 />
               </div>
 
               {/* Start Date */}
               <div className="flex items-center">
                 <label className="w-28 text-right text-gray-600 text-sm mr-3">
                   <span className="text-red-500 mr-1">*</span>校招期间开始:
                 </label>
                 <div className="flex-1 relative">
                   <input 
                     type="text" 
                     className="w-full border border-gray-300 h-8 px-2 text-sm outline-none focus:border-blue-500 rounded-sm"
                   />
                   <Calendar className="absolute right-2 top-2 text-gray-400" size={16} />
                 </div>
               </div>
 
               {/* End Date */}
               <div className="flex items-center">
                 <label className="w-28 text-right text-gray-600 text-sm mr-3">
                   <span className="text-red-500 mr-1">*</span>校招期间结束:
                 </label>
                 <div className="flex-1 relative">
                   <input 
                     type="text" 
                     className="w-full border border-gray-300 h-8 px-2 text-sm outline-none focus:border-blue-500 rounded-sm"
                   />
                   <Calendar className="absolute right-2 top-2 text-gray-400" size={16} />
                 </div>
               </div>
             </div>
 
             {/* Modal Footer */}
             <div className="p-4 flex justify-end gap-3 border-t border-gray-100 bg-gray-50/50">
               <button 
                 className="px-4 py-1.5 border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 text-sm rounded-sm"
                 onClick={() => setIsModalOpen(false)}
               >
                 取消
               </button>
               <button 
                 className="px-4 py-1.5 bg-[#1890FF] text-white hover:bg-blue-600 text-sm rounded-sm"
                 onClick={() => setIsModalOpen(false)}
               >
                 确定
               </button>
             </div>
           </div>
         </div>
       )}
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
