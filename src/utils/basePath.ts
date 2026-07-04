export const getPath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Avoid double slashes if basePath is empty or path already has the basePath
  if (basePath && path.startsWith(basePath)) return path;
  if (!path.startsWith('/')) path = `/${path}`;
  return `${basePath}${path}`;
};
