const questions = [
    {
        question: "What is your favorite color?", 
        response: "My favorite color is: "
    },
    {
        question: "What is your favorite football team?", 
        response: "My favorite football team is: "
    },
    {
        question: "Where were you born?", 
        response: "I was born in: "
    },
    {
        question: "What is your favorite movie?", 
        response: "My favorite movie is: "
    },
]

export function getQuestions() {
    return questions;
}

export async function getMadlibTemplate(){
    const response = fetch("http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=10");
    return (await response).json();
}