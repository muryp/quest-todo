import Nav from '../organisms/nav/Nav'

export default (childern: string) => {
  return html`
    ${Nav()}
    <div id="childern">${childern}</div>
  `
}
