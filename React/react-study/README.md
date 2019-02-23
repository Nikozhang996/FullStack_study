React基础学习
-

##### 1、JSX语法
- 每一个组件必须只有一个概目录`<div>`
- 声明css中的class需要用className，因为class在JS里是关键字
- {} 花括号里可以存放JS表达式，但必须有运算或返回结果，且返回结果必须是普通类型
- {} 花括号表达式里不能放引用类型数据，函数也不行
- {} 花括号里如果引入undefined,null,boolean值则不渲染输出
- 循环列表中需要带上key关键字，如同vue里的v-for为每个渲染item保存单独的引用

##### 2、JSX渲染机制
1. 使用babel把JSX语法编译为React.createElement语法
2. 执行React.createElement(type,props,children)，创建一个对象（虚拟DOM）
3. 使用React.render()方法把生成的虚拟DOM对象生成真实DOM元素插入到HTML结构中