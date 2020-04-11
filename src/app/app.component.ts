import { Component, OnInit } from '@angular/core';
import marked from 'marked'
import DOMPurify from 'dompurify'
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'application';
  textToBeMarkedDown = '# Marked in the browser\n\nRendered by **marked**.';
  themes = [
    "Light Mode",
    "Dark Mode",
  ]
  themeClasses = [
    'dark',
    'light',
  ]
  currentTheme = 0

  ngOnInit(): void {
    // document.getElementsByClassName('display-field')[0].innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');
  }

  formattedMarkdownText() {
    let formattedTextToBeMarkedDown = this.textToBeMarkedDown
    formattedTextToBeMarkedDown = formattedTextToBeMarkedDown
    .replace(/\n$/g, '\n\n')
    .replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
    return formattedTextToBeMarkedDown
  }

  getPurifiedHTML() {
    let markedHTML = marked(this.textToBeMarkedDown);
    let purifiedHTML = DOMPurify.sanitize(markedHTML)
    return  purifiedHTML;
  }

  copyMarkdownToClipboard() {
    navigator.clipboard.writeText(this.textToBeMarkedDown)
  }

  toggleTheme() {
    if (this.currentTheme == 0) {
      this.currentTheme = 1
    } else {
      this.currentTheme = 0
    }
  }
}


