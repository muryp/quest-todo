import { TvalQuest } from '../../mock/listTodo'
import Btn from './../atoms/btn'
import { ICON_DETAIL } from './../atoms/icon'

export default ({ title, id, point, description }: TvalQuest) => {
  const Description =
    description !== ''
      ? html`
          <p class="bg-base-300 p-3 rounded-xl mt-3">
            <b>Description:</b> ${description}
          </p>
        `
      : ''
  const BtnToggle = Btn({
    TEXT: `${ICON_DETAIL} Detail`,
    onClick: `my_modal_3${id || ''}.showModal()`,
    BtnName: ['todo', 'second'],
  })
  return html`
    ${BtnToggle}
    <dialog id="my_modal_3${id || ''}" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            X
          </button>
        </form>
        <h3 class="font-bold text-lg">${title}</h3>
        <ul>
          <li>Point Success : ${point!.success}</li>
          <li>Point fail : ${point!.fail}</li>
        </ul>
        ${Description}
      </div>
    </dialog>
  `
}