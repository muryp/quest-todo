import Card from '../../component/moleculs/card/Card'
import '../db/get'
import db from '../db/init'

const List = document.getElementById('content')!
const LoadMore = document.getElementById('loadmore')!
let count = 5
const Render = async () => {
  const myDb = await db.quest.toArray()
  const CONTENT: string[] = []
  for (let i = 0; i === count || i < myDb.length; i++) {
    const { title, id, point } = myDb[i]
    CONTENT.push(Card({ title, id, point: point.success }))
  }
  List.innerHTML = CONTENT.join('')
  return
}
LoadMore.onclick = async (ev) => {
  ev.preventDefault()
  count = count + 5
  await Render()
}
