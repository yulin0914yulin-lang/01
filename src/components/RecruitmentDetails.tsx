import React from 'react';
import { 
  Search, User, Edit3, Grid, Layout, CheckCircle, AlertTriangle, 
  Bell, PlayCircle, Shirt, X, LayoutGrid, ChevronDown, ChevronRight,
  ChevronsLeft, ChevronLeft, ChevronsRight, ArrowLeft
} from 'lucide-react';

export function RecruitmentDetails() {
  // Mock data matching the screenshot
  const data = [
    { id: 1, position: '岗位1', dept: '实际部门1', path: '一级部门/实际部门1', type: '九号星', owner: '负责人1', family: 'M', level: '1', count: 23, project: '九号星', stage1: '待提交', stage2: '校招PM未提交', stage3: '待提交', published: '是', offer: 1, joined: 0, abandoned: 1 },
    { id: 2, position: '岗位2', dept: '实际部门2', path: '一级部门/实际部门2', type: '校招生', owner: '负责人1', family: 'P', level: '2', count: 21, project: '九号星', stage1: '已完成', stage2: '已完成', stage3: '已完成', published: '是', offer: 2, joined: 1, abandoned: 2 },
    { id: 3, position: '岗位3', dept: '实际部门3', path: '一级部门/实际部门3', type: '暑期实习', owner: '负责人1', family: 'O', level: '3', count: 57, project: '九号星', stage1: '已完成', stage2: '主BP审核中', stage3: '待提交', published: '是', offer: 3, joined: 2, abandoned: 3 },
    { id: 4, position: '岗位4', dept: '实际部门4', path: '一级部门/实际部门4', type: '九号星', owner: '负责人1', family: 'Z', level: '4', count: 86, project: '校招生', stage1: '已完成', stage2: '一级部门负责人审批中', stage3: '待提交', published: '是', offer: 1, joined: 1, abandoned: 1 },
    { id: 5, position: '岗位5', dept: '实际部门5', path: '一级部门/实际部门5', type: '校招生', owner: '负责人1', family: 'P', level: '5', count: 45, project: '校招生', stage1: '审核中', stage2: '校招PM未提交', stage3: '待提交', published: '是', offer: 1, joined: 1, abandoned: 1 },
    { id: 6, position: '岗位6', dept: '实际部门6', path: '一级部门/实际部门6', type: '暑期实习', owner: '负责人1', family: 'O', level: '6', count: 65, project: '暑期实习项目', stage1: '已完成', stage2: '已完成', stage3: '审核中', published: '是', offer: 1, joined: 1, abandoned: 1 },
    { id: 7, position: '岗位7', dept: '实际部门7', path: '一级部门/实际部门7', type: '九号星', owner: '负责人1', family: 'Z', level: '7', count: 12, project: '暑期实习项目', stage1: '已完成', stage2: '已完成', stage3: '已完成', published: '是', offer: 1, joined: 1, abandoned: 1 },
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
           <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
              <span className="text-gray-700 text-lg font-medium">招聘详情</span>
              <button className="px-5 py-1.5 bg-white border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition-colors">导出</button>
           </div>

           {/* Content Card */}
           <div className="flex-1 p-4 overflow-hidden flex flex-col">
              <div className="bg-white flex-1 flex flex-col p-6 shadow-sm rounded-sm overflow-hidden">
                 
                 {/* Section Title */}
                 <div className="flex items-center gap-2 border-l-4 border-[#1890FF] pl-2 mb-6">
                    <span className="text-[#1890FF] font-medium text-lg">校招详情</span>
                 </div>

                 {/* Filters */}
                 <div className="flex flex-wrap gap-4 mb-6">
                    <input type="text" placeholder="2027界校招项目" className="border border-gray-300 px-3 py-1.5 text-sm w-40 rounded-sm outline-none focus:border-blue-500" />
                    <input type="text" placeholder="岗位名称" className="border border-gray-300 px-3 py-1.5 text-sm w-40 rounded-sm outline-none focus:border-blue-500" />
                    <input type="text" placeholder="实际需求部门" className="border border-gray-300 px-3 py-1.5 text-sm w-40 rounded-sm outline-none focus:border-blue-500" />
                    <input type="text" placeholder="申请人" className="border border-gray-300 px-3 py-1.5 text-sm w-40 rounded-sm outline-none focus:border-blue-500" />
                    <input type="text" placeholder="一阶段审批状态" className="border border-gray-300 px-3 py-1.5 text-sm w-40 rounded-sm outline-none focus:border-blue-500" />
                    <input type="text" placeholder="二阶段审批状态" className="border border-gray-300 px-3 py-1.5 text-sm w-40 rounded-sm outline-none focus:border-blue-500" />
                    <input type="text" placeholder="三阶段审批状态" className="border border-gray-300 px-3 py-1.5 text-sm w-40 rounded-sm outline-none focus:border-blue-500" />
                 </div>

                 {/* Table Container with Horizontal Scroll */}
                 <div className="flex-1 overflow-auto border border-gray-200 relative">
                    <table className="w-max min-w-full text-sm text-center border-collapse">
                       <thead className="bg-[#FAFAFA] sticky top-0 z-10">
                          <tr>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">序号</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">岗位</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">实际需求部门</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">部门全路径</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">关联项目名称</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">人才类型</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">招聘负责人</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">职族</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">职级</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">岗位招聘人数</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">校招项目</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">一阶段审批状态</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">二阶段审批状态</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">三阶段审批状态</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">是否发布需求</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">offer发放</th>
                             <th className="border-r border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">已入职</th>
                             <th className="border-b border-gray-200 py-3 px-4 font-normal text-gray-700 whitespace-nowrap">放弃入职</th>
                          </tr>
                       </thead>
                       <tbody>
                          {data.map((row) => (
                             <tr key={row.id} className="hover:bg-gray-50">
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.id}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.position}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.dept}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.path}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">2026界春招</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.type}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.owner}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.family}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.level}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.count}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.project}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.stage1}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.stage2}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.stage3}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.published}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.offer}</td>
                                <td className="border-r border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.joined}</td>
                                <td className="border-b border-gray-200 py-3 px-4 text-gray-600 whitespace-nowrap">{row.abandoned}</td>
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
