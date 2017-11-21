<template>
    <div class="compare">
        <section>
            <ul>
                <li>
                    <h3 @click="i.a=0" :class="{'h3-active': i.a==0}">一、回顾MVC</h3>
                </li>
                <li>
                    <h3 @click="i.a=1" :class="{'h3-active': i.a==1}">二、重温MVVM</h3>
                </li>

            </ul>
        </section>
        <main>
            <div class="part1" v-show="i.a==0">
                <p><b>MVC</b> 即 <b>Model-View-Controller</b>，就是<b>模型-视图-控制器</b>, 也就是说一个标准的Web 应用程序是由这三部分组成的：</p>
                <ul>
                    <li><b>View</b> 用来把数据以某种方式呈现给用户</li>
                    <li><b>Model</b> 其实就是数据</li>
                    <li><b>Controller</b> 接收并处理来自用户的请求，并将 Model 返回给用户</li>                    
                </ul>
                <p>以前，<b>MVC</b>作为Web 应用的最佳实践是OK 的，这是因为 Web 应用的<b>View</b>层相对来说比较简单，前端所需要的数据在后端基本上都可以处理好，<b>View</b>层主要是做一下展示，提倡用<b>Controller</b>来处理复杂的业务逻辑，所以<b>View</b>层相对来说比较轻量，就是所谓的<b>瘦客户端</b>思想。</p>
            </div>
            <div v-show="i.a==1">
                MVVM
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
    flex: 2;
}
main {
    flex: 8;
    padding-left: 10px;
    border-left: 1px solid black;
}
section h3 {
    font-size: 20px;
}
section h3:hover {
    background-color: aquamarine;
    color: red;
}
section h3.h3-active {
    color: red;
}
.part1 ul {
    padding-left: 50px;
}
.part1 ul li {
    list-style: circle;
}
</style>

