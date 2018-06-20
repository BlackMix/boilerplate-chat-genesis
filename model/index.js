import model from 'genesis/support/model'

export const icon = 'message'
export const label = 'Chat'
export const tooltip = 'Chat bate papo'
export const title = 'Chat'
export const path = '/chat'

export const meta = Object.assign({}, model.meta(icon, label, title, tooltip), {noBreadcrumb: false})
export const menu = model.menu(icon, label, path, true, tooltip, 'home', false, '', 'red-10')
