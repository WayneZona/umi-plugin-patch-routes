import {IApi} from 'umi'
import {join} from "path";
import {existsSync} from "fs";

const winPath = require('slash2');


const _default = (api: IApi) => {

    let options = {}

    // 从固定的路径去读取配置，而不是从 config 中读取
    const themeConfigPath = winPath(join(api.paths.cwd, 'config/extraConfig.json'));
    if (existsSync(themeConfigPath)) {
        options = require(themeConfigPath);
    }

    api.onPatchRoutes(({routes}) => {
        const {config} = api;
        const {noLayoutPaths, access} = config;
        if (noLayoutPaths || access) {
            const execLayoutPaths = (routes: any) => {
                routes.forEach((route: any) => {
                    if (noLayoutPaths && noLayoutPaths.indexOf(route.path) > -1) {
                        route.layout = false
                    }
                    if(access && access.name){
                        if(access.exclude && access.exclude.indexOf(route.path) === -1 || !access.exclude){
                            route.access = access.name
                        }
                    }
                    route.routes && execLayoutPaths(route.routes)
                })
            };
            execLayoutPaths(routes)
        }
    });

    api.modifyConfig(memo => {
        return {
            ...memo,
            ...options,
        }
    });
}

export default _default