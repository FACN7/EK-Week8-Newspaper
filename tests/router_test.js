process.env.NODE_ENV = "test";
const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('home test', t => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err);
      // console.log(res.body);
      t.end();
    });
});


test('/ViewArticle/:article_id', t => {
  request(app)
    .get('/ViewArticle/1')
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.notSame(res.text.indexOf("nuclear arms deal party"),-1);
      t.end();
    });
});

test('/add', t => {
  const expected={article_id:6,
    user_id: 1,
    title: "Testing is boring",
    description:
    "we are died in this course",
    pic_url: null
};
  request(app)
    .post('/addArticle').send(expected)
    .expect(302)
    .end((err, res) => {
      t.error(err);
  t.same(res.request._data,expected);
      t.end();
    });
});

process.env.NODE_ENV = "dev";
