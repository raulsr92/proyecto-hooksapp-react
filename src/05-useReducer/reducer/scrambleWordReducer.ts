
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
    |{ type: 'SET_GUESS', payload: string }
    |{ type: 'CHECK_ANSWER'}
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
        case 'SET_GUESS':
            
            return {
                ...state,
                guess: action.payload.trim().toUpperCase()
            };
        
        case 'CHECK_ANSWER':{

            if(state.currentWord === state.guess){

                const newWords = state.words.slice(1);

                return {
                    ...state,
                    points: state.points + 1,
                    guess: "",
                    words: newWords,
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0])
                }
            }

            return{
                ...state,
                errorCounter: state.errorCounter + 1,
                guess: "",
                isGameOver: (state.errorCounter +1) >= state.maxAllowErrors 
            }
            
        };

        case value:
            
            return state;

        default:
            return state;
    }

}