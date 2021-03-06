const role = JSON.parse(
  '[{"title":"\u9996\u9875","key":"","api":"admin/index/index","subclass":[{"title":"\u5feb\u6377\u64cd\u4f5c","key":"","api":"","subclass":[{"title":"\u6e05\u7a7a\u7f13\u5b58","key":"","api":"admin/index/wipecache"},{"title":"\u540e\u53f0\u9996\u9875","key":"","api":"admin/index/index","subclass":[{"title":"\u6587\u4ef6\u4e0a\u4f20","key":"","api":"admin/attachment/upload"},{"title":"\u68c0\u67e5\u7248\u672c\u66f4\u65b0","key":"","api":"admin/index/checkupdate"}]},{"title":"\u4e2a\u4eba\u8bbe\u7f6e","key":"","api":"admin/index/profile"},{"title":"\u6d88\u606f\u7ba1\u7406","key":"","api":"","subclass":[{"title":"\u6d88\u606f\u5217\u8868","key":"","api":"user/message/index","subclass":[{"title":"\u65b0\u589e","key":"","api":"user/message/add"},{"title":"\u7f16\u8f91","key":"","api":"user/message/edit"},{"title":"\u5220\u9664","key":"","api":"user/message/delete"},{"title":"\u542f\u7528","key":"","api":"user/message/enable"},{"title":"\u7981\u7528","key":"","api":"user/message/disable"},{"title":"\u5feb\u901f\u7f16\u8f91","key":"","api":"user/message/quickedit"}]}]}]},{"title":"\u6d88\u606f\u4e2d\u5fc3","key":"","api":"admin/message/index","subclass":[{"title":"\u5220\u9664","key":"","api":"admin/message/delete"},{"title":"\u542f\u7528","key":"","api":"admin/message/enable"}]}]},{"title":"api\u7ba1\u7406","key":"","api":"api/index/index","subclass":[{"title":"\u76f4\u64ad\u7ba1\u7406","key":"api_live_m","api":"","subclass":[{"title":"\u542f\u7528","key":"","api":"api/live/enable"},{"title":"\u7981\u7528","key":"","api":"api/live/disable"},{"title":"\u8bbe\u7f6e\u76f4\u64ad\u4e0a/\u4e0b\u8bfe\u72b6\u6001","key":"","api":"api/live/setlivestatus"},{"title":"\u5b66\u751f\u52a0\u5206","key":"","api":"api/live/putstudentintegral"},{"title":"\u83b7\u53d6\u4e0a\u8bfe\u76f4\u64ad","key":"","api":"api/live/goclass"},{"title":"\u8bbe\u7f6e\u5b66\u751f\u8003\u52e4\u72b6\u6001","key":"","api":"api/live/setstudentstatus"}]},{"title":"\u8ba2\u5355\u6a21\u5757","key":"api_order_index","api":"api/order/index","subclass":[{"title":"\u8ba2\u5355\u7ba1\u7406","key":"api_order_orderLists","api":"api/order/orderlists"},{"title":"\u8ba2\u5355\u8be6\u60c5","key":"api_order_detail","api":"api/order/detail"},{"title":"\u8865\u5efa\u8ba2\u5355","key":"api_order_createOrder","api":"api/order/createorder"},{"title":"\u8ba2\u5355\u5bfc\u51fa","key":"api_order_explode","api":"api/order/index"}]},{"title":"\u5957\u9910\u7ba1\u7406","key":"api_package_index","api":"api/package/index","subclass":[{"title":"\u5957\u9910\u8be6\u60c5","key":"api_package_detail","api":"api/package/detail"}]},{"title":"\u914d\u7f6e\u4fe1\u606f\u8bfb\u53d6\uff08\u9ed8\u8ba4\u5f00\u542f\uff09","key":"api/config/temp","api":"api/config/temp","subclass":[{"title":"\u8bfe\u7a0b\u8bfe\u7c7b","key":"api_course_getclasslist","api":"api/course/getclasslist"},{"title":"\u8bfe\u7a0b\u5206\u7c7b\u7ea7\u8054","key":"api_course_categorycascader","api":"api/course/categorycascader"},{"title":"\u83b7\u53d6\u76f4\u64ad\u4e2d\u7684\u5b66\u5458","key":"api_live_listStudent","api":"api/live/liststudent"},{"title":"\u521b\u5efa\u8ba2\u5355\u53f7","key":"api_order_orderNumber","api":"api/order/ordernumber"},{"title":"\u8bfe\u7a0b\u5957\u9910\u5217\u8868","key":"api_package_getCoursePackage","api":"api/package/getcoursepackage"},{"title":"\u987e\u95ee\u63a5\u53e3","key":"api_admin_user_getCounselor","api":"api/admin_user/getcounselor"},{"title":"\u6559\u5e08\u7ba1\u7406","key":"api_teacher_getTeacher","api":"api/teacher/getteacher"},{"title":"\u8bfe\u4ef6\u6570\u636e","key":"api_chapter_categoryChapter","api":"api/chapter/categorychapter"},{"title":"\u83b7\u53d6\u914d\u7f6e","key":"api_config_index","api":"api/config/index"},{"title":"\u7701\u5e02\u533a\u8054\u52a8\u6570\u636e","key":"api_config_cityfour","api":"api/config/cityfour"},{"title":"\u540d\u5355\u6765\u6e90\u6570\u636e","key":"api_config_userSource","api":"api/config/usersource"},{"title":"\u6279\u91cf\u5206\u914d\u540d\u5355\u7edf\u8ba1","key":"api_userlist_alloCount","api":"api/userlist/allocount"},{"title":"\u83b7\u53d6\u9876\u90e8\u4e0b\u62c9\u9009\u9879\u7edf\u8ba1\u6570\u636e","key":"api_userlist_allCount","api":"api/userlist/allcount"},{"title":"\u83b7\u53d6\u6811\u72b6\u8bfe\u7c7b\u6570\u636e","key":"api_courseCategory_getTree","api":"api/course_category/gettree"},{"title":"\u6d4b\u7f51\u5f02\u5e38\u7edf\u8ba1","key":"api_checkDevice_errorCount","api":"api/check_device/errorcount"},{"title":"\u8bfe\u4ef6\u4e0b\u62c9\u5217\u8868","key":"api_courseware_selectList","api":"api/courseware/selectlist"},{"title":"\u8f6c\u4ecb\u7ecd\u7528\u6237\u63a8\u8350\u5173\u7cfb","key":"api_presentParentUser_getInviteRela","api":"api/present_parent_user/getinviterela"},{"title":"\u83b7\u53d6\u6240\u6709\u5957\u9910","key":"api_package_getPackageList","api":"api/package/getpackagelist"},{"title":"\u6392\u7248\u7ba1\u7406-\u83b7\u53d6\u8bfe\u8282\u5c5e\u6027","key":"api_eduLiveProperty_getProperty","api":"api/edu_live_property/getproperty"},{"title":"\u6392\u8bfe\u7ba1\u7406-\u7ea6\u8bfe\u5165\u53e3-\u83b7\u53d6\u8001\u5e08","key":"api_eduPlan_getTeacher","api":"api/edu_plan/getteacher"},{"title":"\u6392\u8bfe\u7ba1\u7406-\u7ea6\u8bfe\u5165\u53e3-\u8001\u5e08\u638c\u63e1\u8bfe\u4ef6","key":"api_eduPlan_getChapter","api":"api/edu_plan/getchapter"},{"title":"\u6392\u73ed\u7ba1\u7406-\u7ea6\u8bfe\u5165\u53e3-\u5b66\u751f\u7ea6\u8bfe","key":"api_eduPlan_addStudent","api":"api/edu_plan/addstudent"},{"title":"\u6392\u73ed\u7ba1\u7406-\u83b7\u53d6\u6392\u73ed\u8bfe\u8282\u5c5e\u6027","key":"api_eduPlan_getLiveType","api":"api/edu_plan/getlivetype"},{"title":"\u83b7\u53d6\u67d0\u9884\u6392\u8bfe\u7a0b\u8bfe\u8282\u5c5e\u6027","key":"api_eduPlan_getTeacherPlan","api":"api/edu_plan/getteacherplan"},{"title":"\u83b7\u53d6\u6211\u7684\u9080\u8bf7\u4eba","key":"api_presentParentUser_getInviteInfo","api":"api/present_parent_user/getinviteinfo"},{"title":"\u83b7\u53d6\u90e8\u95e8\u5217\u8868","key":"api_department_getdeplist","api":"api/department/getdeplist"},{"title":"\u83b7\u53d6\u90e8\u95e8\u4e0b\u5458\u5de5\u5217\u8868","key":"api_department_getdepadminuser","api":"api/department/getdepadminuser"},{"title":"\u83b7\u53d6\u7b5b\u9009\u8bfe\u4ef6 \uff08\u4e0b\u8282\u8bfe\u8bfe\u4ef6\u5217\u8868\uff09","key":"api_chapter_getChapter","api":"api/chapter/getchapter"}]},{"title":"\u6392\u8bfe\u6a21\u5757","key":"api/live/temp","api":"api/live/temp","subclass":[{"title":"\u76f4\u64ad\u8be6\u60c5","key":"api_live_livedetail","api":"api/live/livedetail"},{"title":"\u5468\u89c6\u56fe","key":"api_live_week","api":"api/live/week"},{"title":"\u8bfe\u8868\u7ba1\u7406","key":"api_live_liveLists","api":"api/live/livelists"},{"title":"\u8bfe\u8868\u7ba1\u7406-\u67e5\u770b\u5b66\u751f","key":"api_student_liveStudentList","api":"api/student/livestudentlist"}]},{"title":"\u5b66\u5458\u6a21\u5757","key":"api_student_temp","api":"api/student/temp","subclass":[{"title":"\u8bfe\u7a0b\u4fe1\u606f","key":"api_student_liveList","api":"api/student/livelist"},{"title":"\u6392\u8bfe\u5217\u8868","key":"api_classs_index","api":"api/classs/index"},{"title":"\u5b66\u5458\u5217\u8868","key":"api_student_index","api":"api/student/index"},{"title":"\u6392\u8bfe\u5217\u8868","key":"api_student_getStudent","api":"api/student/getstudent"},{"title":"\u5408\u540c","key":"api_student_order","api":"api/student/order"}]},{"title":"\u57fa\u672c\u6a21\u5757","key":"api_base_temp","api":"api/base/temp","subclass":[{"title":"\u56fe\u7247\u4e0a\u4f20\u63a5\u53e3","key":"api_upload_index","api":"api/upload/index"},{"title":"\u540e\u7aef\u6587\u4ef6\u4e0b\u8f7d","key":"api_upload_downFile","api":"api/upload/downfile"}]},{"title":"\u6570\u636e\u4e2d\u5fc3","key":"api_data_temp","api":"api/data/temp","subclass":[{"title":"\u9500\u552e\u7edf\u8ba1\uff08\u6309\u987e\u95ee\uff09","key":"api_DataSell_salesStatementCounselor","api":"api/datasell/salesstatementcounselor"},{"title":"\u9500\u552e\u7edf\u8ba1\uff08\u6309\u6765\u6e90\uff09","key":"api_DataSell_salesStatementSource","api":"api/datasell/salesstatementsource"}]},{"title":"\u7ebf\u7d22\u540d\u5355\u516c\u7528","key":"api_userlist_public","api":"api/userlist/public","subclass":[{"title":"\u67e5\u770b\u7528\u6237\u8be6\u60c5","key":"api_student_detail","api":"api/student/detail"},{"title":"\u8ddf\u8fdb\u8bb0\u5f55","key":"api_userlist_follow","api":"api/userlist/follow"},{"title":"\u9884\u7ea6\u8bb0\u5f55","key":"api_userlist_reserve","api":"api/userlist/reserve"},{"title":"\u64cd\u4f5c\u8bb0\u5f55","key":"api_userlist_operlog","api":"api/userlist/operlog"},{"title":"\u4e0b\u62c9\u641c\u7d22\u5217\u8868","key":"api_userlist_selectSearch","api":"api/userlist/selectsearch"},{"title":"\u4fee\u6539\u5408\u540c\u8bfe\u65f6\u3001\u8bfe\u7c7b","key":"api_order_editOrder","api":"api/order/editorder"},{"title":"\u7528\u6237\u6d4b\u7f51\u8bb0\u5f55","key":"api_checkDevice_userCheckLog","api":"api/check_device/userchecklog"},{"title":"\u8be6\u60c5","key":"api_userlist_detail","api":"api/userlist/detail"}]},{"title":"\u8425\u9500\u4e2d\u5fc3","key":"api_present_temp","api":"api/present/temp","subclass":[{"title":"\u521b\u610f\u7ba1\u7406","key":"api_Present_index","api":"api/present/index","subclass":[{"title":"\u8f6c\u4ecb\u7ecd-\u67e5\u770b\u6570\u636e\u8be6\u60c5","key":"api_presentParentUser_detail","api":"api/present_parent_user/detail"}]}]},{"title":"\u5305\u88f9\u7ba1\u7406","key":"api_postPackage_userPackage","api":"api/post_package/userpackage","subclass":[{"title":"\u6dfb\u52a0\u5305\u88f9\u8bb0\u5f55","key":"api_postPackage_add","api":"api/post_package/add"},{"title":"\u5305\u88f9\u8bb0\u5f55\u7f16\u8f91","key":"api_postPackage_edit","api":"api/post_package/edit"},{"title":"\u5305\u88f9\u8bb0\u5f55\u5220\u9664","key":"api_postPackage_delete","api":"api/post_package/delete"}]},{"title":"\u6d88\u606f\u4e2d\u5fc3","key":"msg","api":"","subclass":[{"title":"\u5168\u90e8\u5df2\u8bfb","key":"api_msg_center_setallread","api":"api/msg_center/setallread"},{"title":"\u6d88\u606f\u5217\u8868","key":"api_msg_center_getMsgList","api":"api/msg_center/getmsglist"},{"title":"\u5df2\u8bfb\u6d88\u606f","key":"api_msg_center_readmsg","api":"api/msg_center/readmsg"}]}]}]'
);

{
  let arr = [];

  function fn(role) {
    role.forEach((item) => {
      if (item.key) {
        arr.push(item.key);
      }
      if (item.subclass) {
        fn(item.subclass);
      }
    });
  }

  // fn(role)
  // console.log(arr);
}

/**
 * 预设result缓存，每次调用后存入result，并把结果传入下一次计算里
 */
{
  function fn(role, result = []) {
    role.forEach((item) => {
      const { api, key, subclass } = item;

      if (key) {
        result.push(key);
      }
      if (subclass) {
        fn(subclass, result);
      }
    });

    return result;
  }

  // console.log(fn(role));
}

{
  function fn(role) {
    return (
      Array.isArray(role) &&
      role.map((item) => {
        const { api, key, subclass } = item;

        // if (key) {
        //   return key;
        // }
        // if (subclass) {
        //   // return fn(subclass)
        // }
        // // return key ? key : fn(subclass);
        return subclass ? fn(subclass) : key;
      })
    );
  }

  console.log(fn(role));
}
