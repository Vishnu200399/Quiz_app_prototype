import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-aptitudequestion',
  templateUrl: './aptitudequestion.component.html',
  styleUrls: ['./aptitudequestion.component.scss']
})
export class AptitudequestionComponent implements OnInit {
  public questions: any[] = [];
  public category: string = '';

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.category = params['category'];
    this.getQuestionsByCategory(this.category);
    });
  }

  getQuestionsByCategory(category: string) {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.questions = res.questions.filter((question: { category: string; }) => question.category === category);
    });
  }

}
