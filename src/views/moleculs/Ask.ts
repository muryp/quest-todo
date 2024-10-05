import btn from '../atoms/btn'

export const rm = (ID: string) => {
  const BtnYes = btn({
    WIDTH: 'w-full',
    TEXT: 'Confirm',
    href: `#quest/delete?id=${ID}`,
    BtnName: ['todo', 'delete'],
  })
  return html`
    <div class="leading-9">
      <h2>Want be delete ?</h2>
      ${BtnYes}
    </div>
  `
}

export const uncomplete = (ID: string) => {
  const BtnYes = btn({
    WIDTH: 'w-full',
    TEXT: 'Confirm',
    href: `#quest/uncomplete?id=${ID}`,
    BtnName: ['todo', 'delete'],
  })
  return html`
    <div class="leading-9">
      <h2>Want be delete ?</h2>
      ${BtnYes}
    </div>
  `
}
export const rmRedeem = (ID: string) => {
  const BtnYes = btn({
    WIDTH: 'w-full',
    TEXT: 'Confirm',
    href: `#redeem/rm?id=${ID}`,
    BtnName: ['todo', 'delete'],
  })
  return html`
    <div class="leading-9">
      <h2>Want be delete ?</h2>
      ${BtnYes}
    </div>
  `
}
