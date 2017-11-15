import { Component, OnInit } from '@angular/core';
import ViewerOptions = Cesium.ViewerOptions;
import Viewer = Cesium.Viewer;

@Component({
	templateUrl: './cesium.component.html',
	styleUrls: ['./cesium.component.scss']
})
export class CesiumComponent implements OnInit {
	viewerOptions: ViewerOptions = <ViewerOptions>{
		scene3DOnly: true,
		selectionIndicator: false,
		baseLayerPicker: false
	};
	viewer: Viewer;

	constructor() {
	}

	ngOnInit() {
	}

	onViewerReady($event: Viewer) {
		this.viewer = $event;
	}
}
