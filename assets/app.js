
let text = prompt ('Введите код ICAO, например KL1234');


const alphabet = {
    'A': 'Alfa',
    'a': 'Alfa',
    'B': 'Bravo',
    'b': 'Bravo',
    'C': 'Charlie',
    'c': 'Charlie',
    'D': 'Delta',
    'd': 'Delta',
    'E': 'Echo',
    'e': 'Echo',
    'F': 'Foxtrot',
    'f': 'Foxtrot',
    'G': 'Golf',
    'g': 'Golf',
    'H': 'Hotel',
    'h': 'Hotel',
    'I': 'India',
    'i': 'India',
    'J': 'Juliet',
    'j': 'Juliet',
    'K': 'Kilo',
    'k': 'Kilo',
    'L': 'Lima',
    'l': 'Lima',
    'M': 'Mike',
    'm': 'Mike',
    'N': 'November',
    'n': 'November',
    'O': 'Oscar',
    'o': 'Oscar',
    'P': 'Papa',
    'p': 'Papa',
    'Q': 'Quebec',
    'q': 'Quebec',
    'R': 'Romeo',
    'r': 'Romeo',
    'S': 'Sierra',
    's': 'Sierra',
    'T': 'Tango',
    't': 'Tango',
    'U': 'Uniform',
    'u': 'Uniform',
    'V': 'Victor',
    'v': 'Victor',
    'W': 'Whiskey',
    'w': 'Whiskey',
    'X': 'X-ray',
    'x': 'X-ray',
    'Y': 'Yankee',
    'y': 'Yankee',
    'Z': 'Zulu',
    'z': 'Zulu',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Fouth',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '0': 'Zero',
    ' ': ' ',
    '.': '.',
    '-': '-',
};




for (let item in alphabet) {if (item===text) 
    {console.log (alphabet[item])}
    

}




console.log (alphabet[text]);