function noOne() {
    var word = 'JavaScript';
    var second = 'is';
    var third = 'awesome';
    var fourth = 'and';
    var fifth = 'I';
    var sixth = 'love';
    var seventh = 'it!';

    /* output yang diinginkan "JavaScript is awesome and I love it! " */
    console.log("Jawaban no Satu : ");
    console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)
}

function noTwo() {
    var sentence = "I am going to be React Native Developer";
    var word = sentence.split(' ');
    // word.forEach(function(a, index) {
    //     console.log(a);
    // });

    /* output yang diinginkan
    First word: I 
    Second word: am 
    Third word: going 
    Fourth word: to 
    Fifth word: be 
    Sixth word: React 
    Seventh word: Native 
    Eighth word: Developer
    */

    console.log("\nJawaban no Dua : ");
    console.log('First Word: ' + word[0]);
    console.log('Second Word: ' + word[1]);
    console.log('Third Word: ' + word[2]);
    console.log('Fourth Word: ' + word[3]);
    console.log('Fifth Word: ' + word[4]);
    console.log('Sixth Word: ' + word[5]);
    console.log('Seventh Word: ' + word[6]);
    console.log('Eighth Word: ' + word[7])
}

function noThree() {
    // Soal No. 3 Mengurai Kalimat (Substring)
    var sentence2 = 'wow JavaScript is so cool';

    var exampleFirstWord2 = sentence2.substring(0, 3);
    var secondWord2 = sentence2.substring(4, 14);
    var thirdWord2 = sentence2.substring(15, 17);
    var fourthWord2 = sentence2.substring(18, 20);;
    var fifthWord2 = sentence2.substring(21);


    /**
    expected output

    First Word: wow 
    Second Word: JavaScript 
    Third Word: is 
    Fourth Word: so 
    Fifth Word: cool 
     */
    console.log("\nJawaban no Tiga: ");
    console.log('First Word: ' + exampleFirstWord2);
    console.log('Second Word: ' + secondWord2);
    console.log('Third Word: ' + thirdWord2);
    console.log('Fourth Word: ' + fourthWord2);
    console.log('Fifth Word: ' + fifthWord2);
}

function noFour() {
    // Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
    var sentence3 = 'wow JavaScript is so cool';

    var exampleFirstWord3 = sentence3.substring(0, 3);
    var secondWord3 = sentence3.substring(4, 14);
    var thirdWord3 = sentence3.substring(15, 17);
    var fourthWord3 = sentence3.substring(18, 20);;
    var fifthWord3 = sentence3.substring(21);

    var firstWordLength = exampleFirstWord3.length;
    var secondWordLength = secondWord3.length;
    var thirdWordLength = thirdWord3.length;
    var fourthWordLength = fourthWord3.length;
    var fifthWordLength = fifthWord3.length;
    /**
     * expected output
     *
     * First Word: wow, with length: 3 
     * Second Word: JavaScript, with length: 10 
     * Third Word: is, with length: 2 
     * Fourth Word: so, with length: 2 
     * Fifth Word: cool, with length: 4
     */
    console.log("\nJawaban no Empat: ");
    console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
    console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
    console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
    console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
    console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);

}


noOne();
noTwo();
noThree();
noFour();