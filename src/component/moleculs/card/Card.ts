import { TvalQuest } from '../../../mock/listQuest'
import { ICON_DELETE, ICON_DETAIL, ICON_EDIT } from '../../atoms/icon'

const CLASS_BTN = 'btn base-100 mx-2 hover:btn-sm'
export default ({ title, id, point, description }: TvalQuest) => {
  const href = (targer: string) => {
    return `#${targer}?id=${id}`
  }
  const Description =
    description !== ''
      ? html`
          <p class="bg-base-300 p-3 rounded-xl mt-3">
            <b>Description:</b> ${description}
          </p>
        `
      : ''
  return html`
    <div class="card w-96 bg-base-300 shadow-xl my-5 mx-auto">
      <div class="p-6 flex items-center " val="${id || ''}">
        <h2
          class="font-Lato font-bold uppercase whitespace-nowrap
          overflow-hidden overflow-ellipsis cursor-pointer hover:text-primary">
          ${title}
        </h2>
      </div>
      <div class="p-3 flex items-center" val="${id || ''}">
        <a
          class="${CLASS_BTN} btn-success btn-xs w-fit link"
          href="${href('edit')}"
          >${ICON_EDIT}</a
        >
        <a class="${CLASS_BTN} btn-error btn-xs w-fit" href="${href('delete')}"
          >${ICON_DELETE}</a
        >
        <!-- You can open the modal using ID.showModal() method -->
        <button
          class="${CLASS_BTN} btn-secondary btn-xs w-fit"
          onclick="my_modal_3${id || ''}.showModal()">
          ${ICON_DETAIL} Detail
        </button>
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
      </div>
    </div>
  `
}
