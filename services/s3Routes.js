var express = require('express');
var path = require('path');

var router = express.Router();

// router.set('trust proxy', 'loopback');
// var hbs = require('express-handlebars')({
//   defaultLayout: 'main',
//   extname: '.hbs'
// });
// router.use(require('body-parser').urlencoded({extended: false}));
// router.use(require('body-parser').json());
router.use(require('morgan')('combined'));

var multer = require('multer');
var multerS3 = require('multer-s3');
var aws = new require('aws-sdk');
var s3 = new aws.S3();

const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.use(express.static(path.join(__dirname, 'public')));

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'newvuew',
    key: function (req, file, cb) {
      console.log('key', file);
      cb(null, file.originalname)
    }
  })
});

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get('/test', function(req, res) {
  res.json({resp:'in S3Routes'});
});

router.post('/postToS3', upload.single('file'), function(req, res) {
  console.log("In here bitch!");
  console.log("Files", req.file)
  res.json({file: req.file});
});

module.exports = router;
