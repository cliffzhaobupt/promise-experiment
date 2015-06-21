function getJSON(url) {
  return new Promise(function (resolve) {
    $.getJSON(url, {}, function (data) {
      resolve(data);
    });
  });
}

var CITIES, HOBBIES;

// getJSON('/cities').then(function (cities) {
//   CITIES = cities;
//   return getJSON('/hobbies');
// }).then(function (hobbies) {
//   HOBBIES = hobbies;
//   return getJSON('/friends');
// }).then(function (friends) {
//   for (var i = 0, len = friends.length ; i < len ; i ++) {
//     var friend = friends[i];

//     $('.friends').append([
//       '<dt>',
//       friend.name,
//       '</dt>',
//       '<dd>',
//       friend.age,
//       '</dd>',
//       '<dd>',
//       HOBBIES[friend.hobby],
//       '</dd>',
//       '<dd>',
//       CITIES[friend.city],
//       '</dd>'
//     ].join(''));
//   }
// });

$.getJSON('/cities', {}, function (cities) {
  CITIES = cities;
  $.getJSON('/hobbies', {}, function (hobbies) {
    HOBBIES = hobbies;
    $.getJSON('/friends', {}, function (friends) {
      for (var i = 0, len = friends.length ; i < len ; i ++) {
        var friend = friends[i];

        $('.friends').append([
          '<dt>',
          friend.name,
          '</dt>',
          '<dd>',
          friend.age,
          '</dd>',
          '<dd>',
          HOBBIES[friend.hobby],
          '</dd>',
          '<dd>',
          CITIES[friend.city],
          '</dd>'
        ].join(''));
      }
    });
  });
});
