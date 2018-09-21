import { Component, OnInit} from '@angular/core';
import { CDict } from "../../business/CDict";
import { DictManager } from "../../business/DictManager";
import { Router } from '@angular/router';
import { CCore } from "../../business/CCore";

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit{
    public tabs: any[] = [];
    constructor(
        public router : Router,
        public cDict: CDict,
        public cCore : CCore,
        public dictManager:DictManager
    ) {
        this.initMenu();
    }

    ngOnInit(): void {

    }

    initMenu (){
        let menuStr = localStorage.getItem('menu') || '';
        let menus = JSON.parse(menuStr);
        this.tabs = this.dictManager.getChild(menus,this.cDict.MenuApp);
        for (let index = 0; index < this.tabs.length; index++) {
            this.tabs[index].routerLetName = this.getTabRouteName(this.tabs[index].extension);

            if(this.dictManager.hasSub(menus,this.tabs[index].ID)){
                this.tabs[index]['hasChild'] = true;
                this.tabs[index].params = this.tabs[index];
            }
        }
        this.goToSubPage(this.tabs[0]);
    }

    getTabRouteName (extension) {
        if (extension) {
            let end = extension.indexOf(':');
            let start = extension.indexOf('(') + 1;
            extension = extension.substring(start,end) || '';
        }
        return extension;
    }



    goToSubPage (tab) {
        this.router.navigateByUrl(`/app/tabs/(${tab.extension}:${tab.extension})`);
    }

}
