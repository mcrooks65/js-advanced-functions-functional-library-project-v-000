const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iterater) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++)
        iterater(newCollection[idx])

      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
