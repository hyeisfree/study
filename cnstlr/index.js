// DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
  var numItems = document.querySelectorAll("li.fancyTab").length;

  var tabs = document.querySelectorAll("li.fancyTab");

  switch (numItems) {
    case 12:
      setTabWidth(tabs, "8.3%");
      break;
    case 11:
      setTabWidth(tabs, "9%");
      break;
    case 10:
      setTabWidth(tabs, "10%");
      break;
    case 9:
      setTabWidth(tabs, "11.1%");
      break;
    case 8:
      setTabWidth(tabs, "12.5%");
      break;
    case 7:
      setTabWidth(tabs, "14.2%");
      break;
    case 6:
      setTabWidth(tabs, "16.666666666666667%");
      break;
    case 5:
      setTabWidth(tabs, "20%");
      break;
    case 4:
      setTabWidth(tabs, "25%");
      break;
    case 3:
      setTabWidth(tabs, "33.3%");
      break;
    case 2:
      setTabWidth(tabs, "50%");
      break;
  }
});

// Tab 너비를 설정하는 함수
function setTabWidth(tabs, width) {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.width = width;
  }
}

// 페이지와 이미지 등 모든 리소스가 로드된 후 실행
window.addEventListener("load", function () {
  var fancyTabsContainers = document.querySelectorAll(".fancyTabs");

  fancyTabsContainers.forEach(function (container) {
    var highestBox = 0;
    var tabLinks = container.querySelectorAll(".fancyTab a");

    tabLinks.forEach(function (link) {
      if (link.clientHeight > highestBox) highestBox = link.clientHeight;
    });

    tabLinks.forEach(function (link) {
      link.style.height = highestBox + "px";
    });
  });
});
