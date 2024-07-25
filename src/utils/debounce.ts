export default function debounce<T>(
  func: (...args: T[]) => void,
  delay: number,
): (...args: T[]) => void {
  let timeoutId: number
  return (...args: T[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}