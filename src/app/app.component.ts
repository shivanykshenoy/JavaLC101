import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  courseTitle = 'Java LC101';
  slideInterval = 600000;
  images = ['assets/images/launchCodeLogo.png',
    'assets/images/shivanyshenoy.jpeg',
    'assets/images/IndiaMap.png',
    'assets/images/paneraLogo.png',
    'assets/images/kiosk.png',
    'assets/images/iOSApp.png',
    'assets/images/delivery.png',
    'assets/images/javaLogo.png',
    'assets/images/classBlueprint.png',
    'assets/images/javac.png'];

  instructor = {
    name: 'Shivany Shenoy',
    jobTitle: 'Software Engineer, Architect',
    bio: 'I love to build things and solve problems using latest tools and frameworks!',
    profile: 'https://www.linkedin.com/in/shivany-shenoy-7651551/'
  };
  subTitle = 'Why Java?';
  reasons = [
    'Most common programming language out there!',
    'Easy to find a job in Technology.',
    'Very mature language!',
    'Easy to understand Object Oriented Programming!',
    'Many Use cases.'
  ];
  setup = 'Setup Steps';
  steps = [
    'Install the latest JDK',
    'Install IntelliJ',
    'Create Hello World!'
  ];
}
