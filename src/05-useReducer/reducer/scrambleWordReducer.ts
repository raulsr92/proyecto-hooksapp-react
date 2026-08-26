
//Interfaces

    interface ScrambleWordsState{
        currentWord: string,
        errorCounter: number,
        guess: string,
        isGameOver: boolean
        maxAllowErrors: number,
        maxSkips: number,
        points: number,
        scrambledWord: string,
        skipCounter: number,
        words: string[],
        totalWords: number
    }

//Types

    export type ScrambledWordsAction = 
    |{ type: 'Falta definir'}
    |{ type: 'Falta definir'}
    |{ type: 'Falta definir'}

// Array principal del juego

    const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
    ];

//Funciones

    // Esta función mezcla el arreglo para que siempre sea aleatorio

        const shuffleArray = (array: string[]) => {
        return [...array].sort(() => Math.random() - 0.5);
        };

    // Esta función mezcla las letras de la palabra
    
        const scrambleWord = (word: string = '') => {
        return word
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('');
        };


        const showNextWord = ()=>{

            const newWords = words.slice(1)
            setWords( newWords);
            setCurrentWord(newWords[0])
            setScrambledWord(scrambleWord(newWords[0]))

        } 

// Estado Inicial

        export const getInitialState = ():ScrambleWordsState=>{

            const shuffledWords = shuffleArray([...GAME_WORDS])

            return{
                currentWord: shuffledWords[0],
                errorCounter: 0,
                guess: '',
                isGameOver: false,
                maxAllowErrors: 3,
                maxSkips: 3,
                points: 0,
                scrambledWord: scrambleWord(shuffledWords[0]),
                skipCounter: 0,
                words: shuffledWords,
                totalWords: shuffledWords.length
            };
        }


//-------------------------------------------------------------------------------------

export const scrambleWordReducer = (state:ScrambleWordsState, action:ScrambledWordsAction):ScrambleWordsState=>{

    switch (action.type) {
        case value:
            
            return state;

        case value:
            
            return state;

        case value:
            
            return state;

        default:
            return state;
    }

}