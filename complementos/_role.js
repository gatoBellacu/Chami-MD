import db from '../lib/database.js'
let handler = m => m

handler.before = function (m) {
   let user = db.data.users[m.sender]
        let role = (user.limit <= 0) ? 'manco l'
		  : ((user.limit >= 1) && (user.limit <= 180)) ? 'manco ll'
		  : ((user.limit >= 180) && (user.limit <= 300)) ? 'nuv l'
          : ((user.limit >= 300) && (user.limit <= 500)) ? 'nuv ll'
          : ((user.limit >= 500) && (user.limit <= 650)) ? 'nuv lll'
          : ((user.limit >= 650) && (user.limit <= 1000)) ? 'pro l'
          : ((user.limit >= 1000) && (user.limit <= 2300)) ? 'pro ll' 
          : ((user.limit >= 2300) && (user.limit <= 3400)) ? 'pro lll''
          : ((user.limit >= 3400) && (user.limit <= 4600)) ? 'pro lV'
          : ((user.limit >= 4600) && (user.limit <= 15000)) ? 'maestro l'
		  : ((user.limit >= 15000) && (user.limit <= 50000)) ? 'maestro ll'
		  : ((user.limit >= 50000) && (user.limit <= 90000)) ? 'mestro lll'
         : ((user.limit >= 50000) && (user.limit <= 10000)) ? 'mestro lV'
: ((user.limit >= 50000) && (user.limit <= 110000)) ? 'mestro V' 
          : '${cb}'
  user.role = role
  return true
}

export default handler
