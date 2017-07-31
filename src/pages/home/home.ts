import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  matches: String[];
  isRecording: boolean = false;

  constructor(
    public navCtrl: NavController,
    private speechRecognition: SpeechRecognition
  ) {}

  getPermissions() {
    this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    });
  }

  startListening() {
    let options = {
      language: 'pl-PL'
    };

    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
    });
    this.isRecording = true;
  }
  
}
