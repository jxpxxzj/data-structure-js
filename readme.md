# data-structure-js
数据结构实验用, JavaScript 实现.

## 目录结构
```
├─src                   # 源代码
│  ├─Graph              # 图
│  ├─SequenceList       # 线性表
│  ├─SortAlgorithms     # 排序算法
│  ├─StackAndQueue      # 栈和队列
│  ├─String             # 串
│  └─Tree               # 树
└─test                  # 测试
```

## 使用
```js
var List = require('./src/SequenceList/list');
var myList = new List();
myList.append(1);
myList.append(2);
myList.append(3);
myList.toString(); // 1,2,3
```

## 脚本
```bash
$ npm run test  # 执行测试
```

## License
[MIT](http://opensource.org/licenses/MIT)