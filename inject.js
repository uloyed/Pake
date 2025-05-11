// 扫码登录状态监听器
function checkLogin() {
  // 当检测到用户头像时触发保存
  const userAvatar = document.querySelector('.head-img'); // 高途用户头像元素
  if (userAvatar && !localStorage.hasSavedLogin) {
    localStorage.hasSavedLogin = true;
    console.log('登录状态已保存');
  }
}

// 自动恢复登录状态
if (localStorage.hasSavedLogin) {
  // 跳转到练习页（根据实际URL修改）
  window.location.href = 'https://www.gaotu.cn/pc-exercise-tool/#/home';
}

// 每2秒检查登录状态
setInterval(checkLogin, 2000);
