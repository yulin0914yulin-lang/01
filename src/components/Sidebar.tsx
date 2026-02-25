import React, { useState } from 'react';
import { Folder, FileText, ChevronRight, ChevronDown, File } from 'lucide-react';

interface MenuItem {
  title: string;
  type: 'folder' | 'file';
  isActive?: boolean;
  isOpen?: boolean;
  children?: MenuItem[];
}

const initialMenuData: MenuItem[] = [
  {
    title: "校招管理-经理端",
    type: "folder",
    isOpen: true,
    children: [
      { title: "校招申请单", type: "file", isActive: true },
      { title: "校招审批单-需求部门", type: "file" },
      { title: "校招审批单-一级部门", type: "file" },
      { title: "校招审批单-公司", type: "file" },
      { title: "校招变更单", type: "file" },
    ]
  },
  {
    title: "校招管理-管理端",
    type: "folder",
    isOpen: true,
    children: [
      {
        title: "校招管理",
        type: "file",
        isOpen: true,
        children: [
          { title: "参数设置", type: "file" },
          { title: "需求收集-校招组", type: "file" },
          { title: "需求收集-校招PM", type: "file" },
          { title: "公司审核", type: "file" },
          { title: "岗位发布", type: "file" },
        ]
      },
      { title: "招聘详情", type: "file" }
    ]
  }
];

const MenuItemComponent: React.FC<{ 
  item: MenuItem; 
  level?: number;
  activePage: string;
  onSelect: (title: string) => void;
}> = ({ item, level = 0, activePage, onSelect }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen || false);
  const hasChildren = item.children && item.children.length > 0;
  
  // Determine if this item is active based on the activePage prop
  const isActive = item.title === activePage;

  const paddingLeft = level * 20 + 12;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    onSelect(item.title);
    if (hasChildren && !isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <div 
        className={`
          flex items-center py-2 pr-4 cursor-pointer text-sm select-none
          ${isActive ? 'bg-[#E6F7FF] text-[#1890FF]' : 'text-gray-700 hover:bg-gray-100'}
        `}
        style={{ paddingLeft: `${paddingLeft}px` }}
        onClick={handleSelect}
      >
        {/* Indent/Arrow area */}
        <div 
          className="mr-1 w-4 flex justify-center shrink-0 hover:bg-gray-200 rounded"
          onClick={hasChildren ? handleToggle : undefined}
        >
          {hasChildren && (
            isOpen ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />
          )}
        </div>

        {/* Icon */}
        <div className="mr-2 shrink-0">
          {item.type === 'folder' ? (
             <Folder size={16} className="text-gray-500 fill-gray-100" />
          ) : (
             <FileText size={16} className="text-gray-500" />
          )}
        </div>

        {/* Title */}
        <span className="truncate">{item.title}</span>
      </div>

      {hasChildren && isOpen && (
        <div>
          {item.children!.map((child, index) => (
            <MenuItemComponent 
              key={index} 
              item={child} 
              level={level + 1} 
              activePage={activePage}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export function Sidebar({ activePage, onSelect }: { activePage: string; onSelect: (page: string) => void }) {
  return (
    <div className="w-56 bg-white border-r border-gray-200 h-full flex flex-col shrink-0 overflow-y-auto">
      <div className="py-2">
        {initialMenuData.map((item, index) => (
          <MenuItemComponent 
            key={index} 
            item={item} 
            activePage={activePage}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
