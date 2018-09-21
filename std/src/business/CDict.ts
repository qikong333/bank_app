import { Injectable } from '@angular/core';
@Injectable()
export class CDict {
	Location = 175;
	BoxCategory = 160;
	BoxManufacturer = 173;
	ToolCategoryUnit = 169;
	Supply = 147;
	TakingStatus = 176;
	NotStart = 177;
	Processing = 178;
	Finished = 179;
	TakingLocationToolStatus = 180;
	inventoryStatus = 181;
	inStock = 182;
	outStock = 183;
	ToolCheckType = 184;
	TagstatusID = 205;
	DocCheckDetailStatus = 187;
	DocBadDetailStatus = 192;
	ToolLifeStatus = 196;
	ToolBadType = 201;
	ToolTagStatus = 205;
	ToolLocationStatus = 209;
	ToolLocationStatusWaitIn = 210;
	ToolLocationStatusInStore = 211
	ToolLocationStatusIn = 212;
	HistoryStatus = 217;
	HistoryOutType = 220;
	HistoryOutTypeBorrow = 221;
	HistoryOutTypeUse = 222;
	HistoryOutTypeTrain = 223;
	Bool = 1;
	Yes = 2;
	No = 3;
	FormStatusToApprove = 22;
	FormStatusEdit = 46;
	Department = 87;
	Role = 86;
	MenuApp = 108;
	HistoryStatusOut = 218;
	HistoryStatusIn = 219;
	Menus: any[] = [];
	CurrentMemberID = '';
	CurrentMember = {};
	CurrentTab = {};
	CheckApproveCheckFinish = 536;
	CheckApproveUnCheckFinish = 538;
	ShowCheck = true;
	Njparentid = 346;
	btn_next_page="btn_next_page";
	btn_next_row="btn_next_row";
	btn_pre_row="btn_pre_row";
	btn_write="btn_write"
	//加大功率
	btn_increase_power = "btn_increase_power"; 
	//减小功率
	btn_reduced_power="btn_reduced_power";          
}
