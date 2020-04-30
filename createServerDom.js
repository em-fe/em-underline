export default (account) => {
  /* eslint-disable */
  let host = '';
  let url = '';
  const pathname = window.location.pathname;
  if (window.location.hostname === 'localhost') {
    host = 'http://gateway.inner.evente.cn:8000';
    url = `${host}/super/api/help_center/list?path=/${account}${pathname}`
  } else {
    host = window.location.origin.replace('home','gateway');
    url = `${host}/super/api/help_center/list?path=${pathname}`
  }

  let xhr=new XMLHttpRequest();
      xhr.open('GET',url,false);
      if (window.location.hostname !== 'localhost') {
        xhr.withCredentials = true;
      }
      xhr.send();
  const res = JSON.parse(xhr.responseText);
  const list = res.data;
  let contHtml = ''
  if (list.length) {
    let listHtml = ''
    list.forEach((item) => {
      listHtml += `<li class="serverBox-main-ul-li">• ${item.title}</li>`;
    });
    contHtml = `<div class="serverBox-main-title">小易帮助指南</div> <ul id="ul" class="serverBox-main-ul"> ${listHtml}</ul>`
  } else {
    contHtml = '<div class="serverBox-main-title">有什么需要请尽管问小易~</div>'
  }
  const sNode = document.createElement('div');
  sNode.innerHTML = `
      <div class="serverparent" id="serverParent">
          <img id="serverImg" class="serverparent-img" src="https://2img.evente.cn/fe/63/c5/a4cf7a9ccec7ad6e400f3ab9b4.jpg">
          <div id="serverBox" class="serverBox">
              <div class="serverBox-tip"></div>
              <div class="serverBox-header">
                  <p class="serverBox-header-title ">帮助指南</p>
                  <p >
                      <span id="close" class="serverBox-header-line"></span>
                  </p>
              </div>
              <div class="serverBox-main">
                  ${contHtml}
              </div>
              <div class="serverBox-footer">
                  <div id="help" class="serverBox-footer-btn borderbtn">更多帮助</div>
                  <div id="server" class="serverBox-footer-btn">人工客服</div>
              </div>
          </div>
      </div>
  `;
  var sStyle = document.createElement("style");
  sStyle.type = "text/css";
  sStyle.innerHTML = "*{padding:0;margin:0;box-sizing:border-box;}.serverparent{position:fixed;bottom:68px;right:-28px;transition:all .35s ease-in-out;z-index: 9;}.serverparent-img{width:60px;}.serverBox{box-sizing:border-box;width:284px;background:#FFFFFF;box-shadow:0 4px 12px 0 rgba(41,43,45,0.16);position:absolute;top:-10px;left:67px;transform:translate(-100%,-100%);display:none;}.serverBox-tip{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;z-index:2;bottom:-8px;right:30px;border-width:8px 8px 0;border-top-color:rgb(255,255,255);}.serverBox-header{box-sizing:border-box;width:100%;height:42px;display:flex;align-items:center;justify-content:space-between;background-color:#1996f9;border-radius:4px 4px 0 0;padding:0 16px 0 20px;}.serverBox-header-title{font-family:'PingFangSC-Medium';font-size:18px;color:#fff;}.serverBox-header-line{display:block;width:13px;height:2px;background:#fff;cursor:pointer;}.serverBox-main{max-height:300px;overflow-y:auto;padding:16px;}.serverBox-main-title{font-family:'PingFangSC-Regular';font-size:12px;color:#383838;}.serverBox-main-ul{margin-top:8px;list-style-type:none;font-family:'PingFangSC-Regular';font-size:12px;color:#1996F9;}.serverBox-main-ul-li{margin-top:10px;cursor:pointer;}.serverBox-footer{width:100%;height:35px;border-radius:0 0 4px 4px;border-top:1px solid #F0F2F5;display:flex;font-family:'PingFangSC-Regular';align-items:center;}.serverBox-footer-btn{flex:1;display:flex;font-family:'PingFangSC-Regular';font-size:12px;color:#1996F9;align-items:center;justify-content:center;height:24px;cursor:pointer;}.serverBox-footer-btn.borderbtn{border-right:1px solid #F0F2F5;}"
  document.body.appendChild(sNode);
  document.body.appendChild(sStyle);
  document.getElementById("serverImg").onclick=function(){document.getElementById("serverParent").style.right="56px",setTimeout(()=>{document.getElementById("serverBox").style.display="block"},350)};
  document.getElementById("close").onclick=function(){document.getElementById("serverBox").style.display="none",document.getElementById("serverParent").style.right="-28px"};
  document.getElementById("help").onclick=function(){window.open("https://college.evente.cn/list/20")},
  document.getElementById("server").onclick=function(){qimoChatClick()};
  const liNode = document.getElementById('ul') && document.getElementById('ul').getElementsByTagName('li');
  if (liNode.length) {
    for(let i = 0; i < liNode.length; i++) {
      liNode[i].onclick = function(){
        window.open(list[i].link)
      }
    }
  }
}
