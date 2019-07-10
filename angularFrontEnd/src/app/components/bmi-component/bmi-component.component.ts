import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-bmi-component',
  templateUrl: './bmi-component.component.html',
  styleUrls: ['./bmi-component.component.css']
})
export class BmiComponentComponent implements OnInit {

  calculatedBMI: number;
  specification:string;
  description: string;
  ageError:boolean = false;
  weightError = false;
  heightError = false;
  constructor(private userService: UserService,private popup:Popup) { }

  ngOnInit() {
  }

  calculateBmi({ value, valid }) {
    if(valid){
      if(value.age < 1  || value.age > 120){

        this.ageError = true;

        setTimeout(function() {
          this.ageError = false;
          window.location.reload();

        }.bind(this),5000);
        
      }else if(value.weight < 5  || value.weight > 300){

        this.weightError = true;

        setTimeout(function() {
          this.weightError = false;
          window.location.reload();

        }.bind(this),5000);
      }else if(value.height < 50  || value.height > 230){

        this.heightError = true;

        setTimeout(function() {
          this.heightError = false;
          window.location.reload();

        }.bind(this),5000);
      } else {
        this.userService.postCalculateBMI(value).subscribe(res => {
          this.calculatedBMI = res;
          switch(true){
            case (this.calculatedBMI < 16):
              this.specification = "Starvation";
              this.description = "Your condition might be dangerous to hour health. Consult a specialist doctor immediately!!!";
              break;
            case (this.calculatedBMI >= 16 && this.calculatedBMI <17):
            this.specification = "Emaciation";
            this.description = `This condition might happen due to a recent illness or anorexia. \n
            If not treated correctly, might lead to starvation which might be dangerous to health`;
            break;
            case (this.calculatedBMI >= 17 && this.calculatedBMI <18.5):
              this.specification="Underweight";
              this.description =`This condition might be dangerous to your health, especially if you are a 
              young person.`;
              break;
            case (this.calculatedBMI >= 18.5 && this.calculatedBMI <25):
              this.specification="Congratulations! Your weight is correct! ";
              this.description =`Keep it that way! Do not forget about physical activity. Even if your weight is correct,
              in a healthy body, healthy mind`;
              break;
            case (this.calculatedBMI >= 25 && this.calculatedBMI <30):
              this.specification="Overweight";
              this.description=`Overweight, unlike obesity, is not yet a disease, but neglected can lead to many diseases.
              The most dangerous among them are: atherosclerosis, diabetes, hypertension, liver disease, 
              osteoarticular system diseases, cancer or coronary heart disease. 
              Therefore, we encourage you to consult a specialist about your weight - a doctor and a dietician.`
              break;
            case (this.calculatedBMI >= 30 && this.calculatedBMI <35):
              this.specification="First degree obesity";
              this.description=`A healthy body needs less fat than you have. 
              Collecting too much of it leads to many conditions, such as diabetes, hypertension, 
              atherosclerosis or liver disease.
              That is why it is worth doing basic research and consult a doctor to rule out the underlying causes of such a high Body Mass Index.`;
              break;
            case (this.calculatedBMI >= 35 && this.calculatedBMI <40):
              this.specification="Sesond degree obesity";
              this.description=`Your condition might be dangerous to hour healt. Consult a specialist doctor immediately!!!
              This condition might lead to to many conditions, such as diabetes, hypertension, 
              atherosclerosis or liver disease.`;
              break;
            case (this.calculatedBMI > 40):
              this.specification="Third degree obesity";
              this.description=`This condition is athreat to your life.
              Consult a specialist doctor immediately!!!
              This condition might lead to to many conditions, such as diabetes, hypertension, 
              atherosclerosis or liver disease.`;
              break;
            default:
              this.specification="Something went wrong";
          }
          this.popup.show();

          setTimeout(function() {
            this.popup.hide();
            window.location.reload();

          }.bind(this),5000);   
        })
      }
    }     
  }
}
