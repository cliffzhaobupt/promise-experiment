
function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo(5);
console.log(it.next());     // { value:6, done:false }
console.log(it.next(12));   // { value:8, done:false }
console.log(it.next(13));   // { value:42, done:true }

function co(generator) {
  onFulfilled();

  function onFulfilled(res) {
    var ret;
    ret = generator.next(res);
    next(ret);
  }


  function next(ret) {
    if (ret.done) return;
    var value = ret.value;
    value.then(onFulfilled);
  }
}

var promise = new Promise (function (resolve) {
  setTimeout(function() {
    resolve();
  }, 1000)
});

promise.then(function() {
  console.log('shown after 1s');
}).then(function() {
  console.log('shown after the message before');
});

// function getJSON(url) {
//   return new Promise(function(resolve) {
//     $.getJSON(url, function(data) {
//       resolve(data);
//     });
//   });
// }

// var CITIES, HOBBIES;

co(function* (){
  yield getJSON('/hobbies').then(function(hobbies) {
    HOBBIES = hobbies;
  });
  yield getJSON('/cities').then(function(cities) {
    CITIES = cities;
  });
  yield getJSON('/friends').then(function(friends) {
    for (var i = 0, len = friends.length ; i < len ; i ++) {
      var friend = friends[i];
      //...
    }
  });
});

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



// getJSON('/cities').then(function(cities) {
//   CITIES = cities;
//   return getJSON('/hobbies');
// }).then(function(hobbies) {
//   HOBBIES = hobbies;
//   return getJSON('/friends');
// }).then(function(friends) {
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

// $.getJSON('/cities', function(cities) {
//   CITIES = cities;
//   $.getJSON('/hobbies', function(hobbies) {
//     HOBBIES = hobbies;
//     $.getJSON('/friends', function(friends) {
//       for (var i = 0, len = friends.length ; i < len ; i ++) {
//         var friend = friends[i];

//         $('.friends').append([
//           '<dt>',
//           friend.name,
//           '</dt>',
//           '<dd>',
//           friend.age,
//           '</dd>',
//           '<dd>',
//           HOBBIES[friend.hobby],
//           '</dd>',
//           '<dd>',
//           CITIES[friend.city],
//           '</dd>'
//         ].join(''));
//       }
//     });
//   });
// });

// $.getJSON('/cities', function setCitiesAndGetHobbies(cities) {
//   CITIES = cities;
//   $.getJSON('/hobbies', function setHobbiesAndGetFriendsData(hobbies) {
//     HOBBIES = hobbies;
//     $.getJSON('/friends', function showFriendsInfo(friends) {
//       for (var i = 0, len = friends.length ; i < len ; i ++) {
//         var friend = friends[i];

//         $('.friends').append([
//           '<dt>',
//           friend.name,
//           '</dt>',
//           '<dd>',
//           friend.age,
//           '</dd>',
//           '<dd>',
//           HOBBIES[friend.hobby],
//           '</dd>',
//           '<dd>',
//           CITIES[friend.city],
//           '</dd>'
//         ].join(''));
//       }
//     });
//   });
// });

// function getHobbies() {

// }

// $.getJSON('/cities', function(cities) {
//   CITIES = cities;
//   $.getJSON('/hobbies', function(hobbies) {
//     HOBBIES = hobbies;
//     $.getJSON('/friends', showFriendInfo);
//   });
// });

// $.getJSON('/cities', function(cities) {
//   CITIES = cities;
//   $.getJSON('/hobbies', setHobbiesAndGetFriendData);
// });

// $.getJSON('/cities', setCitiesAndGetHobbyData);

// function setCitiesAndGetHobbyData(cities) {
//   CITIES = cities;
//   $.getJSON('/hobbies', setHobbiesAndGetFriendData);
// }

// function setHobbiesAndGetFriendData(hobbies) {
//   HOBBIES = hobbies;
//   $.getJSON('/friends', showFriendInfo);
// }

// function showFriendInfo(friends) {
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
// }

// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…

//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });

// promise.then(function(result) {
//   console.log(result); // "Stuff worked!"
// }, function(err) {
//   console.log(err); // Error: "It broke"
// });
