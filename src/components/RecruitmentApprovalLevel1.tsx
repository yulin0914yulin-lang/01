import React from 'react';
import { Section } from './Section';
import { StaticText } from './FormFields';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from 'lucide-react';

// Helper for read-only fields with gray background
const SummaryField = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <span className="text-sm font-bold text-gray-700 min-w-[7em] text-right">{label}</span>
    <div className="bg-[#F2F3F5] h-9 flex-1 rounded-sm"></div>
  </div>
);

// Pagination Component
const Pagination = () => (
  <div className="flex justify-end items-center gap-2 mt-4 text-xs text-gray-500">
    <button className="p-1 border border-gray-200 rounded hover:bg-gray-50"><ChevronsLeft size={14} /></button>
    <button className="p-1 border border-gray-200 rounded hover:bg-gray-50"><ChevronLeft size={14} /></button>
    <button className="px-2.5 py-1 border border-blue-200 rounded bg-blue-50 text-blue-600">1</button>
    <button className="px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
    <button className="px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50">3</button>
    <button className="px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50">4</button>
    <span className="mx-1">...</span>
    <button className="px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50">10</button>
    <button className="p-1 border border-gray-200 rounded hover:bg-gray-50"><ChevronRight size={14} /></button>
    <button className="p-1 border border-gray-200 rounded hover:bg-gray-50"><ChevronsRight size={14} /></button>
    <select className="border border-gray-200 rounded p-1 ml-2 bg-white">
      <option>10条/页</option>
    </select>
  </div>
);

export function RecruitmentApprovalLevel1() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4 space-y-4 pb-20">
      {/* Header Block */}
      <div className="bg-white px-6 py-4 border border-gray-200 shadow-sm flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">招聘审批单</h1>
        <div className="flex gap-3">
          <button className="px-6 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            取消
          </button>
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

      {/* Recruitment Summary */}
      <Section title="招聘汇总情况">
        <div className="grid grid-cols-3 gap-x-12 gap-y-6 bg-white p-6 border border-gray-100">
           <SummaryField label="实际需求部门数" />
           <SummaryField label="招聘岗位数" />
           <SummaryField label="招聘总人数" />
           <SummaryField label="九号星招聘人数" />
           <SummaryField label="校招生招聘人数" />
           <SummaryField label="暑期实习招聘人数" />
        </div>
      </Section>

      {/* Sequence Summary */}
      <Section title="序列汇总情况">
        <div className="bg-white p-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
             <div className="flex items-center border border-gray-300 rounded-sm px-2 bg-white">
                <span className="text-sm text-gray-600 mr-2">一级序列:</span>
                <input type="text" className="w-32 h-8 text-sm outline-none" />
             </div>
             <div className="flex items-center border border-gray-300 rounded-sm px-2 bg-white">
                <span className="text-sm text-gray-600 mr-2">二级序列:</span>
                <input type="text" className="w-32 h-8 text-sm outline-none" />
             </div>
             <div className="flex items-center border border-gray-300 rounded-sm px-2 bg-white">
                <span className="text-sm text-gray-600 mr-2">三级序列:</span>
                <input type="text" className="w-32 h-8 text-sm outline-none" />
             </div>
             <div className="flex items-center border border-gray-300 rounded-sm px-2 bg-white">
                <span className="text-sm text-gray-600 mr-2">序列全描述:</span>
                <input type="text" className="w-40 h-8 text-sm outline-none" />
             </div>
          </div>
          
          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 font-bold text-gray-700 w-20">序号</th>
                <th className="py-3 font-bold text-gray-700">一级序列</th>
                <th className="py-3 font-bold text-gray-700">二级序列</th>
                <th className="py-3 font-bold text-gray-700">三级序列</th>
                <th className="py-3 font-bold text-gray-700">招聘人数</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, l1: "产品", l2: "", l3: "", count: 10 },
                { id: 2, l1: "产品", l2: "产品运营", l3: "", count: 5 },
                { id: 3, l1: "产品", l2: "产品运营", l3: "产品运维", count: 5 },
                { id: 4, l1: "产品", l2: "硬件产品", l3: "", count: 5 },
              ].map((row) => (
                <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4">
                     <div className="inline-block px-3 py-1 border border-gray-200 rounded text-gray-500 text-xs">{row.id}</div>
                  </td>
                  <td className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-4 rounded-sm text-gray-700">{row.l1}</div></td>
                  <td className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-4 rounded-sm text-gray-700 min-h-[28px]">{row.l2}</div></td>
                  <td className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-4 rounded-sm text-gray-700 min-h-[28px]">{row.l3}</div></td>
                  <td className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-4 rounded-sm text-gray-700">{row.count}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </Section>

      {/* Recruitment Details */}
      <Section title="招聘详细情况">
        <div className="bg-white p-6 border border-gray-100">
          <div className="mb-4">
            <button className="px-4 py-1.5 border border-gray-400 rounded-sm text-sm text-gray-600 bg-white font-medium">实际需求部门</button>
          </div>

          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 font-bold text-gray-700 w-16">序号</th>
                <th className="py-3 font-bold text-gray-700">实际需求部门</th>
                <th className="py-3 font-bold text-gray-700">部门现有人数</th>
                <th className="py-3 font-bold text-gray-700">近三年校招生数</th>
                <th className="py-3 font-bold text-gray-700">九号星招聘数</th>
                <th className="py-3 font-bold text-gray-700">校招生招聘数</th>
                <th className="py-3 font-bold text-gray-700">暑期实习招聘数</th>
                <th className="py-3 font-bold text-gray-700">招聘岗位数</th>
                <th className="py-3 font-bold text-gray-700">招聘总人数</th>
                <th className="py-3 font-bold text-gray-700">操作</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((id) => (
                <tr key={id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4">
                    <div className="inline-block px-3 py-1 border border-gray-200 rounded text-gray-500 text-xs">{id}</div>
                  </td>
                  {[...Array(8)].map((_, i) => (
                     <td key={i} className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-2 h-7 rounded-sm"></div></td>
                  ))}
                  <td className="py-4">
                    <button className="text-[#9B1C33] hover:underline font-medium">查看申请单</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </Section>
    </div>
  );
}
