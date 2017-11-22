<template>
    <div class="compare">
        <section>
            <ul>
                <li>
                    <h3 @click="i.a=0" :class="{'h3-active': i.a==0}">一、MVC</h3>
                </li>
                <li>
                    <h3 @click="i.a=1" :class="{'h3-active': i.a==1}">二、MVVM</h3>
                </li>
                <li>
                    <h3 @click="i.a=2" :class="{'h3-active': i.a==2}">三、VUE.JS</h3>
                </li>
                <li>
                    <h3 @click="i.a=3" :class="{'h3-active': i.a==3}">四、开始</h3>
                    <ul style="padding-left:30px;">
                        <li>
                            <h5 @click="i.a=3;i.b=0" :class="{'h5-active': i.a==3&&i.b==0}">1. 安装</h5>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <main>
            <!-- 一、MVC -->
            <div class="part1" v-show="i.a==0">
                <p><b>MVC</b> 即 <b>Model-View-Controller</b>，就是<b>模型-视图-控制器</b>, 也就是说一个标准的Web 应用程序是由这三部分组成的：</p>
                <ul>
                    <li><b>View</b> 用来把数据以某种方式呈现给用户</li>
                    <li><b>Model</b> 其实就是数据</li>
                    <li><b>Controller</b> 接收并处理来自用户的请求，并将 Model 返回给用户</li>                    
                </ul>
                <div style="text-align:center; margin-top:60px;margin-bottom:30px; ">
                    <img src="../assets/mvc.jpg" alt="" style="width:679px; height:288px;">
                </div>
                <p>以前，<b>MVC</b>作为Web 应用的最佳实践是OK 的，这是因为 Web 应用的<b>View</b>层相对来说比较简单，前端所需要的数据在后端基本上都可以处理好，<b>View</b>层主要是做一下展示，提倡用<b>Controller</b>来处理复杂的业务逻辑，所以<b>View</b>层相对来说比较轻量，就是所谓的<b>瘦客户端</b>思想。</p>
                <p>随着客户端的不断发展，现在的手机、电脑都很牛X，性能给力，也对前端的发展起到了很大的推动。前端应用的复杂程度已不同往日，人们对web的最求更高，developers慢慢的把越来越多的、越来越复杂的逻辑、交互也可以放到客户端来处理。这时前端就慢慢暴露出来一些问题，主要有这三点：</p>
                <ul>
                    <li>代码中大量调用相同的 DOM API, 处理繁琐 ，操作冗余，使得代码难以维护。</li>
                    <li>大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。</li>
                    <li>当 Model 频繁发生变化，开发者需要主动更新到View ；当用户的操作 Viewer 导致 Model 发生变化，开发者同样需要将变化的数据同步到Model 中，这样的工作不仅繁琐，而且很难维护复杂多变的数据状态。</li>
                </ul>
                <p>其实，早期jquery 的出现就是为了前端能更简洁的操作DOM 而设计的，但它只解决了第一个问题，另外两个问题始终伴随着前端一直存在。</p>
            </div>
            <!-- 二、MVVM -->
            <div v-show="i.a==1">
                <p><b>MVVM</b> 由 <b>Model</b>,<b>View</b>,<b>ViewModel</b> 三部分构成，<b>Model</b> 层代表数据模型，也可以在<b>Model</b>中定义数据修改和操作的业务逻辑；<b>View</b>代表<b>UI</b>组件，它负责将数据模型转化成<b>UI</b>展现出来，<b>ViewModel</b> 是一个同步 <b>View</b> 和 <b>Model</b> 的对象。</p>
                <p>在<b>MVVM</b>架构下，<b>View</b> 和 <b>Model</b> 之间并没有直接的联系，而是通过 <b>ViewModel</b> 进行交互，<b>Model</b> 和 <b>ViewModel</b> 之间的交互是双向的， 因此 <b>View</b> 数据的变化会同步到 <b>Model</b> 中，而 <b>Model</b> 数据的变化也会立即反应到 <b>View</b> 上。</p>
                <p><b>ViewModel</b> 通过双向数据绑定把 <b>View</b> 层和 <b>Model</b> 层连接了起来，而<b>View</b> 和 <b>Model</b> 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 <b>MVVM</b> 来统一管理。</p>
                <div style="text-align:center; margin-top:60px;">
                    <img src="../assets/mvvm.jpg" alt="">
                </div>
                <div style="text-align:center; margin-top:200px; margin-bottom: 200px;">
                    <img src="../assets/mvcVSmvvm.jpeg" alt="">
                </div>
            </div>
            <!-- 三、Vue.js -->
            <div v-show="i.a==2">
                <p><b>Vue.js 的核心思想</b></p>
                <ul style="margin-top:30px;">
                    <li>
                        <b>&nbsp;&nbsp;&nbsp;&nbsp;1.</b>
                        <div style="text-align:center; margin-top:60px;">
                            <img src="../assets/datadriver.png" alt="">
                        </div>
                    </li>
                    <li style="margin-top:200px;">
                        <b>&nbsp;&nbsp;&nbsp;&nbsp;2.</b>
                        <div style="text-align:center; margin-top:60px;">
                            <img src="../assets/dataupdate.png" alt="">
                        </div>
                    </li>
                    <li style="margin-top:200px;">
                        <b>&nbsp;&nbsp;&nbsp;&nbsp;3.</b>
                        <div style="text-align:center; margin-top:60px;">
                            <img src="../assets/components.png" alt="">
                        </div>
                    </li>
                    <li style="margin-top:200px;">
                        <b>&nbsp;&nbsp;&nbsp;&nbsp;4.</b>
                        <div style="text-align:center; margin-top:60px;margin-bottom:200px;">
                            <p style="color:rgb(174,41,76);font-size:36px;"><b>组件设计原则</b></p>
                            <ul style="text-align:left;padding-left:130px;">
                                <li style="margin-bottom:30px;list-style:circle;"><b>页面上每个独立的可视/可交互区域视为一个组件</b></li>
                                <li style="margin-bottom:30px;list-style:circle;"><b>每个组件对应一个工程目录，组件所需要的各种资源在这个目录下就近维护</b></li>
                                <li style="margin-bottom:30px;list-style:circle;"><b>页面只不过是组件的容器，组件可以嵌套自由组合形成完整的页面</b></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 四、开始 -->
            <div v-show="i.a==3">
                <!-- 1. 安装 -->
                <div v-show="i.a==3 && i.b==0">
                    <div style="text-align:center; margin-top:60px;">
                        <img src="../assets/vue_cli.png" alt="">
                    </div>
                </div>
                <!-- 2. 安装 -->
                <div v-show="i.a==3 && i.b==1">
4.1
                </div>
            </div>

        </main>
    </div>
</template>
<script>
export default {
  name: 'compare',
  data () {
      return {
          i: {
              a: 0,
              b: 0
          }
      }
  }
}
</script>
<style scoped>
.compare {
    display: flex;
}
section {
    height: 100vh;
    flex: 2;
    overflow-y:scroll;
}
main {
    height: 100vh;
    flex: 8;
    padding-left: 10px;
    border-left: 1px solid black;
    overflow: scroll;
}
section h3 {
    font-size: 20px;
}
section h3:hover, section h5:hover {
    color: red;
    transform: scale3d(1.05,1.05,1.05) translateX(5px);
}
section h3.h3-active, section h5.h5-active{
    color: rgb(79,192,141);
}
.part1 ul {
    padding-left: 50px;
}
.part1 ul li {
    list-style: circle;
}
</style>

