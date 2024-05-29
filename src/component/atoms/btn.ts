const classList = {
  todo: 'btn mx-2 hover:btn-sm btn-xs w-fit link ',
  null: '',
}
const className = {
  success: 'btn-success',
  delete: 'btn-error',
  second: 'btn-secondary',
}
interface TArgs {
  href?: string
  onClick?: string
  BtnName: [keyof typeof classList, keyof typeof className]
  TEXT: string
}
export default (Args: TArgs) => {
  const myClass = classList[Args.BtnName[0]] + className[Args.BtnName[1]]
  if (Args.href) {
    return html` <a class="${myClass}" href="${Args.href}">${Args.TEXT}</a> `
  }
  return html`
    <button class="${myClass}" onclick="${Args.onClick || ''}">
      ${Args.TEXT}
    </button>
  `
}
