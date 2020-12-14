const enum eventName {
  CREATE_MESSAGE = 'create message',
  UPDATE_MESSAGE = 'update message',
  DELETE_MESSAGE = 'delete message',
  CREATE_REPLY = 'create reply',
  UPDATE_REPLY = 'update reply',
  DELETE_REPLY = 'delete reply',
  JOIN_CHATROOM = 'join chatroom',
  CREATE_CHATROOM = 'create chatroom',
  CREATE_REACTION = 'create reaction',
  DELETE_REACTION = 'delete reaction'
}
export default eventName;
