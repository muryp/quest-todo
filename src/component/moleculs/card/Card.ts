export interface TArgsCard {
  title: string
  id: string
  point: number
}
export default ({ title, id, point }: TArgsCard) => {
  return html`
    <div class="card w-96 bg-base-300 shadow-xl my-5 mx-auto">
      <div class="p-6 flex items-center " val="${id}">
        <div
          class="cursor-pointer bg-secondary hover:bg-primary
          min-w-6 text-center m-1 rounded-full w-6 h-6
          text-base-100 hover:text-white
          ">
          <span class="font-bold font-Lato">${point}</span>
        </div>
        <h2
          class="font-Lato font-bold uppercase whitespace-nowrap
          overflow-hidden overflow-ellipsis cursor-pointer hover:text-primary">
          ${title}
        </h2>
      </div>
    </div>
  `
}