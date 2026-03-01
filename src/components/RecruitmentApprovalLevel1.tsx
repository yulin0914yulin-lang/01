import React from 'react';
import { Section } from './Section';
import { StaticText } from './FormFields';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search, ChevronDown } from 'lucide-react';

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

// Sequence Data Interface
interface SequenceNode {
  id: string;
  name: string;
  level: 1 | 2 | 3;
  count9Star: number;
  countCampus: number;
  countTotal: number;
  children?: SequenceNode[];
}

// Mock Data
const sequenceData: SequenceNode[] = [
  {
    id: '1',
    name: '产品',
    level: 1,
    count9Star: 2,
    countCampus: 8,
    countTotal: 10,
    children: [
      {
        id: '1-1',
        name: '产品运营',
        level: 2,
        count9Star: 1,
        countCampus: 4,
        countTotal: 5,
        children: [
           {
            id: '1-1-1',
            name: '产品运维',
            level: 3,
            count9Star: 1,
            countCampus: 4,
            countTotal: 5,
           }
        ]
      },
      {
        id: '1-2',
        name: '硬件产品',
        level: 2,
        count9Star: 1,
        countCampus: 4,
        countTotal: 5,
      }
    ]
  },
  {
    id: '2',
    name: '研发',
    level: 1,
    count9Star: 5,
    countCampus: 15,
    countTotal: 20,
    children: [
      {
        id: '2-1',
        name: '后端开发',
        level: 2,
        count9Star: 3,
        countCampus: 10,
        countTotal: 13,
      }
    ]
  },
  {
    id: '3',
    name: '服务',
    level: 1,
    count9Star: 1,
    countCampus: 3,
    countTotal: 4,
  },
  {
    id: '4',
    name: '供应链',
    level: 1,
    count9Star: 2,
    countCampus: 6,
    countTotal: 8,
  },
  {
    id: '5',
    name: '技术研发',
    level: 1,
    count9Star: 4,
    countCampus: 12,
    countTotal: 16,
  },
  {
    id: '6',
    name: '设计',
    level: 1,
    count9Star: 1,
    countCampus: 5,
    countTotal: 6,
  },
  {
    id: '7',
    name: '生产制造',
    level: 1,
    count9Star: 3,
    countCampus: 8,
    countTotal: 11,
  },
  {
    id: '8',
    name: '营销',
    level: 1,
    count9Star: 2,
    countCampus: 7,
    countTotal: 9,
  }
];

export function RecruitmentApprovalLevel1() {
  const [activeTab, setActiveTab] = React.useState<'sequence' | 'details'>('sequence');
  const [expandedRows, setExpandedRows] = React.useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const renderSequenceRow = (node: SequenceNode) => {
    const isExpanded = expandedRows.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <React.Fragment key={node.id}>
        <tr className="border-b border-gray-100 hover:bg-gray-50">
          <td className="py-4 text-left pl-8">
            <div 
              className="flex items-center gap-2 cursor-pointer inline-flex"
              style={{ marginLeft: `${(node.level - 1) * 24}px` }}
              onClick={() => hasChildren && toggleRow(node.id)}
            >
              {hasChildren ? (
                isExpanded ? <div className="p-0.5 rounded hover:bg-gray-200"><ChevronDown size={16} className="text-gray-500" /></div> : <div className="p-0.5 rounded hover:bg-gray-200"><ChevronRight size={16} className="text-gray-500" /></div>
              ) : (
                <span className="w-5" /> // Spacer for alignment
              )}
              <span className="font-medium text-gray-700">{node.name}</span>
            </div>
          </td>
          <td className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-4 rounded-sm text-gray-700">{node.count9Star}</div></td>
          <td className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-4 rounded-sm text-gray-700">{node.countCampus}</div></td>
          <td className="py-4"><div className="bg-[#F2F3F5] py-1.5 mx-4 rounded-sm text-gray-700">{node.countTotal}</div></td>
        </tr>
        {isExpanded && node.children?.map(child => renderSequenceRow(child))}
      </React.Fragment>
    );
  };

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
           <SummaryField label="项目名称" />
           <SummaryField label="部门现有人数" />
           <SummaryField label="近三年校招生数" />
           <SummaryField label="招聘总人数" />
           <SummaryField label="校招生占比" />
           <SummaryField label="九号星招聘人数" />
           <SummaryField label="校招生招聘人数" />
        </div>
      </Section>

      {/* Recruitment Details with Tabs */}
      <Section title="招聘详情">
        <div className="bg-white p-6 border border-gray-100">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                activeTab === 'sequence' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('sequence')}
            >
              序列汇总情况
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                activeTab === 'details' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('details')}
            >
              招聘详细情况
            </button>
          </div>

          {/* Sequence Summary Content */}
          {activeTab === 'sequence' && (
            <div>
              <table className="w-full text-sm text-center border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 font-bold text-gray-700 text-left pl-14">序列名称</th>
                    <th className="py-3 font-bold text-gray-700">九号星招聘人数</th>
                    <th className="py-3 font-bold text-gray-700">校招生招聘人数</th>
                    <th className="py-3 font-bold text-gray-700">招聘总人数</th>
                  </tr>
                </thead>
                <tbody>
                  {sequenceData.map(node => renderSequenceRow(node))}
                </tbody>
              </table>
            </div>
          )}

          {/* Recruitment Details Content */}
          {activeTab === 'details' && (
            <div>
              <div className="mb-4 flex justify-between items-center">
                <button className="px-4 py-1.5 border border-gray-400 rounded-sm text-sm text-gray-600 bg-white font-medium">实际需求部门</button>
                <button className="px-4 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors">导出</button>
              </div>

              <table className="w-full text-sm text-center border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 font-bold text-gray-700 w-16">序号</th>
                    <th className="py-3 font-bold text-gray-700">实际需求部门</th>
                    <th className="py-3 font-bold text-gray-700">部门现有人数</th>
                    <th className="py-3 font-bold text-gray-700">近三年校招生数</th>
                    <th className="py-3 font-bold text-gray-700">校招生占比</th>
                    <th className="py-3 font-bold text-gray-700">九号星招聘数</th>
                    <th className="py-3 font-bold text-gray-700">校招生招聘数</th>
                    <th className="py-3 font-bold text-gray-700">暑期实习招聘数</th>
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
                        <button className="text-[#9B1C33] hover:underline font-medium">查看详情</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
