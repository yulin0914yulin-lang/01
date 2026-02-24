import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface FieldProps {
  label: string;
  required?: boolean;
  className?: string;
}

export const Label = ({ label, required }: FieldProps) => (
  <label className="block text-sm font-bold text-gray-700 mb-1.5">
    {required && <span className="text-red-500 mr-1">*</span>}
    {label}
  </label>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const TextInput = ({ label, required, icon, className, ...props }: InputProps) => (
  <div className={`mb-4 ${className}`}>
    <Label label={label} required={required} />
    <div className="relative">
      <input
        type="text"
        className="w-full h-9 px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        {...props}
      />
      {icon && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  </div>
);

export const SearchInput = (props: InputProps) => (
  <TextInput {...props} icon={<Search size={14} />} />
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  options?: string[];
  className?: string;
}

export const Select = ({ label, required, options = [], className, ...props }: SelectProps) => (
  <div className={`mb-4 ${className}`}>
    <Label label={label} required={required} />
    <div className="relative">
      <select
        className="w-full h-9 px-3 py-2 border border-gray-300 rounded-sm text-sm appearance-none bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors pr-8"
        {...props}
      >
        <option value="">请选择</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <ChevronDown size={14} />
      </div>
    </div>
  </div>
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  className?: string;
  rows?: number;
}

export const TextArea = ({ label, required, className, ...props }: TextAreaProps) => (
  <div className={`mb-4 ${className}`}>
    <Label label={label} required={required} />
    <textarea
      className="w-full p-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y min-h-[100px]"
      {...props}
    />
  </div>
);

export const StaticText = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-gray-700 mb-1.5">
      {label}
    </label>
    <div className="text-sm text-gray-900 py-2">
      {value}
    </div>
  </div>
);
