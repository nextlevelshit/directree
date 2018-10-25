export interface DirecTree {
  read: ReadFunction;
  search: SearchFunction;
  write: WriteFunction;
}

export function ReadFunction(): any
export function SearchFunction(paths: array, query: null|string): null|arry
export function WriteFunction(): any

declare const directree: DirecTree;

export default directree