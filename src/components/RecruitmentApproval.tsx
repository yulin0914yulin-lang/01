import React from 'react';
import { Section } from './Section';
import { StaticText, Label } from './FormFields';

const ReadOnlyField = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 mb-4">
    <span className="text-sm font-bold text-gray-700 min-w-[5em]">{label}</span>
    <div className="bg-[#F2F3F5] h-9 flex-1 rounded-sm"></div>
  </div>
);

const ReadOnlyTextArea = ({ label, height = "h-24" }: { label: string, height?: string }) => (
  <div className="mb-4">
    <div className="text-sm font-bold text-gray-700 mb-2">{label}</div>
    <div className={`bg-[#F2F3F5] ${height} w-full rounded-sm`}></div>
  </div>
);

export function RecruitmentApproval() {
  return (
     <div className="max-w-7xl mx-auto px-6 py-4 space-y-4 pb-20">
        {/* Header Block */}
        <div className="bg-white px-6 py-4 border border-gray-200 shadow-sm flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">招聘审批单</h1>
          <div className="flex gap-3">
            <button className="px-6 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              退回
            </button>
            <button className="px-6 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              批准
            </button>
          </div>
        </div>

        {/* Basic Info */}
        <Section title="基本信息">
          <div className="grid grid-cols-4 gap-6 bg-white p-6 border border-gray-100">
            <StaticText label="单据编号" value="NEW" />
            <StaticText label="申请人" value="辛测试" />
          </div>
        </Section>

        {/* Department Info */}
        <Section title="需求部门情况">
          <div className="grid grid-cols-4 gap-6 bg-white p-6 border border-gray-100">
             <ReadOnlyField label="校招项目" />
             <ReadOnlyField label="实际需求部门" />
             <ReadOnlyField label="部门现有人数" />
             <ReadOnlyField label="近三年校招生数" />
          </div>
        </Section>

        {/* Job Position Info */}
        <Section title="招聘岗位情况">
          <div className="bg-white p-6 border border-gray-100">
             <div className="mb-4 font-bold text-sm text-gray-700">序号 1</div>
             
             <div className="grid grid-cols-4 gap-x-12 gap-y-2">
                <ReadOnlyField label="职族" />
                <ReadOnlyField label="序列" />
                <ReadOnlyField label="职级" />
                <ReadOnlyField label="岗位" />
                
                <ReadOnlyField label="招聘岗位人数" />
                <ReadOnlyField label="人才类型" />
                <ReadOnlyField label="直接上级" />
                <ReadOnlyField label="学历" />
                
                <ReadOnlyField label="专业" />
                <ReadOnlyField label="语言要求" />
                
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-sm font-bold text-gray-700 min-w-[5em]">公司任职资格标准</span>
                   <a href="#" className="text-sm text-cyan-500 hover:underline">点击链接查看任职资格详情</a>
                </div>
             </div>

             <div className="mt-2 space-y-6">
                <ReadOnlyTextArea label="岗位招聘申请理由" />
                
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-8">
                    <ReadOnlyTextArea label="任职资格" height="h-32" />
                  </div>
                  <div className="col-span-4">
                     <Label label="任职资格自查项" />
                     <div className="space-y-2 mt-2">
                      {[
                        "学历+专业+经验等是否齐全-任职资格",
                        "能力/特质，是否清晰明确-任职资格",
                        "必要的附加要求是否明确-任职资格"
                      ].map((item, i) => (
                        <label key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <input type="radio" disabled className="mt-0.5" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-8">
                    <ReadOnlyTextArea label="工作职责" height="h-32" />
                  </div>
                  <div className="col-span-4">
                     <Label label="自查项" />
                     <div className="space-y-2 mt-2">
                      {[
                        "职责数量在3-5项-工作职责",
                        "各职责聚焦，不重复-工作职责",
                        "清晰描述做什么及达成成果-工作职责",
                        "职责按重要性降序排列-工作职责"
                      ].map((item, i) => (
                        <label key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <input type="radio" disabled className="mt-0.5" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <ReadOnlyTextArea label="其他要求" />
             </div>
          </div>
        </Section>
     </div>
  );
}
