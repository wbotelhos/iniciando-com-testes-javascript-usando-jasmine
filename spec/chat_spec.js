describe('#constructor', function() {
  it ('keeps the nickname on instance', function() {
    var chat = new Chat('jasmine');

    expect(chat.nickname).not.toBeUndefined();
  });

  it ('keeps the same nickname', function() {
    var chat = new Chat('jasmine');

    expect(chat.nickname).toEqual('jasmine');
  });
});
