const roles = {
    '*VAGABUNDO(A) V* 🗿': 0,
     '*VAGABUNDO(A) IV* 🗿': 1,
      '*VAGABUNDO(A) III* 🗿': 2,
       '*VAGABUNDO(A) II* 🗿': 3,
        '*VAGABUNDO(A) I* 🗿': 4,
    '*POBRE V* 🏚️': 5,
     '*POBRE IV* 🏚️': 6,
      '*POBRE III* 🏚️': 7,
       '*POBRE II* 🏚️': 8,
       '*POBRE I* 🏚️': 9,
    '*MILLONARIO(A) V* 💸': 10,
     '*MILLONARIO(A) IV* 💸': 11,
      '*MILLONARIO(A) III* 💸': 12,
       '*MILLONARIO(A) II* 💸': 13,
        '*MILLONARIO(A) I* 💸': 14,
 '*MULTIMILLONARIO(A) V* 💵': 15,
  '*MULTIMILLONARIO(A) IV* 💵': 16,
   '*MULTIMILLONARIO(A) III* 💵': 17,
    '*MULTIMILLONARIO(A) II* 💵': 18,
      '*MULTIMILLONARIO(A) I* 💵': 19,
    '*BILLONARIO(A) V* 💴': 20,
     '*BILLONARIO(A) IV* 💴': 21,
      '*BILLONARIO(A) III* 💴': 22,
       '*BILLONARIO(A) II* 💴': 23,
        '*BILLONARIO(A) I* 💴': 24,
    '*MULTIBILLONARIO(A) V* 💶': 20,
     '*MULTIBILLONARIO(A) IV* 💶': 21,
      '*MULTIBILLONARIO(A) III* 💶': 22,
       '*MULTIBILLONARIO(A) II* 💶': 23,
        '*MULTIBILLONARIO(A) I* 💶': 24,
    '*TRILLONARIO(A) V* 💷': 25,
     '*TRILLONARIO(A) IV* 💷': 26,
      '*TRILLONARIO(A)  III* 💷': 27,
       '*TRILLONARIO(A) II* 💷': 28,
        '*TRILLONARIO(A) I* 💷': 29,
    '*MULTITRILLONARIO(A) V* 💳': 30,
     '*MULTITRILLONARIO(A) IV* 💳': 31,
      '*MULTITRILLONARIO(A) III* 💳': 32,
       '*MULTITRILLONARIO(A) II* 💳': 33,
        '*MULTITRILLONARIO(A) I* 💳': 34,
    '*DIAMANTE V* 💎': 35,
     '*DIAMANTE IV* 💎': 36,
      '*DIAMANTE III* 💎': 37,
       '*DIAMANTE II* 💎': 38,
        '*DIAMANTE I* 💎': 39,
    '*PRO EN GATABOT V* 😼': 40,
     '*PRO EN GATABOT IV* 😼': 41,
      '*PRO EN GATABOT III* 😼': 42,
       '*PRO EN GATABOT II* 😼': 43,
        '*PRO EN GATABOT I* 😼': 44,
    '*SUPER PRO V* 🎩': 45,
     '*SUPER PRO IV* 🎩': 46,
      '*SUPER PRO III* 🎩': 47,
       '*SUPER PRO II* 🎩': 48,
        '*SUPER PRO I* 🎩': 49,
    '*LEGENDARIO(A) V* 🛡️': 50,
     '*LEGENDARIO(A) IV* 🛡️': 51,
      '*LEGENDARIO(A) III* 🛡️': 52,
       '*LEGENDARIO(A) II* 🛡️': 53,
        '*LEGENDARIO(A) I* 🛡️': 54,
    '*LEYENDA V* 🏆': 55,
     '*LEYENDA IV* 🏆': 56,
      '*LEYENDA III* 🏆': 57,
       '*LEYENDA II* 🏆': 58,
       '*LEYENDA I* 🏆': 59,
    '*ESTELAR V* ☄️': 60,
     '*ESTELAR IV* ☄️': 61,
      '*ESTELAR III* ☄️': 62,
       '*ESTELAR II* ☄️': 63,
        '*ESTELAR I* ☄️': 64,
    '*TOP ASTRAL V* ⚜️🔱': 65,
     '*TOP ASTRAL IV* ⚜️🔱': 66,
      '*TOP ASTRAL III* ⚜️🔱': 67,
       '*TOP ASTRAL II* ⚜️🔱': 68,
        '*TOP ASTRAL I* ⚜️🔱': 69,
    '👑 *ÉLITE GLOBAL V* 🏁': 70,
     '👑 *ÉLITE GLOBAL IV* 🏁': 75,
      '👑 *ÉLITE GLOBAL III* 🏁': 80,
       '👑 *ÉLITE GLOBAL II* 🏁': 85,
        '👑 *ÉLITE GLOBAL I* 🏁': 90,
    '👑 *∞ ÉLITE GLOBAL V* 💎🏁': 100,
     '👑 *∞ ÉLITE GLOBAL IV* 💎🏁': 140,
    '👑 *∞ ÉLITE GLOBAL III* 💎🏁': 180,
    '👑 *∞ ÉLITE GLOBAL II* 💎🏁': 250,
    '👑 *∞ ÉLITE GLOBAL I* 💎🏁': 300
}

export function before(m) {
let user = db.data.users[m.sender]
let level = user.level
let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
user.role = role
return !0
}
