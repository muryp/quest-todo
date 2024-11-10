const classList = {
  todo: 'btn mx-2 hover:btn-sm btn-xs',
  null: '',
}
const className = {
  success: 'btn-success',
  delete: 'btn-error text-white',
  second: 'btn-secondary',
  null: '',
}
export interface TBtnArgs {
  href?: string
  onClick?: string
  BtnName: [keyof typeof classList, keyof typeof className]
  TEXT: string
  WIDTH: 'w-fit' | 'w-full'
  id?: string
}
export default (Args: TBtnArgs) => {
  const myClass = `${classList[Args.BtnName[0]]} ${className[Args.BtnName[1]]} ${Args.WIDTH}`
  if (Args.href) {
    return html` <a class="${myClass}" href="${Args.href}">${Args.TEXT}</a> `
  }
  const ID = Args.id ? `id="${Args.id}"` : ''
  return html`
    <button ${ID} class="${myClass}" onclick="${Args.onClick || ''}">
      ${Args.TEXT}
    </button>
  `
}
