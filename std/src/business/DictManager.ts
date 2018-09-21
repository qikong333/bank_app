import { BaseManager } from './BaseManager';
import { Injectable } from '@angular/core';

@Injectable()
export class DictManager extends BaseManager {

    //取字典列表
    getAllDicts(parentID: number) {
        return this.post('dict/getalldicts', { "parentid": parentID });
    };
    //根据父级ID  取子集
    getNextDicts(parentID: number) {
        return this.post('dict/getnextdicts', { "parentid": parentID });
    };
    getNextNodes(parentID: number) {
        return this.post('dict/getnextnodes', { "parentid": parentID });
    };
    //删除一个节点
    removeDictByID(id: string) {
        return this.post('dict/remove', { "id": id });
    };
    //保存一个节点
    saveDict(data: any) {
        return this.post('dict/save', data);
    }
    getMyLocations() {
        return this.post('dict/getmylocations', {});
    }
    //查看是否有下级
    hasSub(dicts, parentID) {
        for (let i = 0; i < dicts.length; i++) {
            if (dicts[i].parentID == parentID) {
                return true;
            }
        }
        return false;
    }

    getChild(dicts, parentID) {
        let nodes = []
        for (let i = 0; i < dicts.length; i++) {
            if (dicts[i].parentID == parentID) {
                nodes.push(dicts[i]);
            }
        }
        return nodes;
    }

    getMenuByID (dicts, menuID) {
        let menus;
        if (!dicts || dicts.length == 0) {
            return null;
        }
        menus = dicts.filter(d => d.ID == menuID);
        return menus;
    }

}