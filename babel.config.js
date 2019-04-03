module.exports = {
  presets: [
    '@vue/app',
    ['env',            //添加 babel-preset-env 配置
      {
        'modules': false
      }
    ]
  ],
  plugins: [        // element官方教程
    ["import", {
      "libraryName": "mand-mobile",
      "libraryDirectory": "lib"
    }]
  ]
}
