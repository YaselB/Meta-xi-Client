import { Component , Input , OnInit,  SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-notification',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    @Input() message : string = '';
    @Input() type : 'success' | 'error' = 'success';
    isVisible: boolean = false;

    ngOnInit(): void {
        this.checkMessage();
        
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['message'] && changes['message'].currentValue || changes['type'] && changes['type'].currentValue)  {
            this.checkMessage();
        }
    }
    private checkMessage(){
        if(this.message){
            this.show();
        }
    }
    show() {
        this.isVisible = true;
        setTimeout(() => {
            this.hide();
        }, 5000);
    }
    hide() {
        this.isVisible = false;
    }
}