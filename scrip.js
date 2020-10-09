let rightAnswer;
let currentQuestionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let timeInterval;
let time = 10; 

const cuestionary = [
   {
      "question": "1.¿Quién escribió la novela La fiesta del chivo?",
      "answers": ["Mario Vargas Llosa","Juan Rulfo","Jorge Luis Bordes"]
   },
   {
      "question": "2.¿Qué escritor colombiano es autor de El amor en tiempos de cólera?",
      "answers": ["Gabriel Garcia Márquez","Mario Vargas Llosa","Pablo Neruda"]
   },
   {
      "question": "3.¿Qué escritor francés es autor de la novela Madame Bovavy?",
      "answers": ["Gustave Flaubert","Mathias Malziev","Julio Verne"]
   },
   {
      "question": "4.¿Cómo se llama el primer libro de la saga Harry Potter?",
      "answers": ["Harry Potter y la piedra filosofal","Harry Potter y la cámara secreta","Harry Potter y el prisionera de azcaban"]
   },
   {
      "question": "5.¿Cómo se llama la esposa y el hijo de Odiseo en el poema épico griego La Odisea?",
      "answers": ["Penélope y Telémaco","Teoclímeno y Atenea","Circe y Polifemo"]
   },
   {
      "question": "6.¿En qué tragedia Inglesa se narra la historia de dos jóvenes enamorados pertenecientes a familias rivales(los Capuletos y los Montescos?",
      "answers": ["Romeo y Julieta","Vestigios Mortales","Destino"]
   },
   {
      "question": "7.¿Qué novelista británica de la época georgina escribía el libro Orgullo y Perjuicio en 1813?",
      "answers": ["Jane Austen","Rummer Godden","Anita Brookner"]
   },
   {
      "question": "8.¿Qué escritor estadounidense escribió el libro Moby-Dick publicado en 1651?",
      "answers": ["Herman Melville","Ernest Hemingway","William Faulkner"]
   },
   {
      "question": "9.¿Cuál es la literatura más antigua de todos las literaturas europeas y la que ha ejercido mayor inluencia en  la posteridad?",
      "answers": ["La literatura griega","Literatura contemporánea","Literatura clásica"]
   },
   {
      "question": "10.¿Qué dramaturgo británico escribió la trajedia Julio César?",
      "answers": ["William Shakespeare","Harold Pinter","Tom Stopparg"]
   }
];

const printHTMLQuestion = (i) => {
   currentQuestionIndex++;   
   const q = cuestionary[i];
   let a = q.answers;   
   rightAnswer = a[0];
   a = a.sort((a,b) => Math.floor(Math.random() * 3) -1);

   const htmlAnswersArray = a.map( currentA => `<p class="answer"><button onClick="evaluateAnswer('${currentA}', this)">X</button> <span>${currentA}</span></p>`);
			const htmlAnswers = htmlAnswersArray.join(' ');


				let htmlQuestionCode = `<p>${q.question}</p><div>${htmlAnswers}</div>`;
			document.querySelector('.question').innerHTML = htmlQuestionCode;

			time = 10;
			document.querySelector('.time').innerHTML = time;
			clearInterval(timeInterval);
			timeInterval = setInterval( ()=> {
				time--;
				if(time == 0){
					alert("Has perdido");
					clearInterval(timeInterval);

				}else{
					document.querySelector('.time').innerHTML = time;
				}
			},1000)

      }
      
      const evaluateAnswer = (answer, obj )=>{
			document.querySelectorAll('.answer').forEach( a => a.classList.remove('right', 'wrong'));

			const parentP = obj.parentNode;

			console.log('answer:  ' + answer + ', rightAnswer: ' + rightAnswer)
			if(answer == rightAnswer){
				parentP.classList.add('right');
				rightAnswers++;
				document.querySelector('.rightCounter').innerHTML = rightAnswers;
			}else{
				parentP.classList.add('wrong');
				wrongAnswers++;
				document.querySelector('.wrongCounter').innerHTML = wrongAnswers;
			}
		}

		const nextQuestion = _ => {

		}

		const iniciarTest = _ =>{
			printHTMLQuestion(0);
			document.querySelector('.btnIniciar').style.display = 'none';
		}


/*
     pregunta: "1.¿Quién escribió la novela La fiesta del chivo?",
     respuestaLaCorrecta:"a"

        pregunta: "2.¿Qué escritor colombiano es autor de El amor en tiempos de cólera?",
           c:"Gabriel Garcia Márquez"

     pregunta: "3.¿Qué escritor francés es autor de la novela Madame Bovavy?",
        a:"Gustave Flaubert",

        pregunta: "4.¿Cómo se llama el primer libro de la saga Harry Potter?",
           b:"Harry Potter y la piedra filosofal",

        pregunta: "5.¿Cómo se llama la esposa y el hijo de Odiseo en el poema épico griego La Odisea?",
           c:"Penélope y Telémaco"

        pregunta: "6.¿En qué tragedia Inglesa se narra la historia de dos jóvenes enamorados pertenecientes a familias rivales(los Capuletos y los Montescos?",
           b:"Romeo y Julieta",

        pregunta: "7.¿Qué novelista británica de la época georgina escribía el libro Orgullo y Perjuicio en 1813?",
           c:"Jane Austen"
        
        pregunta: "8.¿Qué escritor estadounidense escribió el libro Moby-Dick publicado en 1651?",
           a:"Herman Melville",

        pregunta: "9.¿Cuál es la literatura más antigua de todos las literaturas europeas y la que ha ejercido mayor inluencia en  la posteridad?",
           c:"La literatura griega"
       
        pregunta: "10.¿Qué dramaturgo británico escribió la trajedia Julio César?",
           b:"William Shakespeare",
*/