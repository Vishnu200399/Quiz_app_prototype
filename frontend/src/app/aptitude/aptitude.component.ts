import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {
  workandtimeSelected: boolean = false;
  BloodrelationsSelected: boolean = false;
  MixturesSelected: boolean = false;
  ProfitandlossSelected: boolean = false;
  AverageSelected:boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  startQuiz() {
    let selectedCategory: string = '';
    if (this.workandtimeSelected) {
      selectedCategory = 'workandtime';
    } else if (this.BloodrelationsSelected) {
      selectedCategory = 'Bloodrelations';
    } else if (this.MixturesSelected) {
      selectedCategory = 'MixturesAndAlligations';
    } else if (this.ProfitandlossSelected) {
      selectedCategory = 'ProfitandLoss';
    } else if (this.AverageSelected) {
      selectedCategory = 'Average';
    }
    // Navigate to the Aptitudequestion module and pass selected category
    this.router.navigate(['/aptitudequestion', { category: selectedCategory }]);
}



}
