import Btn, { TBtnArgs } from './../atoms/btn'

interface TArgs {
  id: string
  BODY: string
  ICON: string
  TITLE: string
  BtnName: TBtnArgs['BtnName']
}
export default ({ id, TITLE, BODY, ICON, BtnName }: TArgs) => {
  const ElId = `my_modal_${TITLE + id}`
  const BtnToggle = Btn({
    WIDTH: 'w-fit',
    TEXT: `${ICON} ${TITLE}`,
    onClick: `${ElId}.showModal()`,
    BtnName,
  })
  return html`
    ${BtnToggle}
    <dialog id="${ElId}" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            X
          </button>
        </form>
        ${BODY}
      </div>
    </dialog>
  `
}
