import Ember from 'ember';
import layout from '../templates/components/letter-avatar';

export default Ember.Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['width', 'height', 'style'],
  style: Ember.computed(function() { return new Ember.String.htmlSafe(`background:${this.get('color')}`); }),
  size: 1024,
  width: Ember.computed(function() { return this.get('size');}),
  height: Ember.computed(function() { return this.get('size');}),
  // text passed in
  colors: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'],
  fontSize: Ember.computed('size', function() { return this.get('size')/2;}),
  fontFamily: 'Arial',
  textColor: '#ffffff',

  setInitials: Ember.on('init', function() {
    let name = this.get('text');
    let nameSplit = name.trim().split(' ');
    let initialOne = nameSplit[0].charAt(0).toUpperCase();
    let initialTwo = (nameSplit[1]) ? nameSplit[1].charAt(0).toUpperCase() : '';
    let initials = `${initialOne}${initialTwo}`;
    this.set('initials', initials);
    this.setColor();
  }),

  setColor: function() {
    if (!this.get('color')) {
      let charIndex = this.get('initials').charCodeAt(0) - 64;
      let colorIndex = charIndex % 20;
      this.set('color', this.get('colors')[colorIndex]);
    }
  },
});
