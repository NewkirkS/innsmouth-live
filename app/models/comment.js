import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  name: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
