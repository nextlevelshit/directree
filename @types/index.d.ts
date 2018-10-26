declare module 'nls-directree' {
  export function read(dir: string): object;
  export function search(paths: any, query: null|string): object;
  export function write(dir: object|string, dest: string): boolean;
}
