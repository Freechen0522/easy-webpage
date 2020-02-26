let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/stars.jpg') {
    myImage.setAttribute ('src','images/stars.jpg');
  } else {
    myImage.setAttribute ('src','images/stars.jpg');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Feechen Cool!' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Freechen Cool!' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};