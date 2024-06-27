// src/components/Input/etc/colorVariants.ts

const bordered = {
  default: 'border border-gray-300 focus:border-gray-500 text-gray-900',
  primary: 'border border-blue-300 focus:border-blue-600 text-blue-900',
  secondary: 'border border-purple-300 focus:border-purple-600 text-purple-900',
  success: 'border border-green-300 focus:border-green-600 text-green-900',
  warning: 'border border-yellow-300 focus:border-yellow-600 text-yellow-900',
  danger: 'border border-red-300 focus:border-red-600 text-red-900',
};

const flat = {
  default: 'bg-gray-100 focus:bg-gray-200 text-gray-900',
  primary: 'bg-blue-100 focus:bg-blue-200 text-blue-900',
  secondary: 'bg-purple-100 focus:bg-purple-200 text-purple-900',
  success: 'bg-green-100 focus:bg-green-200 text-green-900',
  warning: 'bg-yellow-100 focus:bg-yellow-200 text-yellow-900',
  danger: 'bg-red-100 focus:bg-red-200 text-red-900',
};

const underlined = {
  default: 'border-b border-gray-300 focus:border-gray-500 text-gray-900',
  primary: 'border-b border-blue-300 focus:border-blue-600 text-blue-900',
  secondary: 'border-b border-purple-300 focus:border-purple-600 text-purple-900',
  success: 'border-b border-green-300 focus:border-green-600 text-green-900',
  warning: 'border-b border-yellow-300 focus:border-yellow-600 text-yellow-900',
  danger: 'border-b border-red-300 focus:border-red-600 text-red-900',
};

const faded = {
  default: 'bg-gray-50 border border-gray-200 focus:bg-gray-100 focus:border-gray-300 text-gray-900',
  primary: 'bg-blue-50 border border-blue-200 focus:bg-blue-100 focus:border-blue-300 text-blue-900',
  secondary: 'bg-purple-50 border border-purple-200 focus:bg-purple-100 focus:border-purple-300 text-purple-900',
  success: 'bg-green-50 border border-green-200 focus:bg-green-100 focus:border-green-300 text-green-900',
  warning: 'bg-yellow-50 border border-yellow-200 focus:bg-yellow-100 focus:border-yellow-300 text-yellow-900',
  danger: 'bg-red-50 border border-red-200 focus:bg-red-100 focus:border-red-300 text-red-900',
};

export const colorVariants = {
  bordered,
  flat,
  underlined,
  faded,
};
