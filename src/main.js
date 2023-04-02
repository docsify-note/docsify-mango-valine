let config = {
    el: '#vcomments',
    path: window.document.title // 默认按标题
}
export function install (hook, vm) {
    hook.afterEach(function(html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        html += `<div id="vcomments"></div>`;
        next(html);
      });

      hook.doneEach(function() {
        // 每次路由切换时数据全部加载完成后调用，没有参数。
        // ...
        let theConfig = Object.assign({}, config, window.$docsify.valine);
        new Valine(theConfig)
        console.info("[docsify-valine] render success!")
      });
}