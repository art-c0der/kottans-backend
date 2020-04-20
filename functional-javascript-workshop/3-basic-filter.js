const getShortMessages = messages => (
  messages.filter(msg => msg.message.length < 50).map(msg => msg.message)
)

module.exports = getShortMessages
