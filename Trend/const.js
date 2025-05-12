export const DEFAULT_TYPE = ['line', 'squre', 'lineSqure', 'arera']
export const DEFAULT_COLOR = ['line', 'squre', 'lineSqure', 'arera']
export const DEFAULT_GRID = {
  left: '3%',
  right: '3%',
  bottom: '15%',
  containLabel: true
}

export const DEFAULT_MOBILE_GRID = {
  left: '4%',
  right: '4%',
  bottom: '25%',
  containLabel: true
}

export const DEFAULT_TOOLTIP = {
  trigger: 'axis',
  axisPointer: {
    type: 'cross',
    label: {
      backgroundColor: '#6a7985',
      color: '#fff'
    }
  }
}
export const DEFAULT_ITEM_STYLE = {
  barWidth: 14,
  itemStyle: {
    borderRadius: 12
  }
}

export function IsMobile() {
  const userAgent = navigator.userAgent
  const mobileKeywords = ['Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  for (let i = 0; i < mobileKeywords.length; i++) {
    if (userAgent.indexOf(mobileKeywords[i]) !== -1) {
      return true
    }
  }
  return false
}

export function isMobileByScreen() {
  return window.matchMedia('(max-width: 767px)').matches
}

export function IsMobileCombined() {
  const userAgent = navigator.userAgent
  const mobileKeywords = ['Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  for (let i = 0; i < mobileKeywords.length; i++) {
    if (userAgent.indexOf(mobileKeywords[i]) !== -1) {
      return true
    }
  }
  return window.matchMedia('(max-width: 767px)').matches
}

