import defaultSettings from '@/settings'

const title = defaultSettings.title || 'ht-echo'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
