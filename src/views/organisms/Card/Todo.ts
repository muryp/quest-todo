import { TvalQuest } from '../../../mock/listTodo'
import FooterTodo from '../../moleculs/FooterTodo'

export default (Args: TvalQuest, isComplete: boolean, isFail: boolean) => {
  const { title, id } = Args
  return html`
    <div class="card w-full min-md:w-96 bg-base-300 shadow-xl my-5 mx-auto">
      <div class="p-6 flex items-center " val="${id || ''}">
        <h2
          class="font-Lato font-bold uppercase whitespace-nowrap
          overflow-hidden overflow-ellipsis cursor-pointer hover:text-primary">
          ${title}
        </h2>
      </div>
      <div class="p-3 flex items-center flex-wrap gap-y-3" val="${id || ''}">
        ${FooterTodo(Args, isComplete, isFail)}
      </div>
    </div>
  `
}
