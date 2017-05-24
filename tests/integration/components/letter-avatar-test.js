import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('letter-avatar', 'Integration | Component | letter avatar', {
  integration: true
});

test('text renders capitalized', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').text().trim(), 'KH');
});

test('text renders with all white space trimmed', function(assert) {
  this.set('text', ' k h ');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').text().trim(), 'KH');
});

test('text renders with trailing white space trimmed', function(assert) {
  this.set('text', 'k h ');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').text().trim(), 'KH');
});

test('text renders with leading white space trimmed', function(assert) {
  this.set('text', ' k h');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').text().trim(), 'KH');
});

test('text renders a single word', function(assert) {
  this.set('text', 'k');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').text().trim(), 'K');
});

test('text renders with more than two words', function(assert) {
  this.set('text', 'k h b');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').text().trim(), 'KH');
});

test('default size of 1024', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').attr('width'), '1024');
  assert.equal(this.$('#test').attr('height'), '1024');
});

test('can set size', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test' size='24'}}`);
  assert.equal(this.$('#test').attr('width'), '24');
  assert.equal(this.$('#test').attr('height'), '24');
});

test('has default text color', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test text').attr('fill'), '#ffffff');
});

test('can change text color', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test' textColor='#fafafa'}}`);
  assert.equal(this.$('#test text').attr('fill'), '#fafafa');
});

test('has default background color', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test').css('background-color'), 'rgb(230, 126, 34)');
});

test('can change background color', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test' color='#fafafa'}}`);
  assert.equal(this.$('#test').css('background-color'), 'rgb(250, 250, 250)');
});

test('background color stays within range of default colors', function(assert) {
  let zerothLetter = String.fromCharCode(64);
  this.set('text', `${zerothLetter}`);
  this.render(hbs`{{letter-avatar text=text id='test' color='#fafafa'}}`);
  assert.notEqual(this.$('#test').css('background-color'), 'undefined');
  let twentiethLetter = String.fromCharCode(84);
  this.set('text', `${twentiethLetter}`);
  this.render(hbs`{{letter-avatar text=text id='test' color='#fafafa'}}`);
  assert.notEqual(this.$('#test').css('background-color'), 'undefined');
});

test('has default font family', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test'}}`);
  assert.equal(this.$('#test text').css('font-family'), 'Arial');
});

test('can change default font family', function(assert) {
  this.set('text', 'k h');
  this.render(hbs`{{letter-avatar text=text id='test' fontFamily='serif'}}`);
  assert.equal(this.$('#test text').css('font-family'), 'serif');
});

