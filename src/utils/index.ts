export const handleFocus = (e: any) => {
  e.preventDefault()

  if (e.type === "focus" && e) {
    e.target.labels[0].style.opacity = "0"
  } else if (e.type === "blur" && e) {
    e.target.labels[0].style.opacity = "1"
  }
}

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str
  }

  return str.slice(0, num) + "..."
}

export const qSingle = function (selector: string, scope?: any) {
  scope = scope ? scope : document
  return scope.querySelector(selector)
}

export const qAll = function (selector: string, scope?: any) {
  scope = scope ? scope : document
  return scope.querySelectorAll(selector)
}

export const uIdGenerator = () => {
  return Math.random().toString(16).slice(2)
}
