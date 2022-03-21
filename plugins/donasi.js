let handler =  m => m.reply(`
╭─「 Donasi • Ovo 」
│ • 083113989278
╰────

╭─「 Donasi • Dana 」
│ • 082323341102
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
