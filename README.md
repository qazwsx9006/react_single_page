# 練習 single page (認識 react-routing)


跟著reactjs101 執行
`$ npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react webpack webpack-dev-server html-webpack-plugin`

會出現error 。
```
npm ERR! Darwin 15.4.0
npm ERR! argv "/Users/tsengmingyu/.nvm/versions/node/v4.6.0/bin/node" "/Users/tsengmingyu/.nvm/versions/node/v4.6.0/bin/npm" "install" "eslint-plugin-import" "--save-dev"
npm ERR! node v4.6.0
npm ERR! npm  v2.15.9
npm ERR! code EPEERINVALID

npm ERR! peerinvalid The package eslint-plugin-import@2.0.1 does not satisfy its siblings' peerDependencies requirements!
npm ERR! peerinvalid Peer eslint-config-airbnb@12.0.0 wants eslint-plugin-import@^1.16.0

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/tsengmingyu/react/single_page/npm-debug.log
```
### 猜測是eslint-plugin-import版本問題

移除 node_modules 內 react 後，重新執行。
先執行安裝基本開發環境用套件。

1. $ npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin webpack webpack-dev-server

依序執行安裝eslint 相關套件。
a. $ npm install eslint --save-dev
b. $ npm install eslint-config-airbnb --save-dev
c. $ npm install eslint-loader --save-dev

發現執行到 eslint-loader 後 也將其他 reactjs101 提到的其他套件(eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react)也已經安裝好（可能是該套件後來版本合併了。）

## 以上為開發過程記錄
