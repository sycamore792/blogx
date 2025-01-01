/**
 * 将数字转换为带单位的字符串表示
 * 例如：5000 -> 5k, 50000 -> 5w
 * @param num 要格式化的数字
 * @returns 格式化后的字符串
 */
export function formatNumber(num: number): string {
  if (num >= 10000) {
    return `${Math.floor(num / 10000)}w`
  }
  if (num >= 1000) {
    return `${Math.floor(num / 1000)}k`
  }
  return num.toString()
}
