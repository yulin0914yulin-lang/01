import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { RecruitmentApplication } from './components/RecruitmentApplication';
import { RecruitmentApproval } from './components/RecruitmentApproval';
import { RecruitmentApprovalLevel1 } from './components/RecruitmentApprovalLevel1';
import { RecruitmentApprovalCompany } from './components/RecruitmentApprovalCompany';

export default function App() {
  const [activePage, setActivePage] = useState("校招申请单");

  return (
    <div className="flex h-screen bg-[#F0F2F5] font-sans overflow-hidden">
      <Sidebar activePage={activePage} onSelect={setActivePage} />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {activePage === "校招申请单" && <RecruitmentApplication />}
          {activePage === "校招审批单-实际需求部门" && <RecruitmentApproval />}
          {activePage === "校招审批单-一级部门" && <RecruitmentApprovalLevel1 />}
          {activePage === "校招审批单-公司" && <RecruitmentApprovalCompany />}
          
          {/* Default fallback or other pages can be added here */}
          {activePage !== "校招申请单" && 
           activePage !== "校招审批单-实际需求部门" && 
           activePage !== "校招审批单-一级部门" && 
           activePage !== "校招审批单-公司" && (
             <div className="p-10 text-center text-gray-500">
               页面 "{activePage}" 正在开发中...
             </div>
          )}
        </main>
      </div>
    </div>
  );
}
