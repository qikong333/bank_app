import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CDict } from '../../business/CDict';
import { DictManager } from './../../business/DictManager';
import { ActivatedRoute } from "@angular/router";
import { CCore } from "../../business/CCore";
import { Router } from "@angular/router";

@Component({
    selector: 'sub-page',
    templateUrl: 'sub.page.html',
    styleUrls: ['./sub.page.scss']
})

export class SubPage {
    public tabs : any=[];
    public title:string;
    public tab :any={};
    private currentMember :any={};
    constructor(public navCtrl: NavController,
                public cCore : CCore,
                public router : Router,
                private route: ActivatedRoute,
                public cDict:CDict,public dictManager:DictManager) {

    }

    navigate (e) {
        this.router.navigate(['/app/mine/' + e.extension]);
    }
    ngOnInit(): void {
        this.cCore.getMenus().then(result => {
            if (result) {
                this.title = '发的';
                let menus = JSON.parse(result);
                let speakerId = this.route.snapshot.paramMap.get('pageID');
                this.title = this.dictManager.getMenuByID(menus,speakerId)[0].name;
                this.tabs = this.dictManager.getChild(menus,speakerId);
                this.currentMember = this.cDict.CurrentMember['data'];
            }
        });
    }

    ionViewDidEnter() {
        
    }
    goNext(path){
        this.navCtrl.navigateForward(path.toString());
    }
}
