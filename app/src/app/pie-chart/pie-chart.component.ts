import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartOptions, ChartType, RadialChartOptions} from 'chart.js';
import {BaseChartDirective, Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {User} from "../model/user";
import {UserService} from "../service/user-service.service";
import {MatTable, MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  usersBlue: User[];
  usersRed : User[];
  usersGreen : User[];
  usersYellow: User[];
  usersIndigo : User[];
  usersViolet : User[];
  usersOrange : User[];
  users: User[];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @ViewChild(MatTable) table: MatTable<any>;
  // Pie
   dataSource: any;
  public chartClicked(e:any):void {
   let color = (e.active[0]._model.backgroundColor);
   console.log(color);
     switch(color) {
       case "#0000ff" || "#81f1ed": {
         console.log("blue");
         this.dataSource = this.usersBlue;
         this.table.renderRows();
       }
       case "#5AD3D1" || "#b8f1cc": {
         console.log("Green");
         this.dataSource = this.usersGreen;
         this.table.renderRows();
         break;
       }
       case "#ff0000" ||"#f55066" : {
         console.log("RED");
         this.dataSource = this.usersRed;
         this.table.renderRows();
         break;
       }
       case "#ffe453" || "#fecf45" : {
         console.log("YELLOW");
         this.dataSource = this.usersYellow;
         this.table.renderRows();
         break;
       }
       case "#4B0082"|| "#D396FF" : {
         console.log("INDIGO");
         this.dataSource = this.usersIndigo;
         this.table.renderRows();
         break;
       }
       case "#8F00FF" || "#7f00ff" : {
         console.log("violet");
         this.dataSource = this.usersViolet;
         this.table.renderRows();
         break;
       }
       case "#ffa500" || "#ff8240": {
         console.log("Orange");
         this.dataSource = this.usersOrange;
         this.table.renderRows();
         break;
       }
     }
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [['Blue'],['GREEN'],['RED'],['YELLOW'],['INDIGO'], ['violet'],['Orange']];
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#81f1ed', '#b8f1cc', '#f55066', '#fecf45', '#D396FF','#7f00ff','#ff8240'],
      hoverBackgroundColor: ['#0000ff', '#5AD3D1', '#ff0000','#ffe453' ,'#4B0082','#8F00FF', '#ffa500'],
      borderWidth: 2,
    }
  ];
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      hoverBackgroundColor: ['#0000ff', '#5AD3D1', '#ff0000','#ffe453' ,'#D396FF','#8F00FF', '#ffa500'],
      backgroundColor: ['#81f1ed', '#b8f1cc', '#f55066', '#fecf45', '#4B0082','#7f00ff','#ff8240'],
    },
  ];

  public pieChartType: ChartType = 'pie';
  public lineChartType: ChartType = 'line';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public radarChartType: ChartType = 'radar';

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  constructor(private userService: UserService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  showAll(){
    this.userService.findAll().subscribe(data => {
      this.dataSource =data;
    });
  }
  ngOnInit() {

    this.userService.findBlue().subscribe(data => {
      this.usersBlue = data;
    });
    this.userService.findGreen().subscribe(data => {
      this.usersGreen = data;
    });
    this.userService.findRed().subscribe(data => {
      this.usersRed = data;
    });
    this.userService.findYellow().subscribe(data => {
      this.usersYellow = data;
    });
    this.userService.findIndigo().subscribe(data => {
      this.usersIndigo = data;
    });
    this.userService.findviolet().subscribe(data => {
      this.usersViolet = data;
    });this.userService.findOrange().subscribe(data => {
      this.usersOrange = data;
    });
    this.userService.findAll().subscribe(data => {
      this.dataSource =data;
    });

  }
}
