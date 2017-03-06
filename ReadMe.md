## dev

- 安装https://cnpmjs.org/
- 安装nodejs, 确保nodejs -v // v5.9.1  visit https://nodejs.org/en/
- 安装npm一般随nodejs, 确保npm -v // 3.7.3 
- cnpm install 
- npm start


## 知识

- js是写的es2015, 俗称es6, 并不是熟知的js, 参考http://es6.ruanyifeng.com/

```
request.get('/some-url')
  .end((err, res) => {
    if (err) {
      this.setState({
        date: 1111
      })
    }
  })
```

- js通过[babel](https://babeljs.io/)转成熟知的js, 也就是所有浏览器都可以认识

- react 语法等 https://facebook.github.io/react/docs/hello-world.html

```
render() {
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={value => this.handleChange(value)} />
      <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      <Button onClick={e => this.onClick(e)}>kaksssa</Button>
    </div>
  );
}
```

- antd https://ant.design/docs/react/getting-started-cn