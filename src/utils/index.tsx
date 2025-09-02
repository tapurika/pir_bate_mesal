export function isExisted(data: strOrStrArr | undefined) {
  const isEmpty = data?.length === 0 || data?.[0].length === 0;

  return !(isEmpty || data === undefined || data === null);
}
