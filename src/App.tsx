import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { RecruitmentApplication } from './components/RecruitmentApplication';
import { RecruitmentApproval } from './components/RecruitmentApproval';
import { RecruitmentApprovalLevel1 } from './components/RecruitmentApprovalLevel1';
import { RecruitmentApprovalCompany } from './components/RecruitmentApprovalCompany';
import { RecruitmentChangeOrder } from './components/RecruitmentChangeOrder';
import { RecruitmentManagement } from './components/RecruitmentManagement';
import { RecruitmentParameters } from './components/RecruitmentParameters';
import { RecruitmentCompanyAudit } from './components/RecruitmentCompanyAudit';
import { RecruitmentDetails } from './components/RecruitmentDetails';
import { RecruitmentRequirementCollectionGroup } from './components/RecruitmentRequirementCollectionGroup';
import { RecruitmentRequirementCollectionDetail } from './components/RecruitmentRequirementCollectionDetail';
import { RecruitmentRequirementCollectionPM } from './components/RecruitmentRequirementCollectionPM';
import { RecruitmentRequirementCollectionPMDetail } from './components/RecruitmentRequirementCollectionPMDetail';
import { RecruitmentJobPublish } from './components/RecruitmentJobPublish';

export default function App() {
  const [activePage, setActivePage] = useState("校招申请单");

  return (
    <div className="flex h-screen bg-[#F0F2F5] font-sans overflow-hidden">
      <Sidebar activePage={activePage} onSelect={setActivePage} />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <main className="flex-1 overflow-y-auto h-full">
          {(activePage === "校招申请单" || activePage === "校招申请单（非窗口期）") && (
            <RecruitmentApplication isNonWindowPeriod={activePage === "校招申请单（非窗口期）"} />
          )}
          {activePage === "校招审批单-需求部门" && <RecruitmentApproval />}
          {activePage === "校招审批单-一级部门" && <RecruitmentApprovalLevel1 />}
          {activePage === "校招审批单-公司" && <RecruitmentApprovalCompany />}
          {activePage === "校招变更单" && <RecruitmentChangeOrder />}
          {activePage === "校招管理" && <RecruitmentManagement onNavigate={setActivePage} />}
          {activePage === "参数设置" && <RecruitmentParameters onNavigate={setActivePage} />}
          {activePage === "公司审核" && <RecruitmentCompanyAudit onNavigate={setActivePage} />}
          {activePage === "招聘详情" && <RecruitmentDetails />}
          {activePage === "需求收集-校招组" && <RecruitmentRequirementCollectionGroup onNavigate={setActivePage} />}
          {activePage === "需求收集-校招组-详情" && <RecruitmentRequirementCollectionDetail onNavigate={setActivePage} />}
          {activePage === "需求收集-校招PM" && <RecruitmentRequirementCollectionPM onNavigate={setActivePage} />}
          {activePage === "需求收集-校招PM-详情" && <RecruitmentRequirementCollectionPMDetail onNavigate={setActivePage} />}
          {activePage === "岗位发布" && <RecruitmentJobPublish onNavigate={setActivePage} />}
          
          {/* Default fallback or other pages can be added here */}
          {activePage !== "校招申请单" && 
           activePage !== "校招申请单（非窗口期）" && 
           activePage !== "校招审批单-需求部门" && 
           activePage !== "校招审批单-一级部门" && 
           activePage !== "校招审批单-公司" && 
           activePage !== "校招变更单" && 
           activePage !== "校招管理" && 
           activePage !== "参数设置" && 
           activePage !== "公司审核" && 
           activePage !== "招聘详情" && 
           activePage !== "需求收集-校招组" && 
           activePage !== "需求收集-校招组-详情" && 
           activePage !== "需求收集-校招PM" && 
           activePage !== "需求收集-校招PM-详情" && 
           activePage !== "岗位发布" && (
             <div className="p-10 text-center text-gray-500">
               页面 "{activePage}" 正在开发中...
             </div>
          )}
        </main>
      </div>
    </div>
  );
}
