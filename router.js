Knitter.Router.map(function(){
  this.resource('knitts', {path: '/'});
  this.resource('knitt', {path:'knitt/:knitt_id'});  
  this.resource('notifications');
  this.resource('messages');
  this.resource('discover');
});
