var superagent = require('superagent');
var async = require('async');
var _ = require('lodash');

var pageNums = _.range(100);

var baseuUrl = 'http://yanbian.123123.net/main/board.php?act=list&bo_table=20_11&page=';
async.eachLimit(pageNums, 1, function (pageNum, callback) {
  var url = baseuUrl + pageNum;
  console.log('url:', url)
  superagent.get(url)
    .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36')
    .end(function (err, res) {
      if (err) {
        return callback(err);
      }
      console.log(res.status);
      console.log(res.text.split('\n').slice(250, 255))
      console.log()
      return callback();
    })
}, function (err) {
  if (err) {
    return console.error('crawler error', err);
  }
})