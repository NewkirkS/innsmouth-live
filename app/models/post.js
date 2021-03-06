import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  picture: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  comments: DS.hasMany('comment',{async: true})
});
