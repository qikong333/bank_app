import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { CDict } from '../../business/CDict';
import { DictManager } from './../../business/DictManager';
import { CCore } from "core";

@Component({
    selector: 'sub',
    templateUrl: 'sub.html',
    styleUrls: ['./sub.scss']
})

export class SubComponent {
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
                let menus = JSON.parse(result);
                let speakerId = this.route.snapshot.paramMap.get('pageID');
                this.title = this.dictManager.getMenuByID(menus,speakerId)[0].name;
                this.tabs = this.dictManager.getChild(menus,speakerId);
            }
        });
        this.cCore.getCurrentMember().then(res=>{
            this.currentMember =JSON.parse(res).data;
            
        });
    }

    ionViewDidEnter() {
        
    }

    goNext(path){
        this.navCtrl.navigateForward(path.toString());
    }
}
