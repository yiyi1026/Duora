export const random_str = n => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < n; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export const key_gen = (pretext,id,n) => {
  var text = random_str(n);
  return pretext + '_' + id + '_' + text;
}