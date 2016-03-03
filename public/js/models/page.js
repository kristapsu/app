define(['underscore', 'backbone'], function (_, Backbone) {
  var PageModel = Backbone.Model.extend({
    //modelim var but "urlroot", bet collectioniem ir "url". Backbone dokumentacija.
    urlRoot: '/pages'
  });
  return PageModel;
});
