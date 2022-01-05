import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";


@Component({ 
	templateUrl: "home.component.html",
	styleUrls: ['./home.component.css'] 
})

export class HomeComponent implements OnInit {
	data = [{title: '', url: '', image: ''}];
	url: string;

	constructor(private http: HttpClient, private route: ActivatedRoute) {}

	ngOnInit() {}

	onSubmit(url: string) {
		this.http.get<any>(`api/urlmeta/?url=${url}`).subscribe((x) => {
			this.data = x.data;
			this.url = '';
		});
	};
};
