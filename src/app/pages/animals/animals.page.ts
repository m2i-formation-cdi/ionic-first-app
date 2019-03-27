import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {

  private animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  private chosenAnimal: any;

  private audio: any;

  private reorderDisabled:boolean = true;



  constructor(private toastCtrl: ToastController) { 

  }

  ngOnInit() {
  }


  toggleReorder(){
    this.reorderDisabled = ! this.reorderDisabled;
  }

  onReorder(even){
    console.log(even);
    let animal = this.animals[even.detail.from];

    this.animals.splice(even.detail.from, 1);

    this.animals.splice(even.detail.to,0, animal);

    even.detail.complete();
    
  }

  guess(animal){
    if(animal == this.chosenAnimal){

      //Création du toast
      const toast = this.toastCtrl.create({
        message: "Bravo tu as gagné",
        duration: 2000,
        position: "middle"
      });

      //Affichage du toast
      toast.then(function(toastElement){
        toastElement.present();
      });

      //Réinitialisation du jeu
      this.chosenAnimal = null;

    } else {

      //Création du toast
      const toast = this.toastCtrl.create({
        message: "Essaie encore petit abruti",
        duration: 2000,
        position: "middle"
      });

      //Affichage du toast
      toast.then(function(toastElement){
        toastElement.present();
      });
    }
  }

  playSound() {
    //arrêt du son en cours
    if (this.audio && (this.audio.currentTime < this.audio.duration)) {
      this.audio.pause();
    }

    //Si aucun animal n'a été sélectionné
    if (!this.chosenAnimal) {
      //Sélectionner un animal au hasard
      let index = Math.floor(Math.random() * this.animals.length);
      //Enregistrement de l'animal choisi
      this.chosenAnimal = this.animals[index];
    }


    //Lecture du son
    this.audio = new Audio();
    this.audio.src = "assets" + this.chosenAnimal.file;
    this.audio.load();
    this.audio.play();

  }

}
