const router = require('koa-router')();

// controllers
const {
  saveInfo,
  fetchInfo,
  saveStudent,
  fetchStudent,
  fetchStudentDetail,
  saveCourse,
  fetchCourse
} = require('../controllers');

// const {saveInfo, fetchInfo} = require('../controllers/info');
// const {saveStudent, fetchStudent, fetchStudentDetail} = require('../controllers/student');
// const {saveCourse, fetchCourse} = require('../controllers/course');

router.post('/saveinfo', saveInfo);
router.get('/info', fetchInfo);
router.post('/savestudent', saveStudent);
router.get('/student', fetchStudent);
router.get('/studentInfo', fetchStudentDetail);
router.post('/savescourse', saveCourse);
router.get('/course', fetchCourse);
router.get('/', function (ctx) {
  ctx.body = 'GraphQL';
});
module.exports = router;
