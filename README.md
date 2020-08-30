<!-- @format -->

# umi-plugin-patch-routes

[![NPM version](https://img.shields.io/npm/v/umi-plugin-convention-patch-routes.svg?style=flat)](https://npmjs.org/package/umi-plugin-convention-patch-routes) [![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-convention-patch-routes.svg?style=flat)](https://npmjs.org/package/umi-plugin-convention-patch-routes)


## Notice
This plugin is suitable for Ant Design Pro V5


## Usage

Configure in `config/extraConfig.json`,

```json
{
    // 不需要布局的约定式路由path
    "noLayoutPaths": [
        "/user/login"
    ],
    // 权限过滤器（支持不包含）
    "access": {
        "name": "accessFilter",
        "exclude": ["/user/login"]
    }
}
```

## LICENSE

MIT
