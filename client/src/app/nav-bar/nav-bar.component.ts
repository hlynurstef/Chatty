import { Component, OnInit } from '@angular/core';
import { GlobalEventManagerService } from './../global-event-manager.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	showNavBar = false;
	roomListButtonActive = true;
	lobbyButtonActive = false;

	constructor(private globalEventManagerService: GlobalEventManagerService) {
		this.globalEventManagerService.showNavBarEmitter.subscribe((mode) => {
			// mode will be null the first time it is created, so you need to igonore it when
			if (mode !== null) {
				this.showNavBar = mode;
			}
		});
	}

	ngOnInit() {
	}

	setActive(buttonName: string) {
		this.roomListButtonActive = false;
		this.lobbyButtonActive = false;
		if (buttonName === 'roomList') {
			this.roomListButtonActive = true;
		} else if (buttonName === 'lobby') {
			this.lobbyButtonActive = true;
		}
	}


}
