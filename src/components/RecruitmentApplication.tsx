import React, { useState } from 'react';
import { Section } from './Section';
import { TextInput, SearchInput, Select, TextArea, StaticText, Label } from './FormFields';

export function RecruitmentApplication({ isNonWindowPeriod = false }: { isNonWindowPeriod?: boolean }) {
  const [activeTab, setActiveTab] = useState(0); // 0: 需求需求, 1: 关联历史招聘需求

  const FormContent = () => (
    <div className="space-y-4 pt-4 animate-in fade-in duration-300">
      {/* Original Department Info fields */}
      <div className="grid grid-cols-4 gap-6 bg-white p-6 border border-gray-100 mb-4 shadow-sm rounded-sm">
        {!isNonWindowPeriod && <SearchInput label="校招项目" required />}
        <Select label="实际需求部门" required />
        {activeTab === 1 && <SearchInput label="关联项目岗位" required />}
        <StaticText label="部门现有人数" value="4" />
        <StaticText label="近三年校招生数" value="5" />
      </div>

      {/* Original Job Position Info Content */}
      <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm">
        {/* Toolbar */}
        <div className="flex justify-end gap-2 mb-4">
          <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">导入</button>
          <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">添加</button>
          <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">删除</button>
          <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">复制</button>
        </div>

        {/* Job Item Card */}
        <div className="bg-[#F7F8FA] border border-gray-200 p-4 rounded-sm">
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
            <span className="font-bold text-sm text-gray-700">序号 1</span>
          </div>

          {/* Grid Form */}
          <div className="grid grid-cols-4 gap-x-6 gap-y-2">
            <TextInput label="职族" required defaultValue="P" disabled />
            <SearchInput label="序列" required />
            <TextInput label="职级" required disabled />
            <SearchInput label="岗位" required />
            
            <TextInput label="招聘岗位人数" required />
            <Select label="人才类型" required />
            <SearchInput label="直接上级" required />
            <Select label="学历要求" required />
            
            <TextInput label="专业要求" required />
            <Select label="语言要求" required />
          </div>

          {/* Text Areas Section */}
          <div className="mt-2 space-y-6">
            <TextArea label="岗位招聘申请理由" required className="bg-white" rows={4} />

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <TextArea 
                  label={<span>任职资格 <a href="#" className="text-cyan-500 hover:underline font-normal ml-1">（点击链接查看任职资格详情）</a></span>} 
                  required 
                  className="bg-white h-full" 
                />
              </div>
              <div className="col-span-4">
                <Label label="任职资格自查项" required />
                <div className="space-y-2 mt-2">
                  {[
                    "学历+专业+经验等是否齐全-任职资格",
                    "能力/特质，是否清晰明确-任职资格",
                    "必要的附加要求是否明确-任职资格"
                  ].map((item, i) => (
                    <label key={i} className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer">
                      <input type="radio" name={`qual_check_${activeTab}_${i}`} className="mt-0.5" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <TextArea label="工作职责" required className="bg-white h-full" />
              </div>
              <div className="col-span-4">
                <Label label="自查项" required />
                <div className="space-y-2 mt-2">
                  {[
                    "职责数量在3-5项-工作职责",
                    "各职责聚焦，不重复-工作职责",
                    "清晰描述做什么及达成成果-工作职责",
                    "职责按重要性降序排列-工作职责"
                  ].map((item, i) => (
                    <label key={i} className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer">
                      <input type="radio" name={`resp_check_${activeTab}_${i}`} className="mt-0.5" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <TextArea label="其他要求" required className="bg-white" rows={4} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-4 space-y-4 pb-20">
      {/* Header Block */}
      <div className="bg-white px-6 py-4 border border-gray-200 shadow-sm flex items-center justify-between rounded-sm">
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">
          {isNonWindowPeriod ? "校招申请单（非窗口期）" : "招聘申请单"}
        </h1>
        <div className="flex gap-3">
          <button className="px-6 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
            保存
          </button>
          <button className="px-6 py-1.5 bg-[#1890FF] text-white border border-[#1890FF] rounded-sm text-sm hover:bg-blue-600 transition-all shadow-md font-medium">
            提交
          </button>
        </div>
      </div>

      {/* Section 1: Basic Info */}
      <Section title="基本信息">
        <div className="grid grid-cols-4 gap-6 bg-white p-6 border border-gray-100 shadow-sm rounded-sm">
          <StaticText label="单据编号" value="NEW" />
          <StaticText label="申请人" value="辛测试" />
        </div>
      </Section>

      {/* Merged Section with Tabs or Original Sections */}
      {isNonWindowPeriod ? (
        <>
          <Section title="需求部门情况">
            <div className="grid grid-cols-4 gap-6 bg-white p-6 border border-gray-100 rounded-sm">
              <Select label="实际需求部门" required />
              <StaticText label="部门现有人数" value="4" />
              <StaticText label="近三年校招生数" value="5" />
            </div>
          </Section>

          <Section title="招聘岗位情况">
            <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm">
              {/* Toolbar */}
              <div className="flex justify-end gap-2 mb-4">
                <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">导入</button>
                <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">添加</button>
                <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">删除</button>
                <button className="px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">复制</button>
              </div>

              {/* Job Item Card */}
              <div className="bg-[#F7F8FA] border border-gray-200 p-4 rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                  <span className="font-bold text-sm text-gray-700">序号 1</span>
                </div>

                {/* Grid Form */}
                <div className="grid grid-cols-4 gap-x-6 gap-y-2">
                  <TextInput label="职族" required defaultValue="P" disabled />
                  <SearchInput label="序列" required />
                  <TextInput label="职级" required disabled />
                  <SearchInput label="岗位" required />
                  
                  <TextInput label="招聘岗位人数" required />
                  <Select label="人才类型" required />
                  <SearchInput label="直接上级" required />
                  <Select label="学历要求" required />
                  
                  <TextInput label="专业要求" required />
                  <Select label="语言要求" required />
                </div>

                {/* Text Areas Section */}
                <div className="mt-2 space-y-6">
                  <TextArea label="岗位招聘申请理由" required className="bg-white" rows={4} />

                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">
                      <TextArea 
                        label={<span>任职资格 <a href="#" className="text-cyan-500 hover:underline font-normal ml-1">（点击链接查看任职资格详情）</a></span>} 
                        required 
                        className="bg-white h-full" 
                      />
                    </div>
                    <div className="col-span-4">
                      <Label label="任职资格自查项" required />
                      <div className="space-y-2 mt-2">
                        {[
                          "学历+专业+经验等是否齐全-任职资格",
                          "能力/特质，是否清晰明确-任职资格",
                          "必要的附加要求是否明确-任职资格"
                        ].map((item, i) => (
                          <label key={i} className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer">
                            <input type="radio" name="qual_check_nv" className="mt-0.5" />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">
                      <TextArea label="工作职责" required className="bg-white h-full" />
                    </div>
                    <div className="col-span-4">
                      <Label label="自查项" required />
                      <div className="space-y-2 mt-2">
                        {[
                          "职责数量在3-5项-工作职责",
                          "各职责聚焦，不重复-工作职责",
                          "清晰描述做什么及达成成果-工作职责",
                          "职责按重要性降序排列-工作职责"
                        ].map((item, i) => (
                          <label key={i} className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer">
                            <input type="radio" name="resp_check_nv" className="mt-0.5" />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <TextArea label="其他要求" required className="bg-white" rows={4} />
                </div>
              </div>
            </div>
          </Section>
        </>
      ) : (
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-sm">
          <div className="flex border-b border-gray-200 bg-gray-50/50">
            <button 
              onClick={() => setActiveTab(0)}
              className={`px-8 py-3 text-sm font-medium transition-all relative ${
                activeTab === 0 
                ? 'text-blue-600 bg-white border-r border-gray-200' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
              id="tab-history-dept"
            >
              需求需求
              {activeTab === 0 && <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-600"></div>}
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`px-8 py-3 text-sm font-medium transition-all relative ${
                activeTab === 1 
                ? 'text-blue-600 bg-white border-l border-r border-gray-200' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
              id="tab-history-job"
            >
              关联历史招聘需求
              {activeTab === 1 && <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-600"></div>}
            </button>
          </div>
          <div className="px-6 pb-6 bg-[#F0F2F5]/30">
            <FormContent />
          </div>
        </div>
      )}
    </div>
  );
}

