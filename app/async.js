define(function() {
  return {
    async : function() {
      var deferred = new $.Deferred(); 
      setTimeout(function () {
        deferred.resolve(true);
      }, 10);

      return deferred;
    },

    manipulateRemoteData : function() {
      var deferred = new $.Deferred();

      $.get(url).then(function (result) {
        var people = result.people,
            peopleNames = [];

        for (var i=0; i<people.length; i++) {
          var n = people[i].name === 'Adam' ? 'Adem' : people[i].name;
          peopleNames.push(n);
        }
        deferred.resolve(peopleNames.sort());
      });

      return deferred;
    }
  };
});
