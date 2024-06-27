export const DESIGN_WIDTH = 390

let windowW: number | null = null

export const getWndowWidth = () => {
  const windowWidth = window.innerWidth
  if (windowWidth >= 768) return 768
  return windowWidth
}

export const getRem = (num: number) => {
  const windowWidth = getWndowWidth()
  return (windowWidth / DESIGN_WIDTH) * num
}

const updateFontSize = () => {
  const windowWidth = getWndowWidth()
  document.documentElement.style.fontSize = `${windowWidth / DESIGN_WIDTH}px`
}

// Initial call to set the font-size
updateFontSize()

// Update font-size on window resize
window.onresize = () => {
  if (windowW === getWndowWidth()) return
  windowW = getWndowWidth()
  updateFontSize()
}
