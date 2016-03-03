define(['underscore', 'backbone', 'models/page'], function (_, Backbone, PageModel) {
  var PagesCollection = Backbone.Collection.extend({
    model: PageModel,
    //modelim var but "urlroot", bet collectioniem ir "url". Backbone dokumentacija.
    url: '/pages'
  });
  return PagesCollection;
});
