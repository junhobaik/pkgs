export * from './filterDomProps';

export const camelToKebobCase = (str: string) => str.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`);
