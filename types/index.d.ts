export interface DirecTree {
  read: ReadFunction;
  search: SearchFunction;
  write: WriteFunction;
}

export function ReadFunction(dir: string): array
export function SearchFunction(paths: array, query: null|string): null|array
export function WriteFunction(): any

declare const directree: DirecTree;

export default directree