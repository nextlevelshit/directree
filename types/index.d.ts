export interface DirecTree {
  read: ReadFunction;
  search: SearchFunction;
  write: WriteFunction;
}

export function ReadFunction(dir: string): array
export function SearchFunction(paths: array, query: null|string): array
export function WriteFunction(dir: array|string, dest: string): boolean

declare const directree: DirecTree;

export default directree