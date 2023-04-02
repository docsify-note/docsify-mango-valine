# docsify-valine
docsify valine plugin，集成valine评论插件！

[![npm](https://img.shields.io/npm/v/docsify-plugin-toc.svg?style=flat-square)](https://www.npmjs.com/package/docsify-valine)

![示例](demo.png)


## Usage
1. [Applay valine](https://valine.js.org/quickstart.html) ，申请 valine

2. Configure docsify-vaine:

    ```html
    <script>
    window.$docsify = {
      valine:{
        appId: "",
        appKey: ""
      },
    }
    </script>
    ```

3. Insert script into docsify document:

    ```html
    <!-- giscus评论  -->
    <script src='//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js'></script>
    <script src="https://unpkg.com/docsify-valine@1.0.0/dist/docsify-valine.min.js"></script>
    ```
