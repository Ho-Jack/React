UmiJs和dva、roadhog是什么关系？

- **roadhog** 是基于 webpack 的封装工具，目的是简化 webpack 的配置
- **umi** 可以简单地理解为 roadhog + 路由，思路类似 next.js/nuxt.js，辅以一套插件机制，目的是通过框架的方式简化 React 开发
- **dva** 目前是最纯粹的数据流，和 umi 和 roadhog 之间并没有相互的依赖关系，可以分开使用也可以一起使用。



截取官方文档：

[dva](http://dvajs.com/) 是一个基于 Redux 的 轻量级数据流方案，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。

[umi](http://umijs.org/) 则是一个可插拔的企业级 react 应用框架。umi 以路由为基础的，支持[类 next.js 的约定式路由](https://umijs.org/zh/guide/router.html)，以及各种进阶的路由功能，并以此进行功能扩展，比如[支持路由级的按需加载](https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport)。然后配以完善的[插件体系](https://umijs.org/zh/plugin/)，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求，同时提供 [Umi UI](https://umijs.org/zh/guide/umi-ui.html) 通过可视化辅助编程（VAP）提高开发体验和研发效率。