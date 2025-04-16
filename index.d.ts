export function useTmpDir(
  fn: (dir: string) => Promise<any>,
  prefix?: string
): Promise<any>;
