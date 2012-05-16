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

    }
  };
});
