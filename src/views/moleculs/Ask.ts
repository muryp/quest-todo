import btn from '../atoms/btn'

export default (ID: string) => {
  const BtnYes = btn({
    WIDTH: 'w-full',
    TEXT: 'Confirm',
    href: `#delete?id=${ID}`,
    BtnName: ['todo', 'delete'],
  })
  return html`
    <div class="leading-9">
      <h2>Want be delete ?</h2>
      ${BtnYes}
    </div>
  `
}
