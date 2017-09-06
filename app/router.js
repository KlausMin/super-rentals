//take access to the actual Ember.js library as varible 'Ember'
import Ember from 'ember';

//config라는 변수를 통해 config/environment의 접근 권한 획득
import config from './config/environment';

//const : 읽기 전용 변수의 우발적 훼손 방지를 확실히 하기위한 선언 방법
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// /about으로 페이지로 접근 시 ember router에게 해당 내용을 실행하도록 안내
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

//Router 변수를 app내 다른 파트에 정의된 파일에 사용 가능하도록 한다
export default Router;
