const solid = {
  default: 'bg-gray-200 text-gray-800',
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-purple-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  danger: 'bg-red-500 text-white',
  foreground: 'bg-white text-black',
};

const shadow = {
  default: 'shadow-lg shadow-gray-200/50 bg-gray-200 text-gray-800',
  primary: 'shadow-lg shadow-blue-500/40 bg-blue-500 text-white',
  secondary: 'shadow-lg shadow-purple-500/40 bg-purple-500 text-white',
  success: 'shadow-lg shadow-green-500/40 bg-green-500 text-white',
  warning: 'shadow-lg shadow-yellow-500/40 bg-yellow-500 text-white',
  danger: 'shadow-lg shadow-red-500/40 bg-red-500 text-white',
  foreground: 'shadow-lg shadow-white/40 bg-white text-black',
};

const bordered = {
  default: 'bg-transparent border-[2px] border-gray-200 text-gray-800',
  primary: 'bg-transparent border-[2px] border-blue-500 text-blue-500',
  secondary: 'bg-transparent border-[2px] border-purple-500 text-purple-500',
  success: 'bg-transparent border-[2px] border-green-500 text-green-500',
  warning: 'bg-transparent border-[2px] border-yellow-500 text-yellow-500',
  danger: 'bg-transparent border-[2px] border-red-500 text-red-500',
  foreground: 'bg-transparent border-[2px] border-white text-black',
};

const flat = {
  default: 'bg-gray-200/40 text-gray-800',
  primary: 'bg-blue-500/20 text-blue-500',
  secondary: 'bg-purple-500/20 text-purple-500',
  success: 'bg-green-500/20 text-green-600 dark:text-green-500',
  warning: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-500',
  danger: 'bg-red-500/20 text-red-600 dark:text-red-500',
  foreground: 'bg-white/10 text-black',
};

const faded = {
  default: 'border border-gray-200 bg-gray-200 text-gray-800',
  primary: 'border border-gray-100 bg-gray-100 text-blue-500',
  secondary: 'border border-gray-100 bg-gray-100 text-purple-500',
  success: 'border border-gray-100 bg-gray-100 text-green-500',
  warning: 'border border-gray-100 bg-gray-100 text-yellow-500',
  danger: 'border border-gray-100 bg-gray-100 text-red-500',
  foreground: 'border border-gray-100 bg-gray-100 text-black',
};

const light = {
  default: 'bg-transparent hover:bg-gray-200/40 text-gray-800',
  primary: 'bg-transparent hover:bg-blue-500/20 text-blue-500',
  secondary: 'bg-transparent hover:bg-purple-500/20 text-purple-500',
  success: 'bg-transparent hover:bg-green-500/20 text-green-500',
  warning: 'bg-transparent hover:bg-yellow-500/20 text-yellow-500',
  danger: 'bg-transparent hover:bg-red-500/20 text-red-500',
  foreground: 'bg-transparent hover:bg-white/10 text-black',
};

const ghost = {
  default: 'border-[2px] border-gray-200 text-gray-800 hover:bg-gray-200',
  primary: 'border-[2px] border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500',
  secondary: 'border-[2px] border-purple-500 text-purple-500 hover:text-white hover:bg-purple-500',
  success: 'border-[2px] border-green-500 text-green-500 hover:text-white hover:bg-green-500',
  warning: 'border-[2px] border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500',
  danger: 'border-[2px] border-red-500 text-red-500 hover:text-white hover:bg-red-500',
  foreground: 'border-[2px] border-white text-black hover:bg-white',
};

export const colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost,
};
