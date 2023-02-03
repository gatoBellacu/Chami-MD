import db from '../lib/database.js'
let handler = m => m

handler.before = function (m) {
   let user = db.data.users[m.sender]
        let role = (user.limit <= 0) ? ' '
		  : ((user.limit >= 1) && (user.limit <= 180)) ? ' '
		  : ((user.limit >= 180) && (user.limit <= 300)) ? ' '
          : ((user.limit >= 300) && (user.limit <= 500)) ? '  '
          : ((user.limit >= 500) && (user.limit <= 650)) ? '  '
          : ((user.limit >= 650) && (user.limit <= 1000)) ? '  '
          : ((user.limit >= 1000) && (user.limit <= 2300)) ? '  '
          : ((user.limit >= 2300) && (user.limit <= 3400)) ? '  ''
          : ((user.limit >= 3400) && (user.limit <= 4600)) ? '  '
          : ((user.limit >= 4600) && (user.limit <= 15000)) ? ' '
		  : ((user.limit >= 15000) && (user.limit <= 50000)) ? ' '
		  : ((user.limit >= 50000) && (user.limit <= 90000)) ? ''
          : ' '
  user.role = role
  return true
}

export default handler
