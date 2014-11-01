function Chat(nickname) {
  'use strict';

  this.nickname = nickname;
}

Chat.prototype.talk = function(message) {
  'use strict';

  return this.nickname + ' said: ' + message;
};
