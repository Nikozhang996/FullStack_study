/**
 * https://www.jianshu.com/p/bf7206fba067
 */

const fsPromise = require("fs").promises,
  path = require("path");

const { exec } = require("child_process");

const FORM_PATH = path.resolve(
  process.env.USERPROFILE,
  "./Documents/WebstormProjects/crm-teaching/dist"
);
const TARGET_PATH = path.resolve(
    process.env.USERPROFILE,
    "./Desktop/部署/workbench"
  ),
  TEACHING_PATH = path.resolve(TARGET_PATH, "./teaching");

const MAIN_FILE_REG = /^(main).*$/,
  TEACHING_HASH_REG = /(\/teaching\/main.[a-z,0-9]+.js+)/gi;

// console.log(process.env.USERPROFILE);

handler(FORM_PATH, TEACHING_PATH)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });

async function handler(formPath, targetPath) {
  // 文件目录
  const formFile = await fsPromise.readdir(formPath),
    targetFile = await fsPromise.readdir(targetPath);
  // 源、目标文件名
  const formMainName = formFile.filter(file => file.match(MAIN_FILE_REG))[0],
    targetMainName = targetFile.filter(file => file.match(MAIN_FILE_REG))[0];
  // index.html内容
  let indexHtmlFile = await fsPromise.readFile(
    path.resolve(targetPath, "../index.html"),
    "utf-8"
  );

  indexHtmlFile = indexHtmlFile.replace(
    TEACHING_HASH_REG,
    `/teaching/${formMainName}`
  );

  await fsPromise.writeFile(
    path.resolve(targetPath, "../index.html"),
    indexHtmlFile,
    "utf-8"
  );

  // 若hash值一致则拦截，因为数据都一样
  if (formMainName === targetMainName) {
    return;
  }

  /**
   * 1、执行npm run build
   * 2、读取formPath下的目录
   * 3、删除targetPath下的文件
   * 4、copy form 到 targeth
   * 5、执行git add commit push
   */
  await removeFile(targetPath);
  await copyFolder(formPath, targetPath);
  return "迁移成功！";
}

/**
 * copyFolder
 * 复制指定目录文件到指定文件夹
 * @param targetPath {string} 指定路径
 * @return {Promise}
 * https://itbilu.com/nodejs/core/41cswxaTx.html
 * http://ourjs.com/detail/59a53a1ff1239006149617c6
 */
async function copyFolder(formPath, targetPath) {
  const formFile = await fsPromise.readdir(formPath);
  for (const item of formFile) {
    const data = await fsPromise.readFile(path.resolve(formPath, item));

    const result = await fsPromise.writeFile(
      path.resolve(targetPath, item),
      data
    );
  }
}
/**
 * removeFile
 * 删除目录文件
 * @param targetPath {string} 指定路径
 * @return {Promise}
 */
async function removeFile(targetPath) {
  const fileUrls = await fsPromise.readdir(targetPath);
  fileUrls.length > 0 &&
    fileUrls.map(function(item) {
      return fsPromise.unlink(path.resolve(targetPath, item));
    });
}
