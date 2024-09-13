import edit from '../views/pages/edit'
import home from '../views/pages/home'
import reward from '../views/pages/reward'
import redeem from '../views/pages/redeem'
import setting from '../views/pages/setting'
import AddQuest from '../views/pages/add/quest'
import AddRedeem from '../views/pages/add/redeem'
import complete from '../views/pages/complete'

const routes = {
  'home': { render: home, script: import('./controller/home/home') },
  'add': { render: AddQuest, script: import('./controller/add') },
  'add-redeem': {
    render: AddRedeem,
    script: import('./controller/redeem/add'),
  },
  'delete': { render: 'delete page', script: import('./controller/remove') },
  'edit': { render: edit, script: import('./controller/edit') },
  'myreward': { render: reward, script: import('./controller/edit') },
  'redeem': { render: redeem, script: import('./controller/redeem/list') },
  'setting': { render: setting, script: import('./controller/settings') },
  'complete': {
    render: 'complete...',
    script: import('./controller/changeStatus'),
  },
  'uncomplete': {
    render: 'uncomplete...',
    script: import('./controller/changeStatus'),
  },
  'complete-task': {
    render: complete,
    script: import('./controller/completeTask'),
  },
}

export default routes
